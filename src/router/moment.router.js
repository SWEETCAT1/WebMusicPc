const Router = require('koa-router')
const authMiddleware = require('../middleware/auth.middleware')
const momentController = require('../controllers/moment.controller')
const momentRouter = new Router({prefix:'/moment'})

momentRouter.post('/',authMiddleware.verifyAuth,momentController.create)

//获取单个动态的router
const momentDetail = new Router({prefix:'/detail'})
momentDetail.get('/:momentId',authMiddleware.verifyAuth,momentController.detail)
momentRouter.use(momentDetail.routes(),momentDetail.allowedMethods())
//获取多个动态的router
const momentList = new Router({prefix:'/list'})
momentList.get('/:momentId',authMiddleware.verifyAuth,momentController.list)
momentRouter.use(momentList.routes(),momentList.allowedMethods())
//修改动态
const momentAlter = new Router({prefix:'/alter'})
momentAlter.post('/',authMiddleware.verifyAuth,momentController.alter)
momentRouter.use(momentAlter.routes(),momentAlter.allowedMethods())
//删除动态
const momentDel = new Router({prefix:'/delete'})
momentDel.get('/:momentId',authMiddleware.verifyAuth,momentController.remove)
momentRouter.use(momentDel.routes(),momentDel.allowedMethods())

module.exports = momentRouter
