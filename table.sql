create table playes(
    id serial not null primary key,
    team_name varchar(255),
    position varchar(255),
    jersey_number varchar(255)
    
    
);

create table flag(
id serial not null primary key,
    first_hint varchar(255),
    second_hint varchar(255),
    third_hint varchar(255)

);

 

insert into stats (team_name,position,jersey_number) values ('He plays for Liverpool FC','He plays as a forward', 'He Wears jersey number 11');
insert into stats (team_name,position,jersey_number) values ('He plays for Manchester City FC','He plays as a striker', 'He Wears jersey number 9');
insert into stats (team_name,position,jersey_number) values ('He plays for Liverpool FC','He plays as a forward', 'He Wears jersey number 11');
insert into stats (team_name,position,jersey_number) values ('He plays for Evaton FC','He plays as a defensive midfielder', 'He Wears jersey number 8');
insert into stats (team_name,position,jersey_number) values ('He plays for  Wolverhampton Wanderers FC','He plays as a Defender', 'He Wears jersey number 19');



<--Brazil-->
insert into flag (first_hint,second_hint,third_hint) values ('Largest country in South America','It has more timezones', 'The flag has 27 stars in it');
<--USA-->
insert into flag (first_hint,second_hint,third_hint) values ('It has the fourth longest river in the world','It has the largest economy in the world', 'It has a city called "Boring"');
<--Argentina-->
insert into flag (first_hint,second_hint,third_hint) values ('Its official language is spanish','It has more psychologists per capita than any other country in the world', 'It has a population of over 43 million people ');
<--Spain-->
insert into flag (first_hint,second_hint,third_hint) values ('The country has loads of islands','This countys civil war broke out in 1936', 'It has the oldest restuarant in the world');
<--S.A-->
insert into flag (first_hint,second_hint,third_hint) values ('It has eleven official languages','You can swim with penguins in this country', 'It has the second largest producer of fruit on the planet');


