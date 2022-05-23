<template>
    <HeaderFp />

    <section id="who-am-i">
        <Container class="fluid">
            <GridX>
                <div class="cell medium-8 large-5" id="wai-wrapper">
                    <h2>Who am I?</h2>
                    <q>Hello I’m Steven B-M Nguyen, an enthusiastic and cheerful motion, web and graphic designer from
                        Melbourne, Australia.</q>

                    <a href="/about-me" class="button">Read more</a>
                </div>

            </GridX>
        </Container>
    </section>

    <section id="featured-work">
        <Container class="fluid extended">
            <h2 class="rellax" data-rellax-speed="0.5" data-rellax-percentage="1">Some of my work</h2>
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
</template>

<script>
export default {
    data () {
        return { 
            rellaxPattern: [-1, 1, -1, 1]
            //rellaxPattern: [-4, 2, -2, 4]
        }
    },

    // this used to cause error 505, but may cause other issues
    beforeMount() {
        document.querySelector("#__nuxt > div").id = "homepage"
    },

    mounted() {
        /* 
         * homepage animations:
         */
        var rellax = new Rellax('.rellax', {
            //center: true, causes issues
            vertical: true,
            horizontal: false
        });

        // Wrap every letter in MECHETLE in header
        let textWrapper = document.querySelectorAll('#me-mechetle > .rellax:nth-child(n+3)');
        textWrapper.forEach(element => {
            element.innerHTML = element.textContent.replace(/\S/g, "<span class='header-letter'>$&</span>");
        });
        

        // loading in swave:
        var swaveOne = bodymovin.loadAnimation({
            container: document.getElementById('swave-1'),
            path: 'assets/img/homepage/swave-1.json',
            renderer: 'svg',
            loop: false,
            autoplay: true,
        })
        var swaveTwo = bodymovin.loadAnimation({
            container: document.getElementById('swave-2'),
            path: 'assets/img/homepage/swave-2.json',
            renderer: 'svg',
            loop: false,
            autoplay: true,
        })

        // when document ready execute swaves:
        document.addEventListener("DOMContentLoaded", function (event) {
            swaveOne.play();
            swaveTwo.play();
        });

        // text logo header in
        var textLogoHeader = anime.timeline({
            easing: "spring(0.7, 100, 10, 4)",
            duration: 400,
            delay: anime.stagger(50),
            loop: false,
            autoplay: false,
        });

        textLogoHeader.add({
            targets: '.header-letter',
            opacity: 1,
            translateY: [-viewportHeight , 0],  // make -1000 to the height of the window - done
        })

        let tah = 0

        function animationToggleHeadText() {
            if (tah == 0) {
                textLogoHeader.play();
                tah = 1;
            }
        };

        let lastKnownScrollPosition = 0;
        let ticking = false;

        function doSomething(scrollPos) {
            if (scrollPos >= document.getElementById("who-am-i").offsetTop) {
                tah = 0;
                //textLogoHeader.restart();
            } else {
                if (scrollPos > 100) {
                    // console.log("scroll higher than 400");
                    animationToggleHeadText();
                }
            }
        }

        document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
            });

            ticking = true;
        }
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

const {data: posts} = await useFetch("/api/data?limit=4")


</script>

<style lang="scss" scoped>
    h1 {
        #sass {
            color: blue;
        }
    }
</style>