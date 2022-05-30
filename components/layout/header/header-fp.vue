<!--
Front page header:
==================
-->
<template>
    <header id="homepage-header">
        <div id="foreground-wrapper" class="rellax" data-rellax-speed="-4">
            <div class="video-wrapper">
                <div id="fg-paused" ref="fg_paused" class="paused"></div>
                <video src="/assets/video/header_foreground.webm" id="h_fg" ref="h_fg" muted></video>
            </div>
        </div>

        <div id="header-wrapper">
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
        
        <div id="background-wrapper" class="rellax" data-rellax-speed="-9">
            <div id="bg-circle-mask">
                <div class="video-wrapper">
                    <div id="bg-paused" class="paused"></div>
                    <video src="/assets/video/header_background.webm" id="h_bg" ref="h_bg" muted></video>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-fp',

    mounted() {
        let intro_ran = false;

        let h_fg = this.$refs.h_fg;
        let fg_paused = this.$refs.fg_paused;
        let h_bg = this.$refs.h_bg;

        fg_paused.style.transitionProperty = 'none'
        h_fg.style.transitionProperty = 'none'
        h_fg.currentTime = 0;
        intro_ran = false;
        fg_paused.style.opacity = 0
        h_fg.style.opacity = 1

        h_fg.play();
        h_bg.play();

        
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
    }
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
        transform: translateY(6.5em);
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

.video-wrapper > .paused {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-duration: 0.2s;
    transition-delay: 0.1s;
}

#background-wrapper {
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
    overflow: hidden;
    clip-path: circle(47vw at center 130vh);

    #bg-circle-mask {
        overflow: hidden;
        width: 100%;
        //border-radius: 100%;

        video {
            width: 120vw;
            mix-blend-mode: hard-light;
            opacity: 0.45;
            top: 36vh;
            position: relative;
        }
    }
}

video {
    width: 100%;
}

.text-wrapper {
    padding-bottom: 8em;
}

#homepage-header {
    height: 100vh;
    z-index: -1;
    position: relative;
}

#header-wrapper {
    align-items: center;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
}


</style>