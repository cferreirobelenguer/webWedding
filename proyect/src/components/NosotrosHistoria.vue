<template>
  <div id="nosotros">
    <div class="sobreNosotros" data-aos="fade-up">
      <h1 class="tituloNosotros">{{ mensage }}</h1>
    </div>
    <div class="icono" data-aos="fade-right">
      <img
        src="../assets/images/flor4.png"
        class="img-fluid"
        width="200"
        height="200"
      />
    </div>

    <div class="fotoNosotros">
        <div class="card" style="width: 50vw" id="alejandra">
          <img
            src="../assets/images/alejandra.jpg"
            id="fotoAlejandra"
            width="1000"
            heigth="1000"
            class="card-img-top"
            alt="images"
          />
          <div class="titulo" id="estilosCaja">
          
            <h5 class="card-title" id="tituloNovios">Alejandro y Alejandra</h5>
          
          </div>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
    </div>

    <div class="historia">
      <div class="subtitulo">
        <h1 class="tituloNosotros2" data-aos="fade-up">{{ mensage2 }}</h1>
      </div>
      <div class="deco1">
        <img
          src="../assets/images/flor1.png"
          data-aos="fade-left"
          class="img-fluid"
          width="200"
          height="200"
        />
      </div>
      <div class="contenido">
        <div class="texto">
          <h6>
            Todo empezó un 15 de agosto de 2015 "Nuestra primera cita", aunque no lo supiéramos ese día iba a empezar nuestra historia.<br>
            Durante estos 7 años, hemos vivido momentos de cambios, consiguiendo objetivos juntos y superando todas las etapas difíciles en la que la distancia no ha sido impedimento. <br>
            El 4 de diciembre de 2021 fue le pedida, una noche que recordaremos toda nuestra vida, iba a avanzar nuestra historia un paso más...<br>
          </h6>
        </div>
        <div class="imagen2">
          <img
            src="../assets/images/historia.jpg"
            class="img-fluid"
            width="800"
            height="800"
          />
        </div>
        
      </div>
 
      <div class="pedidaContainer">
      <div class="imagen">
          <img
            src="../assets/images/foto.jpg"
            class="img-fluid"
            width="450"
            height="350"
          />
        </div>
        <div class="pedidaTexto">
          <h1 class="tituloNosotros" data-aos="fade-up">¡Y ella dijo si!</h1>
        </div>
        
        
      </div>
    </div>
    
  </div>
</template>
<script>


export default {
  
  name: "NosotrosHistoria",
  props: {
    mensage: String,
    mensage2: String,
  },
  
};
</script>
