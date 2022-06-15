'use strict'
//Importo validator y modelo de bbdd
var validator=require('validator');
const asistentesModelo=require('../models/asistentes');

var controller={
    //Se guardan los datos de los asistentes que rellenan el formulario, cogiendo los datos del cuerpo de la petición
    save:(req,res)=>{
        var params=req.body;
        console.log(params);
        //Primero se validan los datos, que no estén vacíos
        try{
            var validate_nombre=!validator.isEmpty(params.nombre);
            var validate_confirmacion=!validator.isEmpty(params.confirmacion);
            var validate_bus=!validator.isEmpty(params.bus);
            var validate_alergias=!validator.isEmpty(params.alergias);
            var validate_comentarios=!validator.isEmpty(params.comentarios);

        }catch(err){
            return res.status(200).send({
                status:'error',
                message:'Faltan datos por enviar'
            });
        }
        if(validate_nombre && validate_bus && validate_confirmacion && validate_alergias && validate_comentarios){
            var datosInvitados=new asistentesModelo();
            datosInvitados.nombre=params.nombre;
            datosInvitados.confirmacion=params.confirmacion;
            datosInvitados.bus=params.bus;
            datosInvitados.alergias=params.alergias;
            datosInvitados.comentarios=params.comentarios;

            datosInvitados.save((err,asistenteGuardado)=>{
                if(err || !asistenteGuardado){
                    return res.status(404).send({
                        status:'error',
                        message: 'Los datos del asistente no se han guardado'
                    });
                }

                return res.status(200).send({
                    status:'success',
                    datosInvitados:asistenteGuardado
                });
            });
        }else{
            return res.status(404).send({
                status:'error',
                message:'Los datos no son válidos'
            });
        }
    },
    //Eliminar asistentes
    delete:(req,res)=>{
        var asistenteId=req.params.id;
        console.log(asistenteId);
        asistentesModelo.findOneAndDelete({_id:asistenteId}, (err,asistenteRemove)=>{
            if(err){
                return res.status(200).send({
                    status:'error',
                    message:'Error al borrar'
                });
            }
            if(!asistenteRemove){
                //Error en borrado
                return res.status(200).send({
                    status:'error',
                    message: 'No se ha podido borrar'
                });
            }
            return res.status(200).send({
                status:'success',
                asistentesModelo:asistenteRemove
            });
        });
    },
    //Ver todos los asistentes
    getAsistentes:(req,res)=>{
        var buscarNombre=req.params.nombre;

        asistentesModelo.find(
            {"nombre":buscarNombre},
        ).sort()
        .exec((err,resultados2)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Error en la petición'
                })
            }
            return res.status(200).send({
                status:'success',
                resultados2
            });
        });
    }


};
module.exports=controller;
