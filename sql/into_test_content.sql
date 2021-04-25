

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