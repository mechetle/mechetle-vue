<!--
Front page header:
==================
-->
<template>
    <div class="scroll-down-icon rellax" data-rellax-speed="-1" @click="scrollNext">
        <div ref="scrollDown"></div>
    </div>

    <div id="header-overlay" 
        ref="hoverZone"
        @mousemove="updateShine"
    ></div>

    <header id="homepage-header" class="not-loaded" ref="header">
        <!-- <lottie-animation
            ref="anim"
            :animationData="scrollDownURL"
        /> -->
        
        <div id="foreground-wrapper" class="rellax" data-rellax-speed="-4">
            <div class="video-wrapper loading" ref="fgLoading">
                <div id="fg-paused" ref="fg_paused" class="paused"></div>
                <video 
                    src="/video/header_foreground_compr.webm" 
                    id="h_fg" 
                    ref="h_fg" 
                    preload="metadata" 
                    muted>
                </video>
            </div>
        </div>

        <div id="header-wrapper" ref="shine">
            <div class="text-wrapper">
                <div id="this-is">THIS IS</div>
                <h1 class="logo-text-header display">
                    <span id="me-mechetle">
                        <span>M</span>
                        <span>E</span>
                        <span>C</span>
                        <span>H</span>
                        <span>E</span>
                        <span>T</span>
                        <span>L</span>
                        <span>E</span>
                    </span>
                </h1>
            </div>
        </div>

        <div id="midground-wrapper">
            <div 
                id="actual-midground"
                ref="shine"
            ></div>
        </div>

        <div id="background-wrapper" class="rellax" data-rellax-speed="-9">
            <div id="bg-circle-mask" class="loading" ref="bgLoading">
                <div class="video-wrapper">
                    <div id="bg-paused" class="paused"></div>
                    <video src="~/assets/video/header_background.webm" id="h_bg" ref="h_bg" muted></video>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
//import icon from '@/assets/lottie/scroll-down.json'
//import * as animationData from "@/assets/lottie/scroll-down.json";

export default {
    name: 'header-fp',

    data () {
        return {
            shine: {
                x: 0,
                y: 0
            }
        }
    },

    methods: {
        updateShine(e) { 
            let x = e.offsetX - this.shine.x;
            let y = e.offsetY - this.shine.y;

            //if (x < 0) {x = 0}
            //if (y < 0) {y = 0}

            if (x > 0 && y > 0) {
                console.log(x, y)

                this.$refs.shine.parentNode.style.opacity = 1
                this.$refs.shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(223, 226, 235, 0.2) 30%, rgba(196, 196, 196, 0) 80%)`

            } else {
                this.$refs.shine.parentNode.style.opacity = 0
            }

        },

        scrollNext() {
            window.scrollTo({
                top: window.innerHeight * 1.15,
                left: 0,
                behavior: 'smooth'
            });
        }
    },

    mounted() {
        let intro_ran = false;

        let h_fg = this.$refs.h_fg;
        let fg_paused = this.$refs.fg_paused;
        let h_bg = this.$refs.h_bg;
        let header = this.$refs.header
        let shine = this.$refs.shine

        fg_paused.style.transitionProperty = 'none'
        h_fg.style.transitionProperty = 'none'
        h_fg.currentTime = 0;
        intro_ran = false;
        fg_paused.style.opacity = 0
        h_fg.style.opacity = 1

        this.shine.x = shine.offsetLeft
        this.shine.y = shine.offsetTop
        
        // when the header'a videos are loaded in
        h_fg.addEventListener('canplay', () => {
            // play them at +0.75s
            setTimeout(() => {
                h_fg.play();
                h_bg.play();
                
                this.$refs.fgLoading.classList.remove("loading")
                this.$refs.bgLoading.classList.remove("loading")
            }, 900);
        })

        // remove unloaded to initialise home page intro
        //header.classList.remove("not-loaded") 
        
        h_fg.addEventListener('timeupdate', () => {
            fg_paused.style.transitionProperty = 'inherit'
            h_fg.style.transitionProperty = 'inherit'

            console.log("playing", h_fg.currentTime )

            if (h_fg.currentTime > 2.03333333333 && !intro_ran) {
                h_fg.pause()
                fg_paused.style.opacity = 1
                h_fg.style.opacity = 0
                console.log("pausing")
            }
        })

        lottie.loadAnimation({
            container: this.$refs.scrollDown, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/lottie/scroll-down.json' // the path to the animation json
        });

        // todo: lol implement the mouseover shine thingo lol
        /* headerHover.addEventListener("mousemove", function(event) {
            console.log("moving", event);
            //console.log(e.offsetX, e.offsetY);
        }) */
    },
}
</script>

<!-- <script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const userData = ref()

// fetch the user information when params change
watch(
    () => route.params.id,
    async newId => {
    userData.value = await fetchUser(newId)
    }
)
</script> -->

<style lang="scss" scoped>
#header-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
}

#homepage-header {
    height: 100vh;
    z-index: -1;
    position: relative;
    perspective: 860px;
    transform-style: preserve-3d;

    /* &.not-loaded {
        #foreground-wrapper {
            transition: 1.25s all;
            transform: translate3d(0,0,1000px);
        }
    } */
}

#midground-wrapper {
    height: 100vh;
    width: 100%;
    top: 0;
    position: absolute;
    z-index: -1;
    opacity: 1;

    transition: 0.75s all;
    //transition-delay: 0.25s;
    transition-timing-function: ease;
    
    > #actual-midground {
        height: 100%;
        margin: 7.5em auto 0;
        //background: aqua;
        max-width: 87.5rem;
        border-radius: 40px;
        background: radial-gradient(circle at right bottom corner, rgba(223, 226, 235, 0.2) 20%, rgba(196, 196, 196, 0) 60%);
    }
}

h1.display {
    text-align: center;
    line-height: 10rem;
}
#this-is {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.5rem;
    text-align: center;
}

#foreground-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 100%;
    display: flex;
    align-items: flex-end;

    > * {
        transform: translateY(7em);

        &.loading {
            transform: translateY(0.5em);
        }
    }

    video {
        transition-duration: 0.4s;
        transition-delay: 0.4s;
    }

    .paused {
        opacity: 0;
        background: url(assets/video/bgArtboard_foreground_ff.png);
        background-size: contain;
        background-position: top;
    }
}

.video-wrapper {
    transition: 1.25s all;

    > .paused {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-duration: 0.2s;
        transition-delay: 0.1s;
    }
}

#background-wrapper {
    //display: none;
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
    //height: 100vh;
    overflow: hidden;
    clip-path: circle(47vw at center 130vh);

    #bg-circle-mask {
        overflow: hidden;
        transform: translateY(0em);
        transition-duration: 0.75s;
        //width: 100%; // this causes the whoe page to move
        //border-radius: 100%;

        video {
            width: 120vw;
            mix-blend-mode: hard-light;
            opacity: 0.45;
            top: 36vh;
            position: relative;
        }

        &.loading {
            transform: translateY(10em);
        }
    }
}

.scroll-down-icon {
    cursor: pointer;
    position: absolute;
    z-index: 99;
    bottom: 6em;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 14px;
    
    div {
        opacity: 1;
        transition: transform 0.35s;
        transition-timing-function: cubic-bezier(0.75, 0.1, 0, 0.9);
    }

    &:hover > div {
        transform: scaleX(0.5);
    }
    
    &:active > div {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.03, 0.41, 0, 1.01);
        transform: scaleX(2);
    }

}

video {
    width: 100%;
}

.text-wrapper {
    padding-bottom: 8em;
}

#header-wrapper {
    align-items: center;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
}


</style>