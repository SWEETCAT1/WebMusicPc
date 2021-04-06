const error_types = require("../constants/error-types")
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

const verifyLogin = async (ctx,next)=>{
  const {name,password} = ctx.request.body

  if (!name||!password){
		return ctx.app.emit('error',new Error(error_types.NAME_OR_PASSWORD_IS_REQUIRED),ctx)
	}

  const res = await service.getUserByName(name)
  const user = res[0]
	// console.log(user.password)
  // console.log(md5password(password));
	if (!user){
		return ctx.app.emit('error', new Error(error_types.USER_DOES_NOT_EXITS), ctx)
	}

  if((md5password(password)) !== (user.password)){
    return ctx.app.emit('error', new Error(error_types.WRONG_PASSWORD), ctx)
  }


  await next()
}

module.exports = {
  verifyLogin
}