'use strict'
//Configuramos express y body-parser
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Importamos las rutas con las llamadas del controller
var peticiones_rutas=require('./rutas/rutas');

//Configuración del CORS
app.use((req,res,next)=>{
    //Permitimos el control de acceso para que cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, x-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
    //Permitimos métodos http
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT , DELETE');
    next();
});

//Añadir prefijos a las rutas

app.use('/api',peticiones_rutas);

module.exports=app;