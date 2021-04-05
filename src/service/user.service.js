//与数据库的交互
const connection = require('../app/database')

class UserService{
  //创建新用户
  async create(user){
    const {name,password} = user
    const statement = `INSERT INTO user (name,password) VALUES  (?,?);`
    const res = await connection.execute(statement,[name,password])

    return res[0]
  }

  async getUserByName(name){
    const statement = `select * from user where name=?;`
    const res = await connection.execute(statement,[name])

    return res[0]
  }
}

module.exports = new UserService()