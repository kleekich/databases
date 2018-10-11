
-- CREATE DATABASE chat;
 
USE chat;
DROP TABLE messages;
DROP TABLE users; 

CREATE TABLE users (
  id INT(10),
  username TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(10), 
  messageText TEXT,
  room TEXT,
  userID INT ,
  created_at TIME, 
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id)
  
);



-- SHOW tables;
-- INSERT INTO messages (id, username, text, room) VALUES(1, 'a', 'hi', 'room1');
-- SELECT * FROM messages;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

