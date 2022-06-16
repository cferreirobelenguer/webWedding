<!--Principal component-->
<template>
  <div class="container-fluid">
    <HomePage msg="Alejandra" msg2=" y Alejandro"></HomePage>
    <FechaBoda msgFecha="Faltan..."></FechaBoda>
    <NosotrosHistoria></NosotrosHistoria>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import FechaBoda from "./components/FechaBoda.vue";
import NosotrosHistoria from "./components/NosotrosHistoria.vue";

export default {
  name: "App",
  components: {
    HomePage,
    FechaBoda,
    NosotrosHistoria
  },
};
</script>

<style>
@import "./assets/css/estilos.css";
</style>
