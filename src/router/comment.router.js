const Router = require('koa-router')


const commentRouter = new Router({prefix:'/comment'})

//创建接口
commentRouter.post('/create',)
// const createComment = new Router({prefix:'/create'})
// createComment.post('/')
// commentRouter.use(createComment.routes(), createComment.allowedMethods())



module.exports = commentRouter