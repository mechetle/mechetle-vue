<template>
    <NavPrimary/>
    <slot />
    <Beta />
    <Footer />
</template>

<script>
import Footer from '../components/layout/footer/footer.vue'
import NavPrimary from '../components/layout/navigation/nav-primary.vue'
import Beta from '../components/sections/beta.vue'

export default {
    components: {
        Footer,
        NavPrimary,
        Beta
    }
}
</script>

<style lang="scss" scoped>

</style>