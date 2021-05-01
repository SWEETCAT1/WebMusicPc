const conn = require('../app/database')

class CommentService{
  async create(momentId,content,id){
    const statement = `insert into comment(moment_id, content, user_id) values(?,?,?);`
    const [result] = await conn.execute(statement,[momentId,content,id])
    return result
  }

  async reply(momentId,content,id,commentId){
    const statement = `insert into comment(moment_id, content, user_id,comment_id) values(?,?,?,?);`
    const [result] = await conn.execute(statement,[momentId,content,id,commentId])
    return result
  }

  async alter(commentId,content){
    const statement = `update comment set content=? where id=?;`
    const [result] = await conn.execute(statement,[content,commentId])
    return result
  }

  async delete(delcommentId){
    const statement = `delete from comment where id=?;`
    const [res] = await conn.execute(statement,[delcommentId])
    return res

  }
}

module.exports = new CommentService()
