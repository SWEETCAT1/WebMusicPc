const commentService = require('../service/comment.service')

class CommentController{
  async create(ctx){
    const {id} = ctx.user
    const {momentId, content} = ctx.request.body

    ctx.body = await commentService.create(momentId,content,id)
  }

  async reply(ctx){
    const {id} = ctx.user
    const {momentId, content,commentId} = ctx.request.body

    ctx.body = await commentService.reply(momentId,content,id,commentId)
  }

  async alter(ctx){
    const {commentId,content} = ctx.request.body
    ctx.body = await commentService.alter(commentId,content)
  }

  async delete(ctx){
    const { delcommentId } = ctx.request.body
    ctx.body = await commentService.delete(delcommentId)
  }
}

module.exports = new CommentController()
