
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
        
    </div>

</template>
<script>
export default {
    name: "LugarEvento",
    props: {
    mensageEvento: String,
    },
};
</script>