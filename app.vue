<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
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
    },
    {   
      rel: 'icon', 
      type: 'image/x-icon', 
      href: 'icons/favicon.png' 
    },
  ],
  script: [
    {
      src: "/js/lottie.min.js",
    },
    {
      src: "/js/rellax.min.js",
    },
  ],
})

</script>

<style lang="scss">
body {
  background: #fbfdfd;
  margin: 0;
  padding: 0;
}
</style>
