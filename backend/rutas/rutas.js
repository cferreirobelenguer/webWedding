'use strict'
//Importo express y controller
var express=require('express');
var asistentesController=require('../controller/controller');
//Llamo a router de express
var router=express.Router();

router.post('/save',asistentesController.save);
router.delete('/delete/:id',asistentesController.delete);
router.get('/ver/:nombre', asistentesController.getAsistentes);

module.exports=router;