<!--Navigation and cover-->
<template>
  <div class='contenidoNavegacion'>
  <nav><ul>
        <li><a href="#asistencia">Asistencia</a></li>
        <li><a href="#fecha">Fecha</a></li>
        <li><a href="#evento">Evento</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
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
                <li><a href="#asistencia">Asistencia</a></li>
                <li><a href="#fecha">Fecha</a></li>
                <li><a href="#evento">Evento</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
            </ul>
            </nav>
  </div>
  <div class="cover" >
  
    <h1 ref="portada"  v-on:mouseover="fondoFrase" v-on:mouseleave="fondoFrase2" data-aos="zoom-in">{{ msg }}</h1>
    <br />
    <h1 ref="portada3"  v-on:mouseover="fondoFrase3" v-on:mouseleave="fondoFrase23" data-aos="zoom-in">{{ msg2 }}</h1>
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
  methods: {
    //cover effects
    fondoFrase(){
              this.$refs.portada.style.color="#E2BACE";
          },
    fondoFrase2(){
              this.$refs.portada.style.color="#fef9f6";
          },
  
    fondoFrase3(){
              this.$refs.portada3.style.color="#E2BACE";
          },
    fondoFrase23(){
              this.$refs.portada3.style.color="#fef9f6";
          }
  }
};
</script>
