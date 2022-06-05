<template>
    <div>
        <Loading v-if="isLoading"></Loading>
        
        <HeaderFp />
    
        <section id="who-am-i">
            <Container>
                <GridX>
                    <div class="cell medium-8 large-5" id="wai-wrapper">
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
                    <img class="reel-button" src="/assets/img/homepage/play-reel-button.svg">
                    <img class="reel-button-text" src="/assets/img/homepage/play-reel-text.svg">
                </div>
            </Container>

            <div id="video-overlay"></div>
            <div id="video-bg">
                <video 
                    src="/assets/video/reel-preview.webm" 
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
                <h2 class="rellax" data-rellax-speed="-0.8" data-rellax-percentage="1">Some of my work</h2>
                <GridX class="grid-margin-x">
                    <div class="cell medium-6 large-6 work-thumb rellax" data-rellax-speed="-1" data-rellax-percentage="0.5">
                        <a href="/portfolio/case/nihdc4">
                            <div class="work-thumb-wrapper">
                                <div class="work-thumb-wrapper-cont">
                                    <img src="/assets/img/thumbs/nihdc4.png" alt="NIHDC4 motion design entry">
                                    <h3>NIHDC4</h3>
                                    <p>Motion design entry</p>
    
                                    <div class="cat-wrapper">
                                        <div class="categories">
                                            <span>&#9866; &nbsp</span>
                                            <span>Motion design</span>
                                        </div>
                                    </div>
    
                                </div>
                                <div class="read-more-wrapper">
                                    <div class="btn-read-more">See</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="cell medium-6 large-6 work-thumb rellax" data-rellax-speed="1" data-rellax-percentage="0.5">
                        <a href="https://www.youtube.com/watch?v=mFtwc6EQMFQ">
                            <div class="work-thumb-wrapper">
                                <div class="work-thumb-wrapper-cont">
                                    <img src="/assets/img/thumbs/cdqc.png" alt="CDQC motion design entry">
                                    <h3>CDQC</h3>
                                    <p>Another motion design entry</p>
    
                                    <div class="cat-wrapper">
                                        <div class="categories">
                                            <span>&#9866; &nbsp</span>
                                            <span>Motion design</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="read-more-wrapper">
                                    <div class="btn-read-more">See</div>
                                </div>
                            </div>
                        </a>
    
                    </div>
    
                    <div class="cell medium-6 large-4 work-thumb rellax" data-rellax-speed="-1" data-rellax-percentage="0.5">
                        <a href="#null" class="disable-me">
                            <div class="work-thumb-wrapper">
                                <div class="work-thumb-wrapper-cont">
                                    <img src="/assets/img/thumbs/maribsc-1.png" alt="s">
                                    <h3>Maribyrnong College</h3>
                                    <p>Stuff I did for my school that was never released.</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="cell medium-6 large-8 work-thumb rellax" data-rellax-speed="1" data-rellax-percentage="0.5">
                        <a href="#null" class="disable-me">
                            <div class="work-thumb-wrapper">
                                <div class="work-thumb-wrapper-cont">
                                    <img src="/assets/img/thumbs/homeroom-1.png" alt="s">
                                    <h3>HomeRoom by Jikens & Jikano CO</h3>
                                    <p>Online school enviroment redefined (School project)</p>
    
                                    <div class="cat-wrapper">
                                        <div class="categories">
                                            <span>&#9866; &nbsp</span>
                                            <span>Graphic design, UI & UX, Industrial Design</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="read-more-wrapper">
                                    <div class="btn-read-more">Read More</div>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <WorkThumb 
                        v-for="post in posts" 
                        :key="post.title" 
                        :title="post.title" 
                        :slug="post.slug" 
                        :img-src="post.img + '?' + post.id" 
                        :desc="post.alt"  
                        :cat="post.category" 
                        :size="post.columns"
                        class="rellax"
                        :data-rellax-speed="rellaxPattern[posts.indexOf(post)]"
                        data-rellax-percentage="0.5"
                    />
    
    
                    <p> {{data}}</p>
    
                    <div class="cell">
                        <button class="button">See more!</button>
                    </div>
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
            isLoading: true,
            rellaxPattern: [-0.1, 0.1, -0.1, 0.1]
            //rellaxPattern: [-4, 2, -2, 4]
        }
    },

    // this used to cause error 505, but may cause other issues
    beforeMount() {
    },

    mounted() {
        /* 
         * homepage animations:
         */
        setTimeout(() => {
            document.querySelector("#loading").classList.add("loaded")
        }, 800);
        setTimeout(() => {
            //document.querySelector("#loading").classList.remove("loaded")
            this.isLoading = false;
        }, 3000);

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
        

    }
}
</script>

<script setup>   
import HeaderFp from "../components/layout/header/header-fp.vue";
import Cta from "../components/sections/cta.vue";
import WorkThumb from "../components/cards-widgets/work-thumb.vue";
import Container from "../components/layout/grid/container.vue";
import GridX from "../components/layout/grid/grid-x.vue";
import GridX1 from "../components/layout/grid/grid-x.vue";
import VideoM from "../components/cards-widgets/video-m.vue";
import Loading from '@/components/loading.vue'

const {data: posts} = await useFetch("/api/data?limit=4")


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
            height: min(132vh);
            //margin-top: 2em;
            //margin-bottom: 2em;
            clip-path: polygon(53% 7%, 100% 0, 100% 93%, 53% 98%, 28% 95%, 0 100%, 0 12%, 25% 3%);
            
            #wai-wrapper {
                margin-top: 14em;
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
        right: 12em;
        //bottom: 2em;

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

            &:hover {
                + .reel-button-text {
                    animation-play-state: paused;
                    opacity: 1;
                    //animation-duration: 20s;
                }
            }
        }


    }

    @keyframes rotating {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
</style>