var mysql = require('mysql');

//Create a mysql connection
const db = mysql.createConnection({
	host:		'localhost',
	user:		'ns_api',
	password:	'Passw0rD',
	database:	'NoteStack'
});

module.exports = db;