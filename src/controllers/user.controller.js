//处理逻辑控制器
// const fs = require('fs')
const userService = require('../service/user.service')

class userController{
  async create(ctx,next){
    const user = ctx.request.body

    ctx.body = await userService.create(user)
  }
}

module.exports = new userController()
