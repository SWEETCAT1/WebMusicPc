const Router = require('koa-router')
const authMiddleware = require('../middleware/auth.middleware')
const commentController = require("../controllers/comment.controller")
const commentRouter = new Router({prefix:'/comment'})

//创建接口
commentRouter.post('/create',authMiddleware.verifyAuth,commentController.create)
//回复评论
commentRouter.post('/reply',authMiddleware.verifyAuth,commentController.reply)
//修改评论
commentRouter.post('/alter',authMiddleware.verifyAuth,authMiddleware.verifyPermission,commentController.alter)
//删除评论
commentRouter.get('/delete',authMiddleware.verifyAuth,commentController.delete)

// const deleteComment = new Router({prefix:'/delete'})
// deleteComment.get('/:commentId',authMiddleware.verifyAuth,authMiddleware.verifyPermission,commentController.delete)
// commentRouter.use(deleteComment.routes(),deleteComment.allowedMethods())

module.exports = commentRouter
