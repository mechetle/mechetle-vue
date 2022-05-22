<!--
Front page header:
==================
-->
<template>
    <header id="homepage-header">
        <div id="foreground-wrapper">
            <video src="/assets/video/header_foreground.webm" id="h_fg" autoplay muted></video>
        </div>

        <div id="header-wrapper">
            <div class="text-wrapper">
                <div id="this-is">THIS IS</div>
                <h1 class="logo-text-header display">
                    <span id="me-mechetle">
                        <span class="rellax" data-rellax-speed="4">M</span>
                        <span class="rellax" data-rellax-speed="4.25">E</span>
                        <span class="rellax" data-rellax-speed="4.5">C</span>
                        <span class="rellax" data-rellax-speed="4.75">H</span>
                        <span class="rellax" data-rellax-speed="5">E</span>
                        <span class="rellax" data-rellax-speed="5.25">T</span>
                        <span class="rellax" data-rellax-speed="5.5">L</span>
                        <span class="rellax" data-rellax-speed="5.75">E</span>
                    </span>
                </h1>
            </div>
        </div>
        
        <div id="background-wrapper">
            <div id="bg-circle-mask">
                <video src="/assets/video/header_background.webm" autoplay muted></video>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-fp',

    mounted() {
        let h_fg = document.getElementById('h_fg');
    }
}
</script>

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
    top: 2.5vh;
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