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
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Sen:wght@700;800&family=Roboto+Mono:ital@0;1&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
            }
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.5.1.min.js",
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.4/lottie.min.js",
                integrity:"sha512-ilxj730331yM7NbrJAICVJcRmPFErDqQhXJcn+PLbkXdE031JJbcK87Wt4VbAK+YY6/67L+N8p7KdzGoaRjsTg==", 
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer"
            },
            {
                src: "/js/rellax.min.js",
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
