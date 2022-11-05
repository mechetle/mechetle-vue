<template>
  <div id="mobile-nav-menu">
    <div id="navigation-wrap">
      <div id="mobile-page-indicator">
        <div id="mobile-page-cursor" ref="cursor"></div>
        <div id="mobile-page-cursor-trail" ref="cursortrail"></div>
      </div>

      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
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
  data() {
    return { 
      offset: 0,
      width: 0,
      from: '',
    }
  },

  methods: {
    changeActiveCursor() {
      let cursor = this.$refs.cursor
      let cursor_trail = this.$refs.cursortrail
      let active = document.querySelector('#mobile-nav-menu .router-link-active').parentNode

      // this means it is in the group but nuxt for some reason doesn't know:
      if ((this.link_length > 1 && this.route_group != "")) {
          active = document.querySelector('#'+ this.route_group)
      }

      this.offset = active.offsetTop
      this.height = active.clientHeight

      cursor.style.top = this.offset + "px"
      cursor.style.height = this.height + "px"

      cursor_trail.style.top = this.offset + "px"
      cursor_trail.style.height = this.height + "px"
    }
  },

  mounted() {
    let bg = this.$refs.bg
    bg.classList.remove("hide")
    console.log("tested")
    this.changeActiveCursor()
  },

  watch: {
    $route(to, from) {
      console.log("to:", to)
      let url_split = to.path.substring(1).split('/')
      this.link_length = url_split.length

      if (this.link_length > 1) {
          this.route_group = url_split[0]
      } else {
          this.route_group = ""
      }

      this.from = from.path.substring(1).split('/')[0]

      this.$nextTick(() => {
          //console.log(this.show, this.$refs.content);
          this.changeActiveCursor();
      });
    }
  },
  
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
  display: flex;
  align-items: center;
  justify-content: center;

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

#mobile-page-indicator {
  width: .5em;
  background: #00325B;
  transform: scaleX(1) scaleY(1);
  transform-origin: right center;
}
#mobile-page-cursor, #mobile-page-cursor-trail {
  width: 100%;
  background: #0060A8;
  position: absolute;
  transition-delay: .1s;
  transition-duration: .6s;
  transition-timing-function: cubic-bezier(.91,.13,.06,.87);  
}
#mobile-page-cursor-trail {
  transition-delay: .04s;
}


#navigation-wrap {
  display: flex;
  gap: 1em;
  
  a {
    display: block;
    padding: 1em 0;
    text-decoration: none;
    font-weight: 700;
    color: #D1E4FF;
    
    transform: translateY(0);

    transition-duration: 0.65s;
    transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
  }
}

ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;

  li {
    display: block;
    overflow-y: hidden;
    
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
  
  #mobile-page-indicator {
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.73, 0.06, 0.16, 0.86);
  }

  @for $i from 0 through 5 {
    #navigation-wrap li:nth-child(#{$i}) a {
      transition-delay: 0.1s + $i * 0.1;
    }
  }
}

.mobile-menu-leave-active {
  transition-duration: 0.75s;
  transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
  //transition-delay: 1s;
  
  #navigation-wrap a {
    transition-duration: 0.75s;
    transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
    transition-delay: 0;
  }
  
  #mobile-nav-menu-bg {
    transition-duration: 0.75s;
    transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
    //transition-delay: 1s;
  }

  #mobile-page-indicator {
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.73, 0.06, 0.16, 0.86);
  }
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  #mobile-nav-menu-bg {
    outline-offset: 0vh;
    outline-width: 0vh;
  }
  #navigation-wrap a {
    transform: translateY(70%);
  }
}
.mobile-menu-enter-from {
  #mobile-page-indicator {
    transform: scaleX(20) translateX(-4vw);
  }
}
.mobile-menu-leave-to {
  #mobile-page-indicator {
    transform: scaleY(0);
  }
}

</style>