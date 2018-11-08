'use strict';
//import mysql from 'mysql';
let mysql = require('mysql');
let connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : '',
database : 'belajar'
});
connection.connect();

module.exports = connection;
