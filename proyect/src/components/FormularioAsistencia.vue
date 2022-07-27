
<template>
    <div id="asistencia">
        <div class="introForm">
            <div class="sobreNosotros" data-aos="fade-up">
                <h1 class="tituloNosotros">Confirma tu asistencia</h1>
            </div>
            <div class="icono" data-aos="fade-right">
                <img
                src="../assets/images/flor7.png"
                class="img-fluid"
                width="200"
                height="200"
                />
        </div>
        <div class="formulario">
            <div className="datos">
                    <form v-on:submit.prevent="recibirFormulario()">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" required="required" placeholder="Debes rellenar los campos" v-model="user.nombre"/>
                    </div>
                </div>
                <br>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="confirmacion">Confirmación</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        Sí &nbsp;<input class="form-check-input" type="radio" name="confirmacion" id="confirmacion" value="si" required="required"  v-model="user.confirmacion">
                        No &nbsp;<input class="form-check-input" type="radio" name="confirmacion" id="confirmacion" value="no"  required="required" v-model="user.confirmacion">
                    </div>
                </div>
                <br>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="bus">¿Necesitas autobús?</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        Sí &nbsp;<input class="form-check-input" type="radio" name="bus" id="bus" value="si" required="required" v-model="user.bus">
                        No &nbsp;<input class="form-check-input" type="radio" name="bus" id="bus" value="no"  required="required"  v-model="user.bus">
                    </div>
                </div>
                <br>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="alergias">Alergias</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        Sí &nbsp;<input class="form-check-input" type="radio" name="alergias" id="alergias" value="si" required="required" v-model="user.alergias">
                        No &nbsp;<input class="form-check-input" type="radio" name="alergias" id="alergias" value="no" required="required"  v-model="user.alergias">
                    </div>
                </div>
                <br>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-label" for="comertarios">Comentarios</label>
                        <textarea class="form-control" placeholder="Debes rellenar los campos" id="comentarios" required="required" v-model="user.comentarios"></textarea>
                    </div>
                </div>
                <br>
                <br>
                
                <button type="submit" class="boton boton--pink-1">Submit</button>
                <div class="row g-3 align-items-center">
                    <br>
                </div>
                <button type="reset" class="boton boton--pink-1">Limpiar</button>
            </form>

            </div>
            
        </div>
    </div>
    </div>

</template>
<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: "FormularioAsistencia",
    data(){
        
        return{
            user:{
                nombre:'',
                confirmacion:'',
                bus:'',
                alergias:'',
                comentarios:''
            },
            resultados:[]
        }
    },
    methods:{
        recibirFormulario(){
            console.log(this.user);
            
            axios.post('https://app-asistentes.herokuapp.com/api/save/',{
                nombre:this.user.nombre,
                confirmacion:this.user.confirmacion,
                bus:this.user.bus,
                alergias:this.user.alergias,
                comentarios:this.user.comentarios
        })
        .then(res=>{
            this.resultados=res.data;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tus datos han sido guardados, muchas gracias',
                showConfirmButton: false,
                timer: 1500,
                width: 400,
                padding: '3em',
                color: '#FEF9F6',
                background: '#171c18'
        
            })
                
                
            })

        },
        
    }
};
</script>
