
<template>
    <div id="nosotros">
        <div class="sobreNosotros" data-aos="fade-up">
            <h1 class="tituloNosotros">{{mensage}}</h1>
        </div>
        <div class="icono" data-aos="fade-right">
            <img src="../assets/images/flor4.png" class="img-fluid" width="200" height="200">
        </div>
        <div class="fotoNosotros">
            <img src='../assets/images/nosotros.gif' class="img-fluid" width="600" height="600">
        </div>
        <div class="historia">
            <div class="subtitulo">
                <h1 class="tituloNosotros2" data-aos="fade-up">{{mensage2}}</h1>
            </div>
            <div class="deco1">
                <img src="../assets/images/flor1.png"  data-aos="fade-left" class="img-fluid" width="200" height="200">
            </div>
            <div class="contenido">
                        <div class="texto">
                        
                            <h6>El destino hizo que nos conociéramos el 15 de agosto de 2015<br><br>
                            Nuestra primera cita fue el 3 de octubre de 2015<br><br>    
                            Nos independizamos el 13 de marzo de 2020<br><br>  
                            A lo largo de toda nuestra relación hemos
                            ido superando baches<br><br> 
                            y objetivos...eso ha llevado a que muchas veces tuviéramos 
                            una<br>
                            relación a distancia. 
                            <br>Pero siempre hemos hecho para estar juntos.<br><br>
                            Nuestra pedida de matrimonio fue el 4 de diciembre de 2021...
                            </h6>
                        </div>
                        <div class="imagen">
                            <img src="../assets/images/foto.png"  class="img-fluid" width="250" height="250">
                        </div>
        </div>
            
            <div class="deco2">
                <img src="../assets/images/flor2.png"  data-aos="fade-left" class="img-fluid" width="200" height="200">
            </div>

        </div>
        <div class="pedida">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>

</template>
<script>
export default {
    name: "NosotrosHistoria",
    props: {
        mensage:String,
        mensage2:String,

    },
};
</script>
