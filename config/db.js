// Obtenga el servicio mysql
var mysql = require("mysql");

// Agregue las credenciales para acceder a su base de datos
const mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});

// conectarse a mysql
mysqlConnection.connect(function (err) {
  // en caso de error
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
  }
});


module.exports = mysqlConnection;
