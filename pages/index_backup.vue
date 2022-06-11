<template>
    <HeaderFp/>

    <section id="who-am-i">
        <div class="grid-container fluid">
            <div class="grid-x">
                <div class="cell medium-8 large-5" id="wai-wrapper">
                    <h2>Who am I?</h2>
                    <q>Hello I’m Steven B-M Nguyen, an enthusiastic and cheerful motion, web and graphic designer from Melbourne, Australia.</q>
                    <!-- <div class="spoiler" id="aboutSpoiler">
                        <p>I was introduced to “graphic design” during Primary School when my friend asked me what I wanted to be when I grew up, I said I didn’t know, so she suggested that I’d become a graphic designer, she introduced me to the world of design, I thought it was incredible.</p>
                        <p>
                        When I showed my first ever graphic design piece to her, she flamed me. However, this did not stop me, I kept on experimenting and created “logos” for my friends for fun.</p> 
                        <p>
                        Over the years, I decided to mess around with motion design as well after seeing a video from my favourite YouTuber at the time and came to the realisation that it was fun too. Feedback and advice from peers turned my fun hobby into something I could do in my free time, whilst be able to help others by supplying designs that fit their need.</p>
                    </div>
                    
                    <button class="button" onclick="tglSpoiler('aboutSpoiler')">Read more</button> -->
                    <a href="/about-me" class="button">Read more</a>
                </div>

            </div>
        </div>
    </section>

    <section id="featured-work">
        <div class="grid-container fluid extended">
            <h2>Some of my work</h2>
            <div class="grid-x grid-margin-x">
                <div class="cell medium-6 large-6 work-thumb">
                    <a href="/portfolio/nihdc4"><div class="work-thumb-wrapper">
                            <div class="work-thumb-wrapper-cont">
                                <img src="~/assets/img/thumbs/nihdc4.png" alt="NIHDC4 motion design entry">
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
                <div class="cell medium-6 large-6 work-thumb">
                    <a href="https://www.youtube.com/watch?v=mFtwc6EQMFQ"><div class="work-thumb-wrapper">
                            <div class="work-thumb-wrapper-cont">
                                <img src="~/assets/img/thumbs/cdqc.png" alt="CDQC motion design entry">
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

                <div class="cell medium-6 large-4 work-thumb">
                    <a href="#null" class="disable-me"><div class="work-thumb-wrapper">
                            <div class="work-thumb-wrapper-cont">
                                <img src="~/assets/img/thumbs/maribsc-1.png" alt="s">
                                <h3>Maribyrnong College</h3>
                                <p>Stuff I did for my school that was never released.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="cell medium-6 large-8 work-thumb">
                    <a href="#null" class="disable-me"><div class="work-thumb-wrapper">
                        <div class="work-thumb-wrapper-cont">
                            <img src="~/assets/img/thumbs/homeroom-1.png" alt="s">
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

                <WorkThumb v-for="mountain in mountains" :key="mountain.title" :title="mountain.title" img-src="~/assets/img/thumbs/maribsc.png" desc="Wait that is suppose to be the description" cat="Joke" size="5"/>

                <div class="cell">
                    <button class="button">See more!</button>
                </div>
            </div>
        </div>

        
    </section>

    <Cta/>
</template>

<script>
import HeaderFp from "../components/layout/header/header-fp.vue";
import Cta from "../components/sections/cta.vue";
import WorkThumb from "../components/cards-widgets/work-thumb.vue";
export default {
    components: {
        HeaderFp,
        Cta,
        WorkThumb
    },

    async asyncData() {
        const mountains = await fetch(
        "https://api.nuxtjs.dev/mountains"
        ).then((res) => res.json());

        return { mountains };
    },

    beforeCreate(){
        document.body.id = "homepage"
    },

    mounted() {
        console.log(this.mountains)

        /* 
         * homepage animations:
         */
        var rellax = new Rellax('.rellax', {
            //center: true, causes issues
            vertical: true,
            horizontal: false
        });

        // Wrap every letter in logo-text with a span (deprecated)
        /* var textWrapper = document.querySelector('.logo-text');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); */

        $("#me-mechetle > .rellax").slice(2).contents().wrap("<span class='header-letter'></span>");

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
        document.addEventListener("DOMContentLoaded", function(event) { 
            swaveOne.play();
            swaveTwo.play();
        });
    },

}
</script>

<style lang="scss" scoped>
h1 {
    #sass {
        color: blue;
    }
}
</style>