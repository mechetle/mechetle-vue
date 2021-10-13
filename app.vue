<template>
    <div>
        <NuxtPage/>
    </div>

</template>

<script>
/* function loadScript(url) {
		let externalScript = document.createElement('script');
		externalScript.setAttribute("src", url);
		document.querySelector('body').appendChild(externalScript)
} */
export default {
    head: {
        link: [
            {
                rel:"preload", as:"script",
                href: "https://kit.fontawesome.com/094d2c489e.js",
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Sen:wght@700;800&family=Roboto+Mono:ital@0;1&display=swap'
            }
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.5.1.min.js",
            },
            {
                crossorigin: "anonymous",
                src: "https://kit.fontawesome.com/094d2c489e.js",
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js",
                integrity:"sha512-35O/v2b9y+gtxy3HK+G3Ah60g1hGfrxv67nL6CJ/T56easDKE2TAukzxW+/WOLqyGE7cBg0FR2KhiTJYs+FKrw==", 
                crossorigin: "anonymous"
            },
            {
                src: "/js/rellax.min.js",
            },
            {
                src: "/js/anime.min.js",
            },
        ],
    },

    mounted() {
		//loadScript("https://mechetle.com/js/mechetle-core.js")
		//loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
		//loadScript("https://mechetle.com/js/mechetle-core-animations.js")
        // (Loading scripts at the end is now handled by footer.vue)
    }

}
</script>

<style lang="scss">

</style>
