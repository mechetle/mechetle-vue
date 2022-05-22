<template>
    <div>
        <h1>Test route</h1>
    </div>
</template>

<script>
export default {
    data () {
    },

    // this used to cause error 505, but may cause other issues
    beforeMount() {
    },

    mounted() {
    }
}
</script>

<script setup>   
import HeaderFp from "../components/layout/header/header-fp.vue";
import Cta from "../components/sections/cta.vue";
import WorkThumb from "../components/cards-widgets/work-thumb.vue";
import Container from "../components/layout/grid/container.vue";
import GridX from "../components/layout/grid/grid-x.vue";
import GridX1 from "../components/layout/grid/grid-x.vue";
import VideoM from "../components/cards-widgets/video-m.vue";

const {data: posts} = await useFetch("/data?limit=4")


</script>

<style lang="scss" scoped>
    h1 {
        #sass {
            color: blue;
        }
    }
</style>