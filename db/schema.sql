\tripping_db

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS vacaytable CASCADE;
DROP TABLE IF EXISTS favtable CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(64) UNIQUE,
  email VARCHAR(255) UNIQUE,
  pw_digest VARCHAR(255)
);

CREATE TABLE vacaytable (
  trip_id SERIAL PRIMARY KEY,
  location VARCHAR(255),
  map_coord DECIMAL(18,4),
  image_url VARCHAR(255)
);

CREATE TABLE favtable (
  traveler INT REFERENCES users(user_id),
  vacation INT REFERENCES vacaytable(trip_id)
);
