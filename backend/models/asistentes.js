'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//Configuración del esquema, propiedades del objeto de la bbdd
var asistentesSchema=Schema({
    nombre:String,
    confirmacion:String,
    bus:String,
    alergias:String,
    comentarios:String

});

module.exports=mongoose.model('Asistentes',asistentesSchema);