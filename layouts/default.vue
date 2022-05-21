<template>
    <NavMain/>
    <slot />
    <!-- <Beta /> -->
    <FooterM />
</template>

<script>
import FooterM from '../components/layout/footer/footer-m.vue'
import NavMain from '../components/layout/navigation/nav-main.vue'
import Beta from '../components/sections/beta.vue'

export default {
    components: {
        FooterM,
        NavMain,
        Beta
    }
}
</script>

<style lang="scss" scoped>

</style>