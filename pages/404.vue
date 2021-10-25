<template>
    <main>
        <a href="/"><img src="/assets/img/mechetleweb-svglogo.svg" alt="Mechetle" width="80px"></a>
        <h1>404</h1>
        <h2>HAVE YOU SEEN <a id="mehkettle" href="#showmehkettle">MEH KETTLE?<span></span></a></h2>
        <p>Do you mean Mechetle? This error happens when the page that you were looking for does not exist. Double check
            if you got the correct link.</p>
    </main>

</template>

<script>
export default {
    layout: "error",

    // this used to cause error 505, but may cause other issues
    beforeMount() {
        document.querySelector("#__nuxt > div").id = "fourOfour"
    },
}
</script>

<style lang="scss" scoped>

</style>