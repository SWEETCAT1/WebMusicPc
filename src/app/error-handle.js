const errorTypes = require('../constants/error-types')

const errorHandler = (error,ctx) =>{
  let status,message;

  switch(error.message){
		case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
			status = 400;
			message = '用户名或密码不能为空';break;
		case errorTypes.USER_ALREADY_EXITS:
			status = 409;
			message = '用户名已经存在';break;
		case errorTypes.USER_DOES_NOT_EXITS:
			status = 400;
			message = '用户名不存在';break;
		case errorTypes.WRONG_PASSWORD:
			status = 400;
			message = '密码错误';break;	
		default:
			status = 404;
			message = '|NOT FOUND|';
	}


  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler