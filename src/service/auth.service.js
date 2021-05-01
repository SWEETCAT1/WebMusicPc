const connection = require('../app/database')

class AuthService {
  async checkResource(tableName,id,UserId){
    const statement = `select * from ${tableName} where id=? and user_id=?;`
    const [result] = await connection.execute(statement,[id,UserId])

    return result.length===0?0:1

  }

  async authPermission(userId,commentId){
    const statement = `select user_id from comment where user_id=? and comment_id=?;`
    const [res] = await connection.execute(statement,[userId,commentId])
    
    return res
    
  }
}

module.exports = new AuthService()