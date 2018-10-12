
DROP DATABASE chat; 
CREATE DATABASE chat;
 
USE chat;

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT,
  username TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT, 
  message TEXT,
  room TEXT,
  userID INT(11),
  created_at TIME, 
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id)
);


-- //this page makes it so that you can run 
-- a bunch of commands here and in the command line
-- for this code rather than in the mysql command line
-- where oyu'd have to type in all of this every time instead
-- of running one command


-- SHOW tables;
-- INSERT INTO messages (id, username, text, room) VALUES(1, 'a', 'hi', 'room1');
-- SELECT * FROM messages;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

