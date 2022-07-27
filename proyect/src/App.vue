<!--Principal component-->
<template>
  <div class="container-fluid">
    <HomePage></HomePage>
    <FechaBoda msgFecha="Faltan..."></FechaBoda>
    <NosotrosHistoria mensage="Erase una vez..." mensage2="Nuestra historia"></NosotrosHistoria>
    <LugarEvento mensageEvento="Lugar de celebracion"></LugarEvento>
    <PasosBoda mensagePasos="Estos son los pasos a seguir..."></PasosBoda>
    <FormularioAsistencia></FormularioAsistencia>
    <FooterWeb></FooterWeb>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import FechaBoda from "./components/FechaBoda.vue";
import NosotrosHistoria from "./components/NosotrosHistoria.vue";
import LugarEvento from "./components/LugarEvento.vue";
import FormularioAsistencia from "./components/FormularioAsistencia.vue";
import FooterWeb from "./components/FooterWeb.vue";
import PasosBoda from "./components/PasosBoda.vue";


export default {
  name: "App",
  components: {
    HomePage,
    FechaBoda,
    NosotrosHistoria,
    PasosBoda,
    LugarEvento,
    FormularioAsistencia,
    FooterWeb
  }
};
</script>

<style>
@import "./assets/css/estilos.css";
</style>
