CREATE database pokedex;
use pokedex;

CREATE TABLE pokemon(
	pokemon_id int NOT NULL auto_increment,
	name_pokemon varchar(255) NOT NULL,
	categoria varchar(255) NOT NULL,
	habilidad varchar(255) NOT NULL,
	tipo varchar(255) NOT NULL,	
	altura float NOT NULL,
	peso float NOT NULL,
	url varchar(1000) NOT NULL,
	created_date datetime,
	modified_date datetime,
	PRIMARY kEY (pokemon_id)
);


insert into pokemon values(1, 'charmander', 'Lagartija', 'Resplandor', 'Fuego', '0.61', '6','https://images.wikidexcdn.net/mwuploads/wikidex/f/fb/latest/20200411222755/Charmeleon.png', CURRENT_TIMESTAMP(), NULL);
