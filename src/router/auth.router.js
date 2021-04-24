const Router = require("koa-router")
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')
const authRouter = new Router()

authRouter.post('/login',authMiddleware.verifyLogin,authController.login)
authRouter.get('/test',authMiddleware.verifyAuth,authController.success)

module.exports = authRouter
