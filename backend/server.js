
'use strict'

var app=require('./index');
//Importamos mongoose
var mongoose=require('mongoose');
require('dotenv').config();
//Indicamos el puerto
var port=3005;
//Conexión a la base de datos
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://carol:user@mern.pilzx.mongodb.net/datosAsistentes?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
    console.log('La conexión a la bbdd se ha realizado correctamente');

    //Configuración del puerto
    app.listen(process.env.PORT ||port, '0.0.0.0',()=>{
        console.log('Servidor corriendo en http:/localhost'+port);
    })
})