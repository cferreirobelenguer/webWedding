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
      <div class="card" style="width: 25vw" id="alejandra">
        <img
          src="../assets/images/alejandra.png"
          id="fotoAlejandra"
          width="300"
          heigth="300"
          class="card-img-top"
          alt="images"
        />
        <div class="card-body" id="estilosCaja">
          <h5 class="card-title" id="tituloNovios">Alejandra</h5>
          <p class="card-text" id="descripcionNovios">
            Hola, soy Alejandra ...
          </p>
        </div>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="card" style="width: 25vw" id="alejandro">
        <img
          src="../assets/images/alejandro.png"
          width="300"
          heigth="300"
          class="card-img-top"
          alt="images"
        />
        <div class="card-body" id="estilosCaja">
          <h5 class="card-title" id="tituloNovios">Alejandro</h5>
          <p class="card-text" id="descripcionNovios">
            Hola, soy Alejandro ...
          </p>
        </div>
      </div>
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
            El destino hizo que nos conociéramos el 15 de agosto de 2015<br /><br />
            Nuestra primera cita fue el 3 de octubre de 2015<br /><br />
            Nos independizamos el 13 de marzo de 2020<br /><br />
            A lo largo de toda nuestra relación hemos ido superando baches<br /><br />
            y objetivos...eso ha llevado a que muchas veces tuviéramos una<br />
            relación a distancia.
            <br />Pero siempre hemos hecho para estar juntos.<br /><br />
            Nuestra pedida de matrimonio fue el 4 de diciembre de 2021...
          </h6>
        </div>
        <div class="imagen">
          <img
            src="../assets/images/foto.png"
            class="img-fluid"
            width="250"
            height="250"
          />
        </div>
      </div>

      <div class="pedidaContainer">
        <div class="pedidaTexto">
          <h1 class="tituloNosotros" data-aos="fade-up">Y ella dijo si...</h1>
        </div>
        <div class="deco2">
          <img
            src="../assets/images/flor2.png"
            data-aos="fade-left"
            class="img-fluid"
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
    <div class="pedida">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/images/pedida.jpeg"
              width="20vw"
              heigth="20vw"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/pedida.jpeg"
            width="20vw"
              heigth="20vw"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/pedida.jpeg"
              width="20vw"
              heigth="20vw"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
