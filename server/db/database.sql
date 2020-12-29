create table users(
  id bigserial primary key not null,
  name varchar(50) not null,
  email varchar(50) not null unique,
  password varchar(100) not null
);