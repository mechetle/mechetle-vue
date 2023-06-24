<template>
  <div>
    <NavMain/>
    <slot />
    <!-- <Beta /> -->
    <FooterM />

  </div>
</template>

<script setup>
import NavMain from '../components/layout/navigation/nav-main.vue'
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

.project-enter-from{
  #post-details-bg {
        opacity: 1;
        transform: translateY(-10px);
    }
    /* #foreground-wrapper .video-wrapper {
        //transform: scale(1.5) !important;
    } */
}

.project-enter-active,
.project-leave-active {
  //transition-timing-function: cubic-bezier(0.85, 0.07, 0.04, 0.96);
  
  #post-details-bg {
    transition-timing-function: cubic-bezier(0.68, 0.16, 0.01, 0.96);
    transition: all 0.75s !important;
    transition-delay: 0.5s;
  }
}
.project-enter,
.project-leave-to {

  #post-details-bg {
    opacity: 0 !important;
    transform: translateY(150px) !important;
  }
}

::view-transition-old(selected-project),
::view-transition-new(selected-project) {
  animation-duration: 0.75s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>