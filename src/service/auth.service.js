const connection = require('../app/database')

class AuthService {
  async checkResource(tableName,id,UserId){
    const statement = `select * from ${tableName} where id=? and user_id=?;`
    const [result] = await connection.execute(statement,[id,UserId])

    return result.length===0?0:1

  }
}

module.exports = new AuthService()