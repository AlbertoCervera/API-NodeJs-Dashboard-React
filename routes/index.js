var express = require("express");
var router = express.Router();
const controller = require("../controllers/indexController")


router.get("/",(req,res,next)=> {
    res.redirect("/usuarios")
})

// Usuarios
router.get("/usuarios", 
controller.indexController
);
router.get("/usuarios/cantidad", 
controller.usuariosCantidad
);

// Animales

router.get("/animales/chips", 
controller.chips
);

router.get("/animales/pasaportes", 
controller.pasaportes
);

router.get("/animales/vacunas", 
controller.vacunas
);


module.exports = router;
