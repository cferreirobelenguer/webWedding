
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
            <form>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" width="10" heigth="10" placeholder="Debes rellenar los campos"/>
                    </div>
                </div>
                
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="confirmacion" class="form-label">Confirmación</label>
                        <input type="text" class="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="bus">¿Necesitas autobús?</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        Sí &nbsp;<input class="form-check-input" type="radio" name="bus" id="bus" value="si">
                        No &nbsp;<input class="form-check-input" type="radio" name="bus" id="bus" value="no">
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-check-label" for="alergias">Alergias</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        Sí &nbsp;<input class="form-check-input" type="radio" name="alergias" id="alergias" value="si">
                        No &nbsp;<input class="form-check-input" type="radio" name="alergias" id="alergias" value="no">
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="form-label" for="comertarios">Comentarios</label>
                        <textarea class="form-control" placeholder="Debes rellenar los campos" id="comentarios"></textarea>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <br>
                </div>
                
                <button type="submit" class="boton boton--pink-1">Submit</button>
                <div class="row g-3 align-items-center">
                    <br>
                </div>
                <button type="reset" class="boton boton--pink-1">Limpiar</button>
            </form>


        </div>
    </div>
    </div>

</template>
<script>
//import swal from 'sweetalert';
export default {
    name: "FormularioAsistencia",
};
</script>
