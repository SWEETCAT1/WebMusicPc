const connection = require('../app/database')

class MomentService {
  async create(userid,content){
    const statement = `insert into moments (content, user_id) values (?,?);`
    const [result] = await connection.execute(statement,[content,userid])
    return result
  }
  //根据id获取单个动态
  async getMomentById(momentId){
    const statement = `select 
                          moments.id,moments.content,moments.createAt,moments.updateAt,
                          json_object('id',users.id,'name',users.name) user
                        from moments
                        left join users on moments.user_id = users.id
                        where moments.id = ?;`
    const [result] = await connection.execute(statement,[momentId])
    return result[0]
  }
  //获取当前id的多个动态
  async getMomentList(offset,size){
    const statement = `select moments.id,moments.content,moments.createAt,moments.updateAt,
                            json_object('id',users.id,'name',users.name) user
                       from moments
                       left join users on moments.user_id = users.id
                       limit ?,?;`
    const [result] = await connection.execute(statement,[offset,size])
    return result
  }
  //删除动态
  //
}

module.exports = new MomentService()
