USE cwgames;

-- Rating table inserts
INSERT INTO rating
(rating_level)
VALUES
('E'),
('E10+'),
('T'),
('M'),
('NR');

-- Game table inserts
INSERT INTO game
(game_title, release_date, rating_id)
VALUES
('Assassins Creed: Black Flag','2013-10-29',4),
('Legend of Zelda: Twilight Princess','2006-11-19',3),
('Halo: The Master Chief Collection','2019-12-03',4),
('Undertale','2015-09-15',2),
('Spark the Electric Jester 3','2022-08-24',5),
('Legend of Zelda: Ocarina of Time','1998-11-21',1),
('Scribblenauts Unmasked','2013-09-24',2),
('Octopath Traveller','2019-06-07',3),
('Fossil Fighters','2009-08-10',1),
('Fossil Fighters: Frontier','2014-02-27',2),
('Ori and the Will of the Wisps','2020-03-10',1),
('Crash Bandicoot 1','1996-09-09',2),
('Crash Bandicoot 2: Cortex Strikes Back','1997-10-31',2),
('Crash Bandicoot 3: Warped','1998-10-31',2),
('Uncharted 3: Drake''s Deception','2011-10-01',3),
('Tetris Evolution','2007-04-19',2),
('Medal of Honor: Pacific Assault','2004-10-04',3),
('Elder Scrolls V: Skyrim Special Edition','2011-11-11',4);

-- Genre inserts
INSERT INTO genre
( genre_type )
VALUES
('Action'),
('Adventure'),
('Open World'),
('Story'),
('Role-playing'),
('Puzzle'),
('FPS'),
('Strategy'),
('Indie'),
('Casual'),
('Third-pesron Shooter'),
('Fantasy');

-- Owner inserts
INSERT INTO owner
(first_name, last_name)
VALUES
('Nick','Boss'),
('Austin','Longhurst'),
('Christian','Mijangos');

-- Platform inserts
INSERT INTO platform
(platform_name)
VALUES
('PC'),
('Wii'),
('N64'),
('Playstation 1'),
('Playstation 3'),
('NDS'),
('3DS');

-- Company inserts
INSERT INTO company
(company_name, is_developer, is_publisher)
VALUES
('Ubisoft','y','n'),
('Nintendo','y','y'),
('343 Industries','y','n'),
('Bungee','y','n'),
('Xbox Game Studios','n','y'),
('Tobyfox','y','y'),
('Feperd Games','y','y'),
('Warner Bros. Interactive Media Entertainment','n','y'),
('Square Enix','n','y'),
('Moon Studios GmbH','y','n'),
('Sony','n','y'),
('Mass Media Inc','n','y'),
('Electronic Arts','y','y'),
('Bethesda','y','y');

-- Price inserts
INSERT INTO price
( price_value )
VALUES
(16.95),
(44.99),
(39.99),
(9.99),
(24.99),
(41.92),
(19.99),
(59.99),
(74.78),
(29.99),
(21.00),
(35.85),
(25.99);

-- gameCompany
INSERT INTO game_company
(game_id, company_id)
VALUES
(1,1),
(2,2),
(3,3),
(3,4),
(3,5),
(4,6),
(5,7),
(6,2),
(7,8),
(8,9),
(9,2),
(10,2),
(11,10),
(11,5),
(12,11),
(13,11),
(14,11),
(15,11),
(16,12),
(17,13),
(18,14);

-- gameGenre inserts
INSERT INTO game_genre
(game_id, genre_id)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,1),
(2,2),
(2,5),
(2,6),
(3,7),
(3,4),
(3,8),
(3,1),
(4,9),
(4,5),
(5,1),
(5,9),
(6,1),
(6,2),
(6,6),
(7,1),
(7,2),
(7,10),
(7,8),
(8,5),
(9,5),
(10,5),
(11,1),
(11,2),
(12,1),
(12,2),
(13,1),
(13,2),
(14,1),
(14,2),
(15,1),
(15,2),
(15,11),
(16,6),
(17,7),
(18,1),
(18,2),
(18,5),
(18,12);

-- gamePlatform inserts
INSERT INTO game_platform
(game_id, platform_id, price_id, owner_id, has_played)
VALUES
(1,1,1,1,'y'),
(2,2,2,1,'y'),
(3,1,3,1,'y'),
(4,1,4,2,'y'),
(5,1,5,2,'y'),
(6,3,6,1,'y'),
(7,1,7,2,'n'),
(8,1,8,2,'y'),
(9,6,9,2,'y'),
(10,7,10,2,'y'),
(11,1,10,1,'n'),
(12,4,7,3,'y'),
(13,4,11,3,'y'),
(14,4,11,3,'y'),
(15,5,12,3,'y'),
(16,5,7,3,'y'),
(17,1,13,3,'y'),
(18,1,3,1,'y');

-- COPYRIGHT Nicholas Boss 2024