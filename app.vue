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
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&family=Roboto+Mono:ital@0;1&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
            }
        ],
        script: [
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js",
                integrity:"sha512-ilxj730331yM7NbrJAICVJcRmPFErDqQhXJcn+PLbkXdE031JJbcK87Wt4VbAK+YY6/67L+N8p7KdzGoaRjsTg==", 
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer"
            },
            {
                src: "/js/rellax.min.js",
            },
        ],
    },

}
</script>

<style lang="scss">

</style>
