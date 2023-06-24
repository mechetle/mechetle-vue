<template>
    <div>
        <h1>Test route</h1>
        <span class="material-icons md-24">&#xE87C;</span>
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
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<style lang="scss" scoped>
    h1 {
        #sass {
            color: blue;
        }
    }
</style>