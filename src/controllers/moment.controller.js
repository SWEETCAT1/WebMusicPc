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
		// console.log(ctx);
		const {offset,size} = ctx.query
		ctx.body = await momentService.getMomentList(offset,size)
	}
	//修改指定的动态
	async alter(ctx,next){
		const {userId,momentId,content} = ctx.request.body
		ctx.body = await momentService.alterMoment(userId,momentId,content)
		// console.log(ctx.request);
	}
	//删除指定的动态
	async remove(ctx,next){
		const {momentId} = ctx.params
		ctx.body = await momentService.delMoment(momentId)
		// console.log(ctx.request);
	}

}

module.exports = new MomentController()
