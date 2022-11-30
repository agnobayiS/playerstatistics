create table stats(
    id serial not null primary key,
    names text not null,
    position text not null,
    matches_played int not null,
    goals_scord int not null,
    goals_assisted int not null,
    yellow_cards int not null,
    red_cards int not null
    
);

insert into stats (names,position,matches_played,goals_scord,goals_assisted,yellow_cards,red_cards) values ('Mohamed Salah','forward',14,6,0,0);
insert into stats (names,position,matches_played,goals_scord,goals_assisted,yellow_cards,red_cards) values ('Cristiano Ronaldo','striker',10,1,2,0);
insert into stats (names,position,matches_played,goals_scord,goals_assisted,yellow_cards,red_cards) values ('Erling Haaland','striker',13,18,2,0);
