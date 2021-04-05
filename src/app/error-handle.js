const errorTypes = require('../constants/error-types')

const errorHandler = (error,ctx) =>{
  let status,message;

  switch(error.message){
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;//bad request
      message = '用户名或者密码不能为空';break
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler