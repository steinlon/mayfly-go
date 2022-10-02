#bin/bash

#----------------------------------------------
# 前后端打包编译至指定目录,即快速制作发行版
#----------------------------------------------

project_path=`pwd`
# 构建后的二进制执行文件名
exec_file_name="mayfly-go"
# web项目目录
web_folder="${project_path}/mayfly_go_web"
# server目录
server_folder="${project_path}/server"

function echo_red() {
    echo -e "\033[1;31m$1\033[0m"
}

function echo_green() {
    echo -e "\033[1;32m$1\033[0m"
}

function echo_yellow() {
    echo -e "\033[1;33m$1\033[0m"
}

function buildWeb() {
    cd ${web_folder} || exit
    copy2Server=$1

    echo_yellow "-------------------打包前端开始-------------------"
    yarn run build
    if [ "${copy2Server}" == "2" ] ; then
        echo_green '将打包后的静态文件拷贝至server/static/static'
        rm -rf ${server_folder}/static/static && mkdir -p ${server_folder}/static/static && cp -r ${web_folder}/dist/* ${server_folder}/static/static
    fi
    echo_yellow ">>>>>>>>>>>>>>>>>>>打包前端结束<<<<<<<<<<<<<<<<<<<<\n"
}

function build() {
    cd ${project_path} || exit

    # 打包产物的输出目录
    toFolder=$1
    os=$2
    arch=$3
    copyStatic=$4

    echo $copyStatic

    echo_yellow "-------------------${os}-${arch}打包构建开始-------------------"

    cd ${server_folder} || exit
    echo_green "打包构建可执行文件..."

    execFileName=${exec_file_name}
    # 如果是windows系统,可执行文件需要添加.exe结尾
    if [ "${os}" == "windows" ];then
        execFileName="${execFileName}.exe"
    fi
    CGO_ENABLE=0 GOOS=${os} GOARCH=${arch} go build -o ${execFileName} main.go

    if [ -d ${toFolder} ] ; then
        echo_green "目标文件夹已存在,清空文件夹"
        sudo rm -rf ${toFolder}
    fi
    echo_green "创建'${toFolder}'目录"
    mkdir ${toFolder}

    echo_green "移动二进制文件至'${toFolder}'"
    mv ${server_folder}/${execFileName} ${toFolder}

    if [ "${copy2Server}" == "1" ] ; then
        echo_green "拷贝前端静态页面至'${toFolder}/static'"
        mkdir -p ${toFolder}/static && cp -r ${web_folder}/dist/* ${toFolder}/static
    fi

    echo_green "拷贝脚本等资源文件[config.yml、mayfly-go.sql、readme.txt、startup.sh、shutdown.sh]"
    cp ${server_folder}/config.yml ${toFolder}
    cp ${server_folder}/mayfly-go.sql ${toFolder}
    cp ${server_folder}/readme.txt ${toFolder}
    cp ${server_folder}/startup.sh ${toFolder}
    cp ${server_folder}/shutdown.sh ${toFolder}

    echo_yellow ">>>>>>>>>>>>>>>>>>>${os}-${arch}打包构建完成<<<<<<<<<<<<<<<<<<<<\n"
}

function buildLinuxAmd64() {
    build "$1/mayfly-go-linux-amd64" "linux" "amd64" $2
}

function buildLinuxArm64() {
    build "$1/mayfly-go-linux-arm64" "linux" "arm64" $2
}

function buildWindows() {
    build "$1/mayfly-go-windows" "windows" "amd64" $2
}

function buildMac() {
    build "$1/mayfly-go-mac" "darwin" "amd64" $2
}

function runBuild() {
    # 构建结果的目的路径
    read -p "请输入构建产物输出目录: " toPath
    if [ -z ${toPath} ]; then
      toPath="./deploy"
      mkdir ${toPath}
    fi
    echo "默认当前项目下输出目录: ${toPath}"
    if [ ! -d ${toPath} ] ; then
        echo_red "构建产物输出目录不存在!"
        exit;
    fi
    # 进入目标路径,并赋值全路径
    cd ${toPath} || exit
    toPath=`pwd`

    read -p "是否构建前端[0|其他->否 1->是 2->构建并拷贝至server/static/static]: " runBuildWeb
    read -p "请选择构建版本[0|其他->全部 1->linux-amd64 2->linux-arm64 3->windows 4->mac]: " buildType

    if [ "${runBuildWeb}" == "1" ] || [ "${runBuildWeb}" == "2" ] ; then
        buildWeb ${runBuildWeb}
    fi

    case ${buildType} in
         "1")
            buildLinuxAmd64 ${toPath} ${runBuildWeb}
        ;;
         "2")
            buildLinuxArm64 ${toPath} ${runBuildWeb}
        ;;
        "3")
            buildWindows ${toPath} ${runBuildWeb}
        ;;
        "4")
            buildMac ${toPath} ${runBuildWeb}
        ;;
        *)
            buildLinuxAmd64 ${toPath} ${runBuildWeb}
            buildLinuxArm64 ${toPath} ${runBuildWeb}
            buildWindows ${toPath} ${runBuildWeb}
            buildMac ${toPath} ${runBuildWeb}
        ;;
    esac
}

runBuild
