-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS vacations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

-- add create tables here
CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), hashpassword VARCHAR(255);
CREATE TABLE favorites(id SERIAL PRIMARY KEY, fave_notes VARCHAR(255), user_id INT REFERENCES users(id), vacations_id INT REFERENCES vacations(id) );
CREATE TABLE vacations(id SERIAL PRIMARY KEY, location VARCHAR(255), description TEXT, map_coordinates DECIMAL(18,15), img_url TEXT);

-- create users table
INSERT INTO users
  (name, email, hashpassword)
VALUES
  ('Eleanor Brown', 'ebrown@yahoo.com','123456'),
  ('Harry Moebin', 'harry772@msn.com', '123456'),
  ('Jason Backle', 'jayjaybabyback@gmail.com','123456'),
  ('Margaret Tuny', 'margietootoo@gmail.com','123456'),
  ('George Finlaw', 'georgesharkfin@yahoo.com','123456');


-- create fave-notes table
INSERT INTO fave_notes
  (fave_notes, user_id, vacations_id)
VALUES
  ('Loved this place',1, 2);
  ('I am hoping for lots of time on the beach at this spot',2, 3),
  ('Looking forward to the scuba lessons and nice views',3, 1),
  ('They say the wine tasting is second to none',4, 4),
  ('I can not wait to checkout the igloo hotels',5, 5);


-- create vacations table

INSERT INTO vacations
 (location, description, map_coordinates, img_url)
VALUES
( 'Hawaii', 'Amazing and exotic island with thrilling volcanos and lush gardens.', './hawaii1.jpeg' ),
( 'Florida', 'Warm and inviting.', './florida2.jpeg'),
( 'New York', 'This is truly the city that never sleeps!','./newyork1.jpeg'),
( 'California', 'Sun and fun every day!','./california1.jpeg'),
( 'Austrailia', 'The is the land of the down under with tons of fun and beauty.','./austrailia-sydney.jpeg')
( 'Mexico', 'Spicy food and music and life with plenty of sun.','./mexico1.jpeg')
( 'Barbados', 'Crystal clear waters and amazing island cuisine.', './barbados1.jpeg')
( 'Italy', 'Beautiful views and excellent entertainment.', './italy1.jpeg'),
( 'Brazil', 'Music with laughter and fun for all.', './brazil.jpeg'),
( 'Cayman Islands', 'The white sandy beaches are endless and peaceful.', './cayman-island1.jpeg'),
( 'Paris', 'This is truly the land of love and romance.', './paris1.jpeg'),
( 'British Columbia', 'This places feels so royal!', './british-columbia1.jpeg'),
( 'Singapore', 'The is the place where exquisite design meets beauty and technology.', './singapore1.jpeg'),
( 'Ecuador', 'Best place for delicious crabs!', './ecuador1.jpeg'),
( 'Kenya', 'Exotic and rural at the same time!', './kenya1.jpeg'),
( 'Ethiopia', 'Full of tribal history.', './ethiopia1.jpeg'),
( 'India', 'Full of life and color.', './india1.jpeg',),
( 'China', 'Land of wisdom and poise.', './china1.jpeg'),
( 'Germany', 'Much history and many places of beauty.', './germany1.jpeg'),
( 'Japan', 'This place is rich with culture and music. They are very skilled in the arts!', './japan1.jpeg'),
( 'Alaska', 'So cold yet so lovely!', './alaska1.jpeg'),



