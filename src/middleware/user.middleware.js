const errorTypes = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

const verifyUser = async (ctx,next)=>{
  const {name,password} = ctx.request.body

  if(!name||!password){
    return ctx.app.emit('error',errorTypes.NAME_OR_PASSWORD_IS_REQUIRED,ctx)
  }

  const res = await service.getUserByName(name)
  if(res.length){
    return ctx.app.emit('error',new Error(errorTypes.USER_ALREADY_EXITS),ctx)
  }

  await next()
}

const handlepassword = async (ctx,next)=>{
  let {password} = ctx.request.body
  ctx.request.body.password = md5password(password)

  await next()
}


module.exports = {
  verifyUser,
  handlepassword
}
