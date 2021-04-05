const errorTypes = require('../constants/error-types')
const service = require('../service/user.service')

const verifyUser = async (ctx,next)=>{
  const {name,password} = ctx.request.body

  if(!name||!password||name===''||password===''){
    return ctx.app.emit('error',errorTypes.NAME_OR_PASSWORD_IS_REQUIRED,ctx)
  }

  const res = await service.getUserByName(name)
  if(res.length){
    
  }

  await next()
}

module.exports = {
  verifyUser
}