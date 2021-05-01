

insert into moments (content, user_id) values ('这是我第一次发表的动态',1);

select moments.id,moments.content,moments.createAt,moments.updateAt,
       json_object('id',users.id,'name',users.name) user
    from moments
    left join users on moments.user_id = users.id
    where moments.id = 1;

select moments.id,moments.content,moments.createAt,moments.updateAt,
       json_object('id',users.id,'name',users.name) user
    from moments
    left join users on moments.user_id = users.id
    limit 2,6;

update moments set content = ? where id=? and user_id=?;
delete from moments where id=4;

insert into comment(moment_id, content, user_id) values(?,?,?);

select user_id from comment where comment.user_id=? and comment.comment_id=?;
update comment set content=? where comment_id=?;
delete from comment where id=2;