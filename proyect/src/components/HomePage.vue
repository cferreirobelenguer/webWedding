<!--Navigation and cover-->
<template>
  <div class='contenidoNavegacion'>

  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#asistencia">Asistencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#fecha">Fecha</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#evento">Evento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#nosotros">Nosotros</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  </div>
  <div class="cover" >
    <img src="../assets/images/portada.gif" width="2000" height="2000" class="img-fluid" alt="portada"/>
  
  </div>

</template>

<script>

export default {
  
  name: "HomePage",
  props: {
    
    msg3: String,
  },
  methods: {
    //cover effects
    fondoFrase(){
              this.$refs.portada.style.color="#FFAECC";
          },
    fondoFrase2(){
              this.$refs.portada.style.color="#fef9f6";
          },
  
    fondoFrase3(){
              this.$refs.portada3.style.color="#FFAECC";
          },
    fondoFrase23(){
              this.$refs.portada3.style.color="#fef9f6";
          }
  }
};
</script>
