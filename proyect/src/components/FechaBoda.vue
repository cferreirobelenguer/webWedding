<!--Component wedding date-->
<template>
  <div class="fecha" id="fecha">
    <br />
    <div id="cita" data-aos="fade-up">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        /></svg
      ><br/><br/>
      <h5>Empieza la mejor historia jamás escrita: la nuestra</h5>
      <br/><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
    <br/>
    <h5>{{ msgFecha }}</h5>
    <br/>
    <div class="calculoFecha">
        <h5>{{calcularFecha()}}</h5>
    </div>
    <br>
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
          }
      }
    
                
    };

</script>
