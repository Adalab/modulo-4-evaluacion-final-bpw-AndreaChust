CREATE DATABASE IndoAquarium;

USE indoaquarium;

CREATE TABLE fishes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(150) NOT NULL,
    depth_range VARCHAR(20) NOT NULL,
    behavior LONGTEXT NOT NULL
);

INSERT INTO fishes (name, scientific_name, depth_range, behavior)
VALUES
('Titan Triggerfish', 'Balistoides viridescens', '0-50m', 'Aggressive fish that can become territorial especially during breeding season.'),
('Yellowlip Sea Krait', 'Laticauda colubrina', '0-20m', 'Venomous sea snake, generally shy but can be aggressive if threatened.'),
('Moorish Idol', 'Zanclus cornutus', '2-150m', 'Peaceful reef fish that swims alone or in pairs, very graceful.'),
('Green Turtle', 'Chelonia mydas', '0-60m', 'Calm and peaceful marine turtle often found grazing on seagrass.'),
('Great Hammerhead Shark', 'Sphyrna mokarran', '0-80m', 'Large predatory shark, solitary and highly migratory, can be aggressive.'),
('Humpback Whale', 'Megaptera novaeangliae', '0-100m', 'Majestic and peaceful whale known for its songs and long migrations.');

SELECT * FROM fishes;

INSERT INTO fishes (name, scientific_name, depth_range, behavior)
VALUES ("Mandarinfish", "Synchiropus splendidus", "1-18m", "Small, shy, and peaceful fish often found hiding in coral crevices. Active mostly at dusk, known for its vibrant, psychedelic colors and unique mating dance.");

UPDATE fishes SET depth_range = "1-15m" WHERE id = 8;

DELETE FROM fishes WHERE id = 7;


