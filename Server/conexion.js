const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: process.env.IP,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.BD,
});


mysqlConnection.connect(function (err){
  if(err){
    console.log('Error base de datos '+err.message);
  } 
  else{ 
    console.log('conectado');
  }
});

module.exports = mysqlConnection;