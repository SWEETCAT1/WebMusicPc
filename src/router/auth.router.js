const Router = require("koa-router")
const controller = require('../controllers/auth.controller')
const middleware = require('../middleware/auth.middleware')
const authRouter = new Router()

authRouter.post('/login',middleware.verifyLogin,controller.login)

module.exports = authRouter
