<!--stepper-->
<template>
    <div id="asistencia2">
        <div class="sobreNosotros" data-aos="fade-up">
            <h1 class="tituloNosotros">{{ mensagePasos }}</h1>
        </div>
        <div class="icono" data-aos="fade-right">
            <img
                src="../assets/images/flor6.png"
                class="img-fluid"
                width="200"
                height="200"
            />
        </div>
        <div class="wrapper-stepper">
            <div class="stepper">
                <div class="stepper-progress">
                    <div class="stepper-progress-bar" :style="'width:'+stepperProgress">

                    </div>
                </div>
                <div class="stepper-item" :class="{'current':step == item, 'success': step > item}" v-for="item in 4" :key="item">
                    <div class="stepper-item-counter">
                        <img class="icon-success" src="../assets/images/icon.svg"  alt="">
                        <span class="number">
                            {{item}}
                        </span>
                    </div>
                    <br>
                    <span class="stepper-item-tittle">
                        Paso {{item}}
                    </span>
                </div>
            </div>

            <div class="stepper-content" v-for="item in 4" :key="item">
                <div class="stepper-pane" v-if="step == item">
                    <div class="icono-pane">
                        <h4 class="contenidoPasos">Estás en el paso <h4 class="tex-pink-1">{{item}}</h4></h4>
                        <br>
                        <br>
                        <div v-if="item==1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg>
                            <br>
                            <br>
                            <h4 class="contenidoPasos">Primero vas a recibir tu invitación a través de esta web.</h4>
                        </div>
                        <div class="contenidoPasos" v-if="item==2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
                            </svg>
                            <br>
                            <br>
                            <h4 class="contenidoPasos">Tienes que confirmar tu asistencia en el formulario de esta invitación. Por favor indícanos si necesitas bus para llegar.
                            <br>¡Estamos deseando verte en nuestra boda!</h4>
                        </div>
                        <div class="contenidoPasos" v-if="item==3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                            </svg>
                            <br>
                            <br>
                            <h4 class="contenidoPasos">¡Ponte guapo/a para el gran evento del año!<br>¡Aún estás a tiempo para la operación bikini!</h4>
                            
                        </div>
                        <div class="contenidoPasos" v-if="item==4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"/>
                            </svg>
                            <br>
                            <br>
                            <h4 class="contenidoPasos">¡Disfruta de nuestra boda, hazte muchas fotos y pásalo en grande!</h4>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div class="controlls">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="boton" @click="step--" :disabled="step==1">
                    Anterior
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="boton boton--pink-1" @click="step++" :disabled="step==4">
                    Siguiente
                </button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "PasosBoda",
    data:()=>({
        step:1
    }),
    computed:{
        stepperProgress(){
            return (100/3)*(this.step-1)+'%'
        }
    },
    props: {
    mensagePasos: String,
    
    },
};
</script>
<style>
    @import "../assets/css/stepper.css";
    
</style>
