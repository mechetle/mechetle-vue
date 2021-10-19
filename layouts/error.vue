<template>
    <slot />
    <Kettle/>
    <!-- <Beta /> -->
    <Footer />
</template>

<script>
import Footer from '../components/layout/footer/footer.vue'
import NavPrimary from '../components/layout/navigation/nav-primary.vue'
import Beta from '../components/sections/beta.vue'
import Kettle from '../components/fun/kettle.vue'

export default {
    components: {
        Footer,
        NavPrimary,
        Beta,
        Kettle
    }
}
</script>
