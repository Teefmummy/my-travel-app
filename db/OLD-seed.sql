INSERT INTO users (username, email, pw_digest) VALUES ('TESTone','TESTINGone@ga.co','TESTone#!');
INSERT INTO users (username, email, pw_digest) VALUES ('TESTtwo','TESTINGtwo@ga.c0','TESTtwo#!');
INSERT INTO users (username, email, pw_digest) VALUES ('TESTthree','TESTINGthree@ga.co','TESTthree#!');
INSERT INTO users (username, email, pw_digest) VALUES ('TESTfour','TESTINGfour@ga.co','TESTfour#!');


INSERT INTO vacations ( location, latitude, longitude, image_url) VALUES ('Australia', 69.34, 11.42, 'stillpic');
INSERT INTO vacations ( location, latitude, longitude, image_url) VALUES ('Costa Rica', 89.55, 11.42, 'randoselfie');
INSERT INTO vacations ( location, latitude, longitude, image_url) VALUES ('Machu Pichu', 29.91, 11.42,'kodakmoment');
INSERT INTO vacations ( location, latitude, longitude, image_url) VALUES ('South Africa', 11.42, 11.42,'duckface');

INSERT INTO favorites ( traveler, vacation, location_name, fav_notes ) VALUES (1, 1, 'Australia', 'Notes text');
