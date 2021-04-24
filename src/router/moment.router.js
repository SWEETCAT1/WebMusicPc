const Router = require('koa-router')
const momentMiddleware = require('../middleware/moment.middleware')
const authMiddleware = require('../middleware/auth.middleware')
const momentController = require('../controllers/moment.controller')
const momentRouter = new Router({prefix:'/moment'})

momentRouter.post('/',authMiddleware.verifyAuth,momentController.create)
momentRouter.get('/:momentId',authMiddleware.verifyAuth,momentController.detail)
momentRouter.get('/:momentId',authMiddleware.verifyAuth,momentController.list)


module.exports = momentRouter
