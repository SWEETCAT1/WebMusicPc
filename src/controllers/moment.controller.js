const momentService = require("../service/moment.service")

class MomentController {
	//创建新的动态
	async create(ctx,next){
		// ctx.body = "发表动态成功"
		console.log(ctx.request);
		const userId = ctx.user.id
		const content = ctx.request.body.content

		ctx.body = await momentService.create(userId,content)

	}
	//获取单个动态详情
	async detail(ctx,next){
		// console.log(ctx.params);
		const momentId = ctx.params.momentId
		ctx.body = await momentService.getMomentById(momentId)

	}
	//获取多个动态详情
	async list(ctx,next){
		const {offset,size} = ctx.query

		ctx.body = await momentService.getMomentList()
	}
}

module.exports = new MomentController()
