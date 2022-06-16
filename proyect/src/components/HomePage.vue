<!--Navigation and cover-->
<template>
  <div class='contenidoNavegacion'>
  <nav><ul>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#historia">Historia</a></li>
        <li><a href="#fecha">Fecha</a></li>
        <li><a href="#evento">Evento</a></li>
        <li><a href="#asistencia">Asistencia</a></li>
    </ul></nav>
  </div>
  <div class='contenidoNavResponsive'>
            <input type="checkbox"/>
                <i class="fas fa-bars"></i>
                <i class="fas fa-times" ></i><svg xmlns="http://www.w3.org/2000/svg" id="hamburguesa" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            <nav>
            <ul>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#historia">Historia</a></li>
                <li><a href="#fecha">Fecha</a></li>
                <li><a href="#evento">Evento</a></li>
                <li><a href="#asistencia">Asistencia</a></li>
            </ul>
            </nav>
  </div>
  <div class="cover">
  
    <h1 data-aos="zoom-in">{{ msg }}</h1>
    <br />
    <h1 data-aos="zoom-in">{{ msg2 }}</h1>
    <br />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
    msg2: String,
    msg3: String,
  },
};
</script>
