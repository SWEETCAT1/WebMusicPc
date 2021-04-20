const error_types = require("../constants/error-types")
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')
const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require("../app/config")

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

  ctx.user = user



  await next()
}

const verifyAuth = async(ctx,next)=>{
  // console.log("验证授权的middware");
  const authorization = ctx.headers.authorization
	//获取token
	const token = authorization.replace('Bearer ','')
	//验证token


	try {
		ctx.user = jwt.verify(token, PUBLIC_KEY, {
			alignContent: ["RSA256"]
		})
		await next()
	} catch (err){
  	ctx.app.emit('error',new Error(error_types.UNAUTHORIZATION),ctx)
	}
}


module.exports = {
  verifyLogin,
  verifyAuth
}
