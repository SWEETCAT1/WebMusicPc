const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
// const errorHandler = require('./e')
const useRoutes = require('../router/user.router')

const app = new Koa()

app.useRoutes = useRoutes

app.use(bodyParser())
app.useRoutes()
app.on('error',errorHandl)
