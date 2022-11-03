<template>
    <div>
        <Loading v-if="loaderOn"></Loading>
        
        <HeaderFp v-model:headerReady="headerReady"/>

        <Teleport to="body">
            <Transition name="reel-model">
                <div v-if="showingReel" class="video-modal">
                    <video 
                        src=""
                    ></video>
                    
                    <div class="hover-fx">
                        <a @click="showingReel = false" id="close-video-modal">
                            <span class="material-symbols-outlined">close</span>
                        </a>
                    </div>
                </div>
            </Transition>
        </Teleport>
    
        <section id="who-am-i" :class="[showingReel ? 'show' : '']">
            <Container class="slim">
                <GridX>
                    <div class="cell small-10 medium-8 large-5" id="wai-wrapper">
                        <h2>Hey, I’m Steven B-M Nguyen</h2>
                        <q>I am an enthusiastic, motion, brand, web designer and web developer from Melbourne, Victoria, Australia.</q>
                        
                        <div class="button-row">
                            <a href="/about-me" class="button">Read more</a>
                        </div>
                    </div>
    
                    <div class="cell medium-4 large-5"> 
                        <!-- <VideoM></VideoM> -->
                    </div>
    
                </GridX>

                <div id="play-reel">
                    <img 
                        class="reel-button" 
                        src="~/assets/img/homepage/play-reel-button.svg"
                        @click="showingReel = true">
                    <img class="reel-button-text" src="~/assets/img/homepage/play-reel-text.svg">
                    <div :class="['ripple-button', showingReel ? 'show' : '']"></div>
                </div>
            </Container>

            <div id="video-overlay"></div>
            <div id="video-bg">
                <video 
                    src="/video/reel-preview.webm" 
                    id="wai-video" 
                    ref="wai-video" 
                    muted autoplay loop
                    class="rellax"
                    data-rellax-speed="-2"
                ></video>
            </div>

        </section>
    
        <section id="featured-work">
            <Container class="extended">
                <GridX class="grid-margin-x">
                    
                    <Cell class="large-5" id="fw-text-wrap">
                        <div id="fw-text">
                            <h2>Some work</h2>
                            <p>Here are some of my favourites. ️😅</p>
                            <a class="button">View all</a>
                        </div>
                    </Cell>

                    <WorkThumb 
                        title="Pinned page" 
                        slug="blah-blah" 
                        img-src="/img/thumbs/nihdc4.webp" 
                        desc="this page doesn't lead to anywhere lol"  
                        cat="brand" 
                        size="7"
                    />

                    <WorkThumb 
                        v-for="post in posts" 
                        :key="post.title" 
                        :title="post.title" 
                        :slug="post.slug" 
                        :img-src="post.img + '?' + post.id" 
                        :desc="post.alt"  
                        :cat="post.category" 
                        :size=post.columns
                    />
    
    
                    <!-- <p> {{data}}</p> -->
                </GridX>
            </Container>
    
    
        </section>
    
        <Cta />
    </div>
</template>

<script>

export default {
    data () {
        return { 
            loaderOn: true,
            'headerReady': false,

            rellaxPattern: [0, 0, 0, 0],
            //rellaxPattern: [-4, 2, -2, 4]

            showingReel: false,
        }
    },

    // this used to cause error 505, but may cause other issues
    beforeMount() {
    },

    mounted() {
        setTimeout(() => {
            var rellax = new Rellax('.rellax', {
                //center: true, causes issues
                vertical: true,
                horizontal: false
            });
        
        }, 500)

        // Wrap every letter in MECHETLE in header
        let textWrapper = document.querySelectorAll('#me-mechetle > .rellax:nth-child(n+3)');
        textWrapper.forEach(element => {
            element.innerHTML = element.textContent.replace(/\S/g, "<span class='header-letter'>$&</span>");
        });

        setTimeout(() => {
                    document.querySelector("#loading").classList.add("loaded")
                }, 800);
        setTimeout(() => {
            //document.querySelector("#loading").classList.remove("loaded")
            
            this.loaderOn = false;
        }, 3000);
    },

    watch: {
        'headerReady'(to, from) {
            console.log("headerReady(to, from)")

            if (from == false && to == true) {
                console.log("inside of emitted headerReady function")

                setTimeout(() => {
                    document.querySelector("#loading").classList.add("loaded")
                }, 800);
                setTimeout(() => {
                    //document.querySelector("#loading").classList.remove("loaded")
                    
                    this.loaderOn = false;
                }, 3000); 
            }
        }
    },

    methods: {
        showReel() {
            console.log("reel")
        }
    }

    
}
</script>

<script setup>   
//import HeaderFp from "../components/layout/header/fp.vue";
//import Cta from "../components/sections/cta.vue";
//import WorkThumb from "../components/cards-widgets/work-thumb.vue";
//import Container from "../components/layout/grid/container.vue";
//import VideoM from "../components/cards-widgets/video-m.vue";
//import GridX from "../components/layout/grid/grid-x.vue";
//import Loading from '@/components/loading.vue'
//import Cell from "~~/components/layout/grid/cell.vue";

const {data: posts} = await useFetch("/api/data?limit=4")

const title = ref('Mechetle | Steven B-M Nguyen')
const description = ref("Hello, I'm Steven B-m Nguyen, an enthusiastic self-taught motion, brand, web designer and web developer.")

useHead({
    title: title,
    meta: [
        {
            name: 'description',
            content: description
        }
    ],
})

</script>

<style lang="scss" scoped>
    h1 {
        #sass {
            color: blue;
        }
    }

    section {
        background: #FBFDFD;
        position: relative;

        &#who-am-i {
            //background: linear-gradient(103.68deg, #D1E4FF 35.29%, rgba(209, 228, 255, 0.22) 98.9%) rgb(0 28 56 / 0%);
            background: rgb(0 28 56);
            height: min(132vh) 100%;
            //margin-top: 2em;
            //margin-bottom: 2em;
            clip-path: polygon(53% 7%, 100% 0, 100% 93%, 53% 98%, 28% 95%, 0 100%, 0 12%, 25% 3%);
            transform: scale(1);
            transition-property: transform;
            transition: 1.15s cubic-bezier(0.85, 0.14, 0.25, 0.94);
            transition-delay: 0.3s;
            z-index: 100;

            &.show {
                transform: scale(2.00);
                
                #wai-wrapper {
                    filter: blur(5em);
                }
            }
            
            @media screen and (max-width: 39.9375em) {
                overflow: hidden;
            }
            
            #wai-wrapper {
                @media screen and (max-width: 39.9375em) {
                    margin-top: 10em;
                    margin-bottom: 20em;
                }
                
                margin-top: 14em;
                margin-bottom: 40vh;
                color: rgba(0, 28, 56, 1);

                filter: blur(0);
                transition: 1.15s cubic-bezier(0.85, 0.14, 0.25, 0.94);
                transition-delay: 0.1s;
            }

            #video-overlay {
                position: absolute;
                background: linear-gradient(103.68deg, #D1E4FF 35.29%, rgba(209, 228, 255, 0.22) 98.9%);
                z-index: -1;
                height: 100%;
                width: 100%;
                top:0;
            }

            #video-bg {
                position: absolute;
                top: 0;
                transform: scale(1.45) translate(10vw,-4.5%);
                z-index: -2;
                //opacity: 0.75;
                mix-blend-mode: overlay;
                width: 100vw;
                overflow-x: hidden;
            }
        }

        .grid-container {
            position: relative;
        }

        &#featured-work {
            padding-top: 5em;
        }  
    }

    #play-reel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 7em;
        bottom: 25vh;
        
        @media screen and (max-width: 39.9375em) {
            bottom: 12em;
            transform: scale(0.75);
        }

        > * {
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        
        .reel-button-text {
            position: absolute;
            animation: rotating 17s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transition-duration: 0.5s;
            z-index: -1;
            opacity: 0.5;
        }
        .reel-button {
            position: absolute;
            cursor: pointer;
            border-radius: 100%;
            z-index: 3;

            transition-property: transform;
            transition: 0.75s cubic-bezier(0.95, 0.21, 0.05, 0.83);

            .show & {
                scale: 0;
            }

            &:hover {
                scale: 1.1;
                transition-delay: 0s;
                transition: 0.35s cubic-bezier(0.85, 0.14, 0.25, 0.94);

                + .reel-button-text {
                    animation-play-state: paused;
                    opacity: 1;
                    //animation-duration: 20s;
                }
            }

            &:active {
                transition-duration: 0.15s;
                transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
                scale: 0.8;

                + .reel-button-text {
                    animation-play-state: paused;
                    opacity: 1;
                    scale: 0.6;
                    //animation-duration: 20s;
                }
            }
        }

        .ripple-button {
            position: absolute;
            border-radius: 100%;
            height: 10em;
            width: 10em;
            background: #001c38;
            transform: scale(0);
            transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            z-index: 2;

            &.show {
                transform: scale(22.5);
            }
        }

    }

    @keyframes rotating {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }

    #fw-text-wrap {
        display: flex;
        flex-direction: column;
        padding-top: 7.75em;
    }

    // this needs to be moved
    .video-modal {
        z-index: 9999;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #001c38;

        .hover-fx {
            font-size: 48px;
            position: absolute;
            top: 2em;
            left: 2em;
        }
    }
    #close-video-modal {
        border-radius: 100%;
        cursor: pointer;
        width: fit-content;
        display: flex;
        color: #FBFDFD;

        .material-symbols-outlined {
            font-size: 1em;    
        }
    }

    // reel modal transition
    .reel-model-enter-active {
        transition: all 0.45s cubic-bezier(0.86,0.05,0.15,0.93);
        transition-delay: 0.45s;
    }

    .reel-model-leave-active {
        transition: all 0.75s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .reel-model-enter-from,
    .reel-model-leave-to {
        transform: scaleY(0.1) scaleX(0.35);
        opacity: 0;
    }
</style>