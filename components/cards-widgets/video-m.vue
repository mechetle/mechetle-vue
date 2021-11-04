<!--
Video:
========
This will be located on headers
-->
<template>
    <div class="video-wrapper" oncontextmenu="return false;">
        <div class="video-controls" @click="playPauseVideo">
            <div class="play-button-wrapper" style="transform: translateY(70px); opacity: 0">
                <div class="play-button">
                    ▶️<span class="pb-text">&nbsp; Play video</span>
                </div>
            </div>
        </div>

        <div class="videobar">
            <div class="videobar-buttons pause-button" @click="playPauseVideo">⏯️</div>

            <div class="videobar-seek"></div>

            <div class="videobar-buttons fullscreen-button" @click="vidFullscreen"></div>

            <div class="videobar-buttons fullscreen-button" @click="vidFullscreen"></div>
        </div>

        <div class="video-overflow widescreen">
            <div class="video">
                <video id="actual-vid" width="1920" height="1080" type='video/mp4' controls controlsList="nodownload" muted></video>
            </div>
        </div>

        <!--
        <button class="small-button">Play / Pause</button>
        <button class="small-button">Mute</button>
        <button class="small-button">Watch on YouTube</button>-->
    </div>
</template>

<script>
export default {
    name: 'video-m',

    mounted() {
        /* Video Stuff  
         */
        var hiding_them;
        // load button:
        document.querySelector(".play-button-wrapper").style = "";

        function videoPB() {
            let pbw = document.querySelector(".play-button-wrapper");
            let pb = document.querySelector(".play-button");

            let pbw_bottom = pbw.getBoundingClientRect().bottom;
            let pb_bottom = pb.getBoundingClientRect().bottom;

            if (pb_bottom > 0) {
                console.log(pbw_bottom, pb_bottom, pbw_bottom == pb_bottom);
            } 
            
            if (pb_bottom == pbw_bottom) {
                pb.classList.add("rest-end")
            } else {
                pb.classList.remove("rest-end")
            }
            
        }

        window.addEventListener("scroll", () => videoPB(),{ passive: true });

        let video = document.querySelector("#actual-vid");
        fetch('/assets/video/mechetle-nihdc4.mp4')
            .then(res => res.blob()) // response ==> blob
            .then(blob => {
                console.log(blob)
                video.src = URL.createObjectURL(new Blob( [ blob ] ) );
        });

        let videoWrap = document.querySelector(".video-wrapper")
        
        // Detect when video has ended:
        video.addEventListener('ended', function(){
            // Reset video to start
            video.currentTime = 0;


            if (videoWrap.classList.contains('playing')) {
                document.querySelector(".video-wrapper").classList.remove("playing");
            }
        });

        // video controls:
        var timeout;
        const videobar = document.querySelector(".videobar");

        function vidMouseMove() {
            videobar.style = "";
            videoWrap.style = "";

            // reset original timeout
            clearTimeout(timeout);

            // if mouse didn't move in 2 seconds hide them
            timeout = window.setTimeout(() => {
                videobar.style.opacity = 0;
                videoWrap.style.cursor = "none";
            }, 1000);
        }
        videoWrap.addEventListener("mousemove", vidMouseMove);

    },

    methods: {
        playPauseVideo() {
            //console.log("Hey");
            let video = document.querySelector("#actual-vid");
            let video_wrap = document.querySelector("#actual-vid");
            if (video.paused) {
                document.querySelector(".video-wrapper").classList.toggle("playing");
                
                setTimeout(() => {
                    video.play();
                }, 750);

            } else {
                document.querySelector(".video-wrapper").classList.toggle("playing");
                video.pause();
            }
            
        },
        vidFullscreen() {
            var elem = document.querySelector("#actual-vid");
            if (elem.requestFullscreen) {
            elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { 
            elem.msRequestFullscreen();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.video-wrapper {
    position: relative;

    .videobar {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 105px;
        width: 100%;
        //background: #ffffff;
        z-index: 2;
        opacity: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5em;

        transform: translateY(20px);
        transition-duration: 0.45s;
        transition-delay: 0.1s;
        transition-property: cubic-bezier(0.91, 0.13, 0.06, 0.87);
        transition-delay: 0.05s;
    }

    .video-controls {
        left: 0;
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        z-index: 2;

        //transition-delay: 0.1s;
        transition-duration: .30s;
        transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);
    }

    .videobar-buttons {
        width: 50px;
        height: 50px;
        cursor: pointer;
        background: #fff;
    }
    .videobar-seek {
        justify-self: stretch;
        flex: 1;
        height: 50px;
        background: #fff;
        margin: 0 1em;
    }

    &:hover {  
        .videobar {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &.playing {
        .video-controls {
            opacity: 0;
            /* .play-button {
                transform: scale(0.35);
            } */
        }
        &:hover {
            .video-controls { 
                opacity: 1;
                .play-button-wrapper {
                    opacity: 0;

                    * {
                        cursor: default;
                        pointer-events: none;
                    }  
                }
            }
        }

        .video {
            background: #000000;
        }
    }
}

@keyframes up {
    0% {
        transform: translateY(70px)
    }

    100% {
        transform: translateY(0)
    }
}

.play-button-wrapper {
    $button-rest-height: 60px;

    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    height: calc(50% + $button-rest-height / 2);
    //background: rgba(11, 35, 61, 0.2);
    z-index: 1;

    //animation: up 0.6s cubic-bezier(0.91, 0.13, 0.06, 0.87) 0.85s;
    transition-timing-function: cubic-bezier(0.91, 0.13, 0.06, 0.87);
    transition-delay: 1s;
    transition-duration: 0.65s;

    .play-button {
        position: sticky;
        //top: calc(100vh - $button-rest-height * 2 - 33px);
        top: calc(100vh - $button-rest-height);
        height: $button-rest-height;
        text-align: center;
        border-radius: 0.15em;
        color: #fff;
        padding: 0.9em 2em;
        user-select: none;
        cursor: pointer;
        transform: scale(1);

        transition-duration: 0.75s;
        transition-property: cubic-bezier(0.91, 0.13, 0.06, 0.87);
        transition-delay: 0.12s;

        &:hover {
            .pb-text {
                color: #0b233d
            }
            &.rest-end::after {
                transform: scale(1.6) !important;
                transition-duration: 0.35s;
                transition-delay: 0s;
            }
        }
        &:active {
            &.rest-end::after {
                transition-duration: 0.05s;
                transition-delay: 0s;
                transform: scale(1) !important;
            }
        }

        .pb-text {
            overflow: hidden;
            display: inline-flex;
            transition-duration: 0.45s;
            transition-property: cubic-bezier(0.91, 0.13, 0.06, 0.87);
            width: 5em;
            white-space: nowrap
        }

        &.rest-end {
            .pb-text {
                //display: none;
                width: 0;
            }

            &::after {
                border-radius: 48px;
                transform: scale(1.5);
            }
            
        }

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 0.15em;
            background: #d81b60;
            top: 0;
            left: 0;
            z-index: -1;

            transition-duration: 0.45s;
            transition-property: cubic-bezier(0.91, 0.13, 0.06, 0.87);
            transition-delay: 0.05s;
        }
    }
}

.video-overflow {
    aspect-ratio: 1/1;
    height: unset;
    overflow: hidden;

    .video {
        //background: #cfd8dc;
        //background: #eceff1;
        background: #263238;
        color: #fff;
        aspect-ratio: 1 / 1;
        width: 100%;
        //margin-top: -19px;
        transform: translateY(100%);
        transition-delay: 0.4s;
        transition-duration: .95s;
        transition-timing-function: cubic-bezier(0.86,0.05,0.15,0.93);

        display: flex;
        justify-content: center;
        align-items: center;

        &.load-header {
            transform: translateY(0);
        }
    }

    &.widescreen {
        aspect-ratio: 16 / 9;
        .video {
            //aspect-ratio: 16 / 9;
            display: flex;
            align-items: center;
            height: 100%;
        }
    }

    video {
        width: 100%;
    }
}

</style>