<template>
    <NavMain/>
    <slot />
    <!-- <Beta /> -->
    <FooterM />
</template>

<script>
import FooterM from '../components/layout/footer/footer-m.vue'
import NavMain from '../components/layout/navigation/nav-main.vue'
import Beta from '../components/sections/beta.vue'

export default {
    components: {
        FooterM,
        NavMain,
        Beta
    }
}
</script>

<style lang="scss">

.page-enter-from{
    opacity: 0;
    transform: translateY(-10px);

    .scroll-down-icon > div {
        opacity: 0 !important;
        transform: translateY(150px) !important;
    }
    /* #foreground-wrapper .video-wrapper {
        //transform: scale(1.5) !important;
    } */
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.68, 0.16, 0.01, 0.96);
  //transition-timing-function: cubic-bezier(0.85, 0.07, 0.04, 0.96);

  .scroll-down-icon > div {
    transition: all 0.75s !important;
    transition-delay: 0.5s;
  }
}
.page-enter,
.page-leave-to {
  opacity: 0;

  /* #foreground-wrapper .video-wrapper {
    transform: scale(1.5) !important;
    opacity: 0;
  } */

  .scroll-down-icon > div {
    opacity: 0 !important;
    transform: translateY(150px) !important;
  }
}
</style>