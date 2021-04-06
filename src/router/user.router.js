const Router = require('koa-router')
const userController = require('../controllers/user.controller')
const userMiddleware = require('../middleware/user.middleware')

const userRouter = new Router({prefix:'/user'})
userRouter.post('/',userMiddleware.verifyUser,userMiddleware.handlepassword,userController.create)

module.exports = userRouter
