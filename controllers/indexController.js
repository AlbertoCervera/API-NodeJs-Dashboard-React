const mysqlConnection = require("../config/db");

exports.indexController = (req, res, next) => {

  mysqlConnection.query("SELECT * FROM usuarios", (err, resultado) => {
    if (!err) {
      res.json(resultado);
    } else {
      console.log(err);
    }
  });


};

// Número de Usuarios
exports.usuariosCantidad = (req, res, next) => {

  mysqlConnection.query("SELECT count(*) as users FROM usuarios", (err, resultado) => {
    if (!err) {
      res.json(resultado[0].users);
    } else {
      console.log(err);
    }
  });


};


//Número de Chips
exports.chips = (req, res, next) => {
  
  mysqlConnection.query("SELECT count(chip) as cantidadChips FROM animales WHERE chip = 1 ", (err, resultado) => {
    if (!err) {
      
      res.json(resultado[0].cantidadChips);
    } else {
      console.log(err);
    }
  });


};


//Número de pasaportes
exports.pasaportes = (req, res, next) => {

  mysqlConnection.query("SELECT count(pasaporte) as numPasaportes FROM animales WHERE pasaporte = 1 ", (err, resultado) => {
    if (!err) {
      res.json(resultado[0].numPasaportes);
    } else {
      console.log(err);
    }
  });


};


//Número de Vacunas
exports.vacunas = (req, res, next) => {

  mysqlConnection.query("SELECT count(Vacunas) as numVacunas FROM animales WHERE Vacunas = 1 ", (err, resultado) => {
    if (!err) {
      res.json(resultado[0].numVacunas);
    } else {
      console.log(err);
    }
  });


};