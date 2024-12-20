package router

import (
	"mayfly-go/internal/mongo/api"
	"mayfly-go/internal/mongo/imsg"
	"mayfly-go/pkg/biz"
	"mayfly-go/pkg/ioc"
	"mayfly-go/pkg/req"

	"github.com/gin-gonic/gin"
)

func InitMongoRouter(router *gin.RouterGroup) {
	m := router.Group("mongos")

	ma := new(api.Mongo)
	biz.ErrIsNil(ioc.Inject(ma))

	dashbord := new(api.Dashbord)
	biz.ErrIsNil(ioc.Inject(dashbord))

	saveDataPerm := req.NewPermission("mongo:data:save")

	reqs := [...]*req.Conf{
		req.NewGet("dashbord", dashbord.Dashbord),

		// 获取所有mongo列表
		req.NewGet("", ma.Mongos),

		req.NewPost("/test-conn", ma.TestConn),

		req.NewPost("", ma.Save).Log(req.NewLogSaveI(imsg.LogMongoSave)),

		req.NewDelete(":id", ma.DeleteMongo).Log(req.NewLogSaveI(imsg.LogMongoDelete)),

		// 获取mongo下的所有数据库
		req.NewGet(":id/databases", ma.Databases),

		// 获取mongo指定库的所有集合
		req.NewGet(":id/collections", ma.Collections),

		// mongo runCommand
		req.NewPost(":id/run-command", ma.RunCommand).Log(req.NewLogSaveI(imsg.LogMongoRunCmd)),

		// 执行mongo find命令
		req.NewPost(":id/command/find", ma.FindCommand),

		req.NewPost(":id/command/update-by-id", ma.UpdateByIdCommand).RequiredPermission(saveDataPerm).Log(req.NewLogSaveI(imsg.LogUpdateDocs)),

		// 执行mongo delete by id命令
		req.NewPost(":id/command/delete-by-id", ma.DeleteByIdCommand).RequiredPermission(req.NewPermission("mongo:data:del")).Log(req.NewLogSaveI(imsg.LogDelDocs)),

		// 执行mongo insert 命令
		req.NewPost(":id/command/insert", ma.InsertOneCommand).RequiredPermission(saveDataPerm).Log(req.NewLogSaveI(imsg.LogInsertDocs)),
	}

	req.BatchSetGroup(m, reqs[:])

}
