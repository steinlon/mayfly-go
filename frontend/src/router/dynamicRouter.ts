import 'nprogress/nprogress.css';
import { clearSession, getToken } from '@/common/utils/storage';
import openApi from '@/common/openApi';
import { useUserInfo } from '@/store/userInfo';
import { useRoutesList } from '@/store/routesList';
import { useKeepALiveNames } from '@/store/keepAliveNames';
import router from '.';
import { RouteRecordRaw } from 'vue-router';
import { LAYOUT_ROUTE_NAME } from './staticRouter';
import { LinkTypeEnum } from '@/common/commonEnum';

/**
 * 获取目录下的 route.ts 全部文件
 * @method import.meta.glob
 * @link 参考：https://cn.vitejs.dev/guide/features.html#json
 */
const routeModules: Record<string, any> = import.meta.glob(['../views/**/route.{ts,js}'], { eager: true });

// 后端控制路由：执行路由数据初始化
export async function initBackendRoutes() {
    let allModuleRoutes = {};
    for (const path in routeModules) {
        // 获取默认导出的路由
        const routes = routeModules[path]?.default;
        allModuleRoutes = { ...allModuleRoutes, ...routes };
    }

    const token = getToken(); // 获取浏览器缓存 token 值
    if (!token) {
        // 无 token 停止执行下一步
        return false;
    }
    useUserInfo().setUserInfo({});
    // 获取路由
    let menuRoute = await getBackEndControlRoutes();

    const cacheList: Array<string> = [];
    // 处理路由（component）
    const routes = backEndRouterConverter(allModuleRoutes, menuRoute, (router: any) => {
        // 可能为false时不存在isKeepAlive属性
        if (!router.meta.isKeepAlive) {
            router.meta.isKeepAlive = false;
        }
        if (router.meta.isKeepAlive) {
            cacheList.push(router.name);
        }
    });

    routes.forEach((item: any) => {
        if (item.meta.isFull) {
            // 菜单为全屏展示 (示例：数据大屏页面等)
            router.addRoute(item as RouteRecordRaw);
        } else {
            // 要将嵌套路由添加到现有的路由中，可以将路由的 name 作为第一个参数传递给 router.addRoute()，这将有效地添加路由，就像通过 children 添加的一样
            router.addRoute(LAYOUT_ROUTE_NAME, item as RouteRecordRaw);
        }
    });

    useKeepALiveNames().setCacheKeepAlive(cacheList);
    useRoutesList().setRoutesList(routes);
}

// 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
export async function getBackEndControlRoutes() {
    try {
        const menuAndPermission = await openApi.getPermissions();
        // 赋值权限码，用于控制按钮等
        useUserInfo().userInfo.permissions = menuAndPermission.permissions;
        return menuAndPermission.menus;
    } catch (e: any) {
        console.error('获取菜单权限信息失败', e);
        clearSession();
        throw e;
    }
}

type RouterConvCallbackFunc = (router: any) => void;

/**
 * 后端控制路由，后端返回路由 转换为vue route
 *
 * @description routes参数配置简介
 * @param code(path) ==> route.path -> 路由菜单访问路径
 * @param name ==> title，路由标题 相当于route.meta.title
 *
 * @param meta ==> 路由菜单元信息
 * @param meta.routeName ==> route.name -> 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选) -> 对应模块下route.ts字段key
 * @param meta.redirect ==> route.redirect -> 路由重定向地址
 * @param meta.icon ==> 菜单和面包屑对应的图标
 * @param meta.isHide ==> 是否在菜单中隐藏 (通常列表详情页需要隐藏)
 * @param meta.isFull ==> 菜单是否全屏 (示例：数据大屏页面)
 * @param meta.isAffix ==> 菜单是否固定在标签页中 (首页通常是固定项)
 * @param meta.isKeepAlive ==> 当前路由是否缓存
 * @param meta.linkType ==> 外链类型, 内嵌: 以iframe展示、外链: 新标签打开
 * @param meta.link ==> 外链地址
 * */
export function backEndRouterConverter(allModuleRoutes: any, routes: any, callbackFunc: RouterConvCallbackFunc = null as any, parentPath: string = '/') {
    if (!routes) {
        return [];
    }

    const routeItems = [];
    for (let item of routes) {
        if (!item.meta) {
            return item;
        }
        // 将json字符串的meta转为对象
        item.meta = JSON.parse(item.meta);

        let path = item.code;
        // 如果不是以 / 开头，则路径需要拼接父路径
        if (!path.startsWith('/')) {
            path = parentPath + '/' + path;
        }
        item.path = path;
        delete item['code'];

        // route.meta.title == resource.name
        item.meta.title = item.name;
        delete item['name'];

        // route.name == resource.meta.routeName
        const routerName = item.meta.routeName;
        item.name = routerName;
        // 如果是外链类型，name的路由名都是Link 或者 Iframes会导致路由名重复，无法添加多个外链
        if (item.meta.link) {
            if (item.meta.linkType == LinkTypeEnum.Link.value) {
                item.component = () => import('@/layout/routerView/link.vue');
            } else {
                item.component = () => import('@/layout/routerView/iframes.vue');
            }
        } else {
            // routerName == 模块下route.ts 字段key == 组件名
            item.component = allModuleRoutes[routerName];
        }
        delete item.meta['routeName'];

        // route.redirect == resource.meta.redirect
        if (item.meta.redirect) {
            item.redirect = item.meta.redirect;
            delete item.meta['redirect'];
        }
        // 存在回调，则执行回调
        callbackFunc && callbackFunc(item);
        item.children && backEndRouterConverter(allModuleRoutes, item.children, callbackFunc, item.path);
        routeItems.push(item);
    }

    return routeItems;
}
