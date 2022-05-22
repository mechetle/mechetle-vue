<template>
    <div>
        <h1>Test route</h1>
    </div>
</template>

<script>
export default {
    data () {
        return { 
            rellaxPattern: [-0.1, 0.1, -0.1, 0.1]
            //rellaxPattern: [-4, 2, -2, 4]
        }
    },

    // this used to cause error 505, but may cause other issues
    beforeMount() {
    },

    mounted() {
        /* 
         * homepage animations:
         */
        var rellax = new Rellax('.rellax', {
            //center: true, causes issues
            vertical: true,
            horizontal: false
        });

        // Wrap every letter in MECHETLE in header
        let textWrapper = document.querySelectorAll('#me-mechetle > .rellax:nth-child(n+3)');
        textWrapper.forEach(element => {
            element.innerHTML = element.textContent.replace(/\S/g, "<span class='header-letter'>$&</span>");
        });
        

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