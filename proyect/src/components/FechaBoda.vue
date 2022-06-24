<!--Component wedding date-->
<template>
  
  <div class="fecha" id="fecha" >
    <br>
    <br>
    <div id="frase" ref="cita"  v-on:mouseover="fondoFrase" v-on:mouseleave="fondoFrase2" data-aos="fade-up">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
      </svg>
      <br>
      <br>
      <br>
      <h5>Empieza la mejor historia jamás escrita: la nuestra</h5>
      <br>
      <br>
      <br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
      </svg>
    </div>
    <br/>
    <h5>{{ msgFecha }}</h5>
    <br/>
    <div class="calculoFecha">
        <h5>{{calcularFecha()}}</h5>
    </div>
    <br>
    <div class="enlaceFormulario">
        <h6 class="textoEnlace">¡Confirma tu asistencia!</h6>
        <div class="iconoEnlace" ref="iconoEnlace" v-on:mouseover="efectoFrase" v-on:mouseleave="efectoFrase2">
          <a class="nav-link active" aria-current="page" href="#asistencia">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
var fechaBoda;
export default {
    name: "FechaBoda",
    props: {
        msgFecha: String,
    },
    methods: {
        calcularFecha() {
                var target_date=new Date("Nov 5, 2022").getTime();
                var current_date = new Date().getTime();

                var seconds_left = (target_date -current_date) / 1000;

                let days = parseInt(seconds_left / 86400);

                seconds_left = seconds_left % 86400;

                let hours = parseInt(seconds_left / 3600);

                seconds_left = seconds_left % 3600;

                let minutes = parseInt(seconds_left / 60);

                let seconds = parseInt(seconds_left % 60);
                fechaBoda=days+"  días   "+hours+"   horas   "+minutes+"   minutos   "+seconds+"   segundos   ";
                console.log(fechaBoda)
                return fechaBoda;
          },
          //letters effects
          fondoFrase(){
              this.$refs.cita.style.color="#FFAECC";
          },
          fondoFrase2(){
              this.$refs.cita.style.color="#fef9f6";
          },
          efectoFrase(){
              this.$refs.iconoEnlace.style.color="#FFAECC";
          },
          efectoFrase2(){
              this.$refs.iconoEnlace.style.color="#fef9f6";
          }
      }
    
                
    };

</script>
