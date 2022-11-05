<template>
  <div id="mobile-nav-menu">
    <div id="navigation-wrap">
      <ul>
        <li><NuxtLink to="/"><span class="material-symbols-outlined">&#xe88a;</span></NuxtLink></li>
        <li><NuxtLink to="/portfolio" id="portfolio">Works</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/lab">Lab room</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
    <div id="mobile-nav-menu-bg" class="hide" ref="bg"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let bg = this.$refs.bg
    bg.classList.remove("hide")
    console.log("tested")

  }
}
</script>

<style lang="scss" scoped>
#mobile-nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  //background: #001c38;
  z-index: 990;

  &-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    outline-color: #001c38;
  
    outline-offset: -51vh;
    outline-width: 52vh;
    
    z-index: -1;
    outline-style: solid;
  }
}


.mobile-menu-enter-active {
  /* transition: all 0.45s cubic-bezier(0.86,0.05,0.15,0.93);
  transition-delay: 0.45s; */
  transition-duration: 0.85s;
  transition-timing-function: cubic-bezier(0.73, 0.06, 0.16, 0.86);
  //transition-delay: 1s;

  #mobile-nav-menu-bg { 
    transition-duration: 0.75s;
    transition-timing-function: cubic-bezier(0.73, 0.06, 0.16, 0.86);
    //transition-delay: 1s;
}
}

.mobile-menu-leave-active {
  transition-duration: 0.75s;
  transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
  //transition-delay: 1s;

    #mobile-nav-menu-bg {
        transition-duration: 0.75s;
        transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
        //transition-delay: 1s;
  }
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  #mobile-nav-menu-bg {
    outline-offset: 0vh;
    outline-width: 0vh;
  }
}

</style>