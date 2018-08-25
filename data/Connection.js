import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.load();

const { host, user, password, database } = process.env;
const connection = mysql.createConnection({ host, user, password, database });

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log("Connected to database");
});


module.exports = {
  connection
}
