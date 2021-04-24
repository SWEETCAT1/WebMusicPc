

create schema web_music charset utf8;
use web_music;
create table if not exists `users`
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

create table if not exists `moments`
(
	id int primary key auto_increment,
	content varchar(1000) not null,
	user_id int not null,
	createAt timestamp default current_timestamp ,
	updateAt timestamp default current_timestamp on update current_timestamp,
	foreign key (user_id) references users (id)
);

