<template>
    <NavPrimary/>
    <slot />
    <!-- <Beta /> -->
    <FooterM />
</template>

<script>
import FooterM from '../components/layout/footer/footer-m.vue'
import NavPrimary from '../components/layout/navigation/nav-primary.vue'
import Beta from '../components/sections/beta.vue'

export default {
    components: {
        FooterM,
        NavPrimary,
        Beta
    }
}
</script>

<style lang="scss" scoped>

</style>