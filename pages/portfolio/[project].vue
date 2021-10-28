<template>
    <header>
        <div class="border-top-naturalize"></div>
        <Container id="header-wrapper" class="fluid">
            <GridX>
                <div class="cell large-7 post-details">
                    <div class="text-wrapper">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active"><a href="/portfolio/">Portfolio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$route.params.project}}</li>
                            </ol>
                        </nav>

                        <h1 class="post">{{postShown.title}}</h1>
                    </div>

                    <main v-if="postShown.oneByOne === true" class="work-details">
                        <q>{{postShown.desc}}</q>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis magna sagittis, tincidunt urna mattis, pharetra massa. Sed turpis tellus, laoreet at tellus at, tristique consequat dui. Ut condimentum a risus eu molestie.</p>

                        <div class="little-bits">
                            <div class="little-bits-cols">
                                <p>
                                    <b>Context of work:</b><br>
                                    {{postShown.design_context}}
                                </p>

                            </div>
                            <div class="little-bits-cols">
                                <p>
                                    <b>Client:</b><br>
                                    {{postShown.client}}
                                </p>

                                <p>
                                    <b>Client field:</b><br>
                                    {{postShown.client_field}}
                                </p>

                            </div>
                        </div>
                    </main>
                </div>
                <div v-if="postShown.oneByOne === true" class="cell large-5 rellax" data-rellax-speed="2">
                    <div class="video-wrapper">
                        <div class="video-overflow">
                            <div class="video">
                                <p><i>Project logo animation gif here
                                </i>
                                </p>
                            </div>
                            
                        </div>

                        <!--
                        <button class="small-button">Play / Pause</button>
                        <button class="small-button">Mute</button>
                        <button class="small-button">Watch on YouTube</button>-->
                    </div>

                    <div class="nerdy-details">
                        <b>Nerdy details:</b>
                        <p>
                            Dimensions: &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp 1080x1080px
                            <br> Exported: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp .webm, .mov, .gif, image-sequence, .json (lottie)
                            <br> Client supplied: &nbsp &nbsp &nbsp &nbsp vector file of logo
                            <br> Finished:&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 20-12-3008
                        </p>
                    </div>

                </div>
                <div v-else class="cell large-10 rellax wide-vid" data-rellax-speed="3">
                    <div class="video-wrapper">
                        <div class="play-button-wrapper">
                            <div class="play-button">
                                ▶️<span class="pb-text">&nbsp; Play video</span>
                            </div>
                        </div>
                        <div class="video-overflow widescreen">
                            <div class="video">
                                <p><i>Project logo animation gif here
                                </i>
                                </p>
                            </div>
                            
                        </div>

                        <!--
                        <button class="small-button">Play / Pause</button>
                        <button class="small-button">Mute</button>
                        <button class="small-button">Watch on YouTube</button>-->
                    </div>
                </div>
            </GridX>

        </Container>

        <div id="header-bg" class="header-post-image rellax" data-rellax-speed="-4">
            <div class="image-header">
                <img :src="postShown.img" class="image-header-temp">
            </div>
            <div class="transition"></div>
        </div>

        <div class="border-bottom-naturalize"></div>
    </header>

    <main v-if="postShown.oneByOne === false" class="work-details wide-vid">
        <Container class="fluid extended">
            <GridX class="grid-margin-x">
                <Cell class="large-7 work-details">
                    <q>{{postShown.desc}}</q>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis magna sagittis, tincidunt urna mattis, pharetra massa. Sed turpis tellus, laoreet at tellus at, tristique consequat dui. Ut condimentum a risus eu molestie.</p>

                    <div class="little-bits">
                        <div class="little-bits-cols">
                            <p>
                                <b>Context of work:</b><br>
                                {{postShown.design_context}}
                            </p>

                        </div>
                        <div class="little-bits-cols">
                            <p>
                                <b>Client:</b><br>
                                {{postShown.client}}
                            </p>

                            <p>
                                <b>Client field:</b><br>
                                {{postShown.client_field}}
                            </p>

                        </div>
                    </div>
                </Cell>
                <Cell class="large-5">
                    <div class="nerdy-details">
                        <b>Nerdy details:</b>
                        <p>
                            Dimensions: &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp 1080x1080px
                            <br> Exported: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp .webm, .mov, .gif, image-sequence, .json (lottie)
                            <br> Client supplied: &nbsp &nbsp &nbsp &nbsp vector file of logo
                            <br> Finished:&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 20-12-3008
                        </p>
                    </div>
                </Cell>
            </GridX>
        </Container>
    </main>
    
    <section id="similar-work" class="grid-container fluid extended">
        <h2>Other logo animations</h2>
        <GridX class="grid-margin-x">
            <WorkThumb v-for="post in posts" :key="post.title" :title="post.title" :slug="post.slug" :img-src="post.img + '?' + post.id" :desc="post.alt" :size="3"/>

            <!-- <p>{{posts}}</p> -->
        </GridX>
    </section>

    <section id="next-prev-work" class="grid-container fluid extended">
        <GridX class="grid-margin-x">
            <div class="cell large-6">
                <h2><span>Previous project</span><span class="hoz-arrow-extended"></span></h2>

                <a href="/portfolio" class="go-explore rellax" data-rellax-speed="2" data-rellax-percentage="0.5">
                    <h2 class="rellax" data-rellax-speed="1" data-rellax-percentage="0.5">Explore other projects
                        <div class="m-icon arrow-left">⬅️</div> <!-- temporary -->
                    </h2>
                </a>
            </div>

            <WorkThumb :key="nPost.title" :title="nPost.title" :slug="nPost.slug" :img-src="nPost.img + '?' + nPost.id" :desc="nPost.alt" :size="6" :cat="nPost.category"/>

            <!-- <p>{{nPost}}</p> -->
        </GridX>
    </section>

</template>

<script>
export default {
    mounted() {
        var rellax = new Rellax('.rellax', {
            //center: true, causes issues
            vertical: true,
            horizontal: false
        });

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
    }

}
</script>

<script setup>
import WorkThumb from "~/components/cards-widgets/work-thumb.vue";
import { useRouter, useRoute } from 'vue-router'
import Container from "../../components/layout/grid/container.vue";
import GridX from "../../components/layout/grid/grid-x.vue";
import Cell from "../../components/layout/grid/cell.vue";

const router = useRouter()
const route = useRoute()

console.log("routed to...", route.params.project)

/* SAMPLE DATA:
"title": "Leffler - Nolan",
"category": "Executive",
"slug": "et-laboriosam-in",
"case": false,
"client": "Welch - Beahan",
"client_field": true
"design_context": true
"desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
"alt": "Tempora facere autem aspernatur quisquam dolorem sed quo.",
"columns": 6,
"img": "https://source.unsplash.com/random/1200x720", 
"oneByOne": true
*/

const {data: postShown} = await useFetch(`/api/data?search=${route.params.project}`, {
    pick: [
        "title",
        "category",
        //"slug",
        //"case",
        "client",
        "client_field",
        "desc",
        "design_context",
        //"alt",
        //"columns",
        "img",
        "oneByOne",
        "video",
        "tags",
        "id"
    ]
})

console.log(postShown.value)
let tags = postShown.value.tags[0]
let id = postShown.value.id[0]

const {data: posts} = await useFetch(`/api/data?limit=4&search=${tags}`)
const {data: nPost} = await useFetch(`/api/data?prev=${id}`)
</script>

<style lang="scss" scoped>
    .nerdy-details {
        background: #0b233d;
        color: #cfd8dc;
        padding: 3em;
    }

    header {
        outline-color: #ffffff;
        background: none;

        #header-wrapper {
            height: unset;

            h1 {padding-right: 6.8rem;}
        }

        .grid-x {
            height: 100%;
            > * {
                // min-height: 100%;

                &:last-child {
                    // height: calc(100vh - 66px);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    margin-top: 66px * 2 + 16.5;

                    &.wide-vid {
                        margin: auto;
                        margin-top: 0;
                    }
                }
            }
        }

        .video-wrapper {
            position: relative;
        }

        .video-overflow {
            aspect-ratio: 1/1;
            height: unset;
            overflow: hidden;

            .video {
                //background: #cfd8dc;
                //background: #eceff1;
                background: #bcaaa4;
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
                    aspect-ratio: 16 / 9;
                }
            }
        }
        .fluid {
            padding-right: 6.8rem !important;
            padding-left: 6.8rem !important;
        }

        .breadcrumb {
            a, li {
                color: #cfd8dc;
            }
            .breadcrumb-item + .breadcrumb-item:hover::before {
                color: #b0bec5;
            }
        }

        .text-wrapper {
            padding-left: 0;
            position: relative;
            color: white;
            margin-top: 10em;
            margin-bottom: 3em;
        }

        .work-details {
            padding: 3em 3em 3em 6.8rem;
            margin-left: -6.8rem;
            background: #fff;

            > * {
                max-width: 840px;
            }
        }

        .border-top-naturalize {
            z-index: 1;
            background: #ffffff;
        }

        .border-bottom-naturalize {
            background: transparent;
        }

        #header-bg {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
            height: unset;
        }

        .image-header{
            height: 80vh;
            background-size: cover;
            transform: scale(1.35);
            //filter: blur(60px);

            img {
                height: 1px;
                width: 1px;
            }
        }
        .nerdy-details {
            margin-right: -6.8rem;
            padding-right: 6.8rem;
        }
    

        .transition {
            background: #eceff1;
        }
    }

    .little-bits {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 4em;

        .little-bits-cols {
            width: 50%;

            &:last-child {
                padding-left: 3em;
            }
        }
    }

    .work-details.wide-vid {
        margin-bottom: 7em;
    }

    section#similar-work {
        padding-top: 0;
    }

    section#next-prev-work {
        //background: #eceff1;    // maybe no???
        padding-bottom: 5em;

        h2 {
            display: flex;
            // flex-direction: row;

            > span {
                font-family: inherit;

                &:first-of-type {
                    flex: none;
                }

                &:last-of-type {
                    width: 100%;
                    background: #0b233d;
                    margin-left: 0.5em;
                    height: 15px;
                    align-self: center;
                }
            }
        }
    }

    .go-explore {
        margin-top: 6em;
        margin-left: -4.5em;
        padding: 3em 4.5em;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #d81b60;
        color: #fff;
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

            transition-duration: 0.75s;
            transition-property: cubic-bezier(0.91, 0.13, 0.06, 0.87);
            transition-delay: 0.12s;

            &:hover {
                .pb-text {
                    color: #0b233d
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
</style>