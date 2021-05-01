const error_types = require("../constants/error-types")
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')
const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require("../app/config")
const authService = require("../service/auth.service")

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

	if(!ctx.headers.authorization){
		return ctx.app.emit('error',new Error(error_types.UNAUTHORIZATION),ctx)
	}
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

const verifyPermission = async(ctx,next) => {
	const {id} = ctx.user
	//验证是否有权限修改评论
	const {commentId} = ctx.request.body
	const [res] = await authService.authPermission(id,commentId)
	console.log(res);
	if(res){
		await next()
	} else {
		ctx.body = '没有权限修改'
	}


}

module.exports = {
  verifyLogin,
  verifyAuth,
	verifyPermission
}
