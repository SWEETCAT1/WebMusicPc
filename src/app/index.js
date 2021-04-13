const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')
// const userRouter = require('../router/user.router')
// const authRouter = require("../router/auth.router")
const useRoutes = require('../router/index')

const app = new Koa()

app.use(bodyParser())
useRoutes(app)
app.on('error',errorHandler)

module.exports = app
