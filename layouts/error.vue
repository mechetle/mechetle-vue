<template>
    <slot />
    <Kettle/>
    <!-- <Beta /> -->
    <FooterM />
</template>

<script setup>
import FooterM from '../components/layout/footer/footer-m.vue'
// import NavPrimary from '../components/layout/navigation/nav-primary.vue'
// import Beta from '../components/sections/beta.vue'
import Kettle from '../components/fun/kettle.vue'
</script>
