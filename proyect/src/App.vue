<!--Principal component-->
<template>
  <div class="container-fluid">
    <HomePage  msg="Alejandra" msg2=" y Alejandro"></HomePage>
    <FechaBoda msgFecha="Faltan..."></FechaBoda>
    <NosotrosHistoria mensage="Erase una vez..." mensage2="Nuestra historia"></NosotrosHistoria>
    <LugarEvento></LugarEvento>
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





export default {
  name: "App",
  components: {
    HomePage,
    FechaBoda,
    NosotrosHistoria,
    LugarEvento,
    FormularioAsistencia,
    FooterWeb
  }
};
</script>

<style>
@import "./assets/css/estilos.css";
</style>
