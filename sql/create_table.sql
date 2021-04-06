
create table web_music.users
(
	id int auto_increment
		primary key,
	name varchar(20) not null,
	password varchar(100) not null,
	createAt timestamp default CURRENT_TIMESTAMP null,
	updateAt timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
	constraint users_name_uindex
		unique (name)
);

