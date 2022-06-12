
'use strict'

var app=require('./index');
//Importamos mongoose
var mongoose=require('mongoose');
//Indicamos el puerto
var port=3005;
//Conexión a la base de datos
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/datosAsistentes',{useNewUrlParser:true}).then(()=>{
    console.log('La conexión a la bbdd se ha realizado correctamente');

    //Configuración del puerto
    app.listen(port,()=>{
        console.log('Servidor corriendo en http:/localhost'+port);
    })
})