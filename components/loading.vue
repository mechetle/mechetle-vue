<template>
  <div id="loading">
    <div class="container">
      <!-- <lottie-animation
        path="animations/mechetle-logo-animation.json"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      /> -->
      <!-- <img
        class="img"
        src="../../assets/images/loading.gif"
        alt="loading..."
        width="200"
      /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #loading {
    position: fixed;
    height: 100vh;
    width: 100vw;
    //top: 0;
    outline-color: #001c38;
    outline-offset: -50vh;
    outline-width: 50vh;
    outline-style: solid;
    z-index: 990;
    transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);

    &.loaded {
      outline-color: #f5f5f5;
      outline-offset: 0vh;
      outline-width: 0vh;
      transition-duration: 0.75s;
    }

    .container {
      max-width: 100px;
      margin: 0 auto;
      text-align: center;
      height: 100%;
      //margin-bottom: 5vh;
    }
  }

  /* @keyframes loaded {
    from {
      outline-offset: -50vh;
      outline-width: 50vh;
    }
    to {
      outline-offset: 0vh;
      outline-width: 0vh;
    }
  } */

</style>

<script setup>
//import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
</script>

<script>
export default {
  name: "Loading"
};

</script>
