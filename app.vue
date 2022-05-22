<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>

</template>

<script>
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
                src: "/js/anime.min.js",
            },
        ],
    },

}
</script>

<style lang="scss">

</style>
