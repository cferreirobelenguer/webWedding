
<template>
    <div id="evento">
        <div class="sobreNosotros" data-aos="fade-up">
                <h1 class="tituloNosotros" data-aos="fade-up">{{mensageEvento}}</h1>
        </div>
        <div class="icono" data-aos="fade-right">
            <img
                src="../assets/images/flor5.png"
                class="img-fluid"
                width="200"
                height="200"
            />
        </div>
        
        <div class="intro">
            <h6>Os invitamos a nuestra boda el día 5 de noviembre del 2022<br> en la parroquia Santiago Apostol en Noblejas a las 12:00, <br>
            posteriormente el convite será en los jardines del palacio Villacañas.</h6>
        </div>
        <div className="containerLugar">
        <div class="infoCeremonia">
        <div class="lugarContainer1">
            <div class="iglesiaContainer">
                <div class="iconoIglesia" ref="iglesia" v-on:mouseover="fondoIglesia" v-on:mouseleave="fondoIglesia2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                </div>
                <div class="descripcionIglesia">
                    <h6>c/Iglesia, 15, 45350<br>
                    Noblejas, Toledo.<br>
                    La ceremonia comienza<br>a las 12:00</h6>
                </div>
            </div>
                <div class="iglesia">
                    <div style="width: 50%">
                        <iframe width="200" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=calle%20iglesia%2015%20noblejas%20toledo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
                        </iframe>
                </div>
            </div>
        </div>
        <div class="lugarContainer2">
            <div class="salonesContainer">
                <div class="iconoSalon" ref="salon" v-on:mouseover="fondoSalon" v-on:mouseleave="fondoSalon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                    </svg>
                </div>
                <div class="descripcionSalon">
                    <h6>c/Chaparral, 22, 45860<br>
                    Villacañas, Toledo<br></h6>
    
                </div>
            </div>
            
                <br>
                <br>
                <br>
                <br>
            
            <div class="salones" >
                <div style="width: 50%">
                    <iframe width="200" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=calle%20chaparral%2022%20villaca%C3%B1as%20toledo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a>
                    </iframe>
                </div>
            </div>
        </div>
        </div>
        <div className="juntos">
                <img
                src="../assets/images/juntos.gif"
                class="img-fluid"
                width="600"
                height="600"
            />
        </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "LugarEvento",
    props: {
    mensageEvento: String,
    },
    methods:{
        //Iglesia effects
    fondoIglesia(){
            this.$refs.iglesia.style.color="#FFAECC";
        },
    fondoIglesia2(){
            this.$refs.iglesia.style.color="#171c18";
        },
          //Salon effects
    fondoSalon(){
            this.$refs.salon.style.color="#FFAECC";
        },
    fondoSalon2(){
            this.$refs.salon.style.color="#171c18";
        },
    }
};
</script>