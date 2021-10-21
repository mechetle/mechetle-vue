<template>
    <header>
        <div class="border-top-naturalize"></div>
        <div id="header-wrapper" class="grid-container fluid">
            <div class="grid-x">
                <div class="cell large-7 post-details">
                    <div class="text-wrapper">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active"><a href="/portfolio/">Portfolio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$route.params.project}}</li>
                            </ol>
                        </nav>

                        <h1 class="post">{{post.title}}</h1>
                    </div>

                    <main class="work-details">
                        <q>{{post.desc}}</q>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis magna sagittis, tincidunt urna mattis, pharetra massa. Sed turpis tellus, laoreet at tellus at, tristique consequat dui. Ut condimentum a risus eu molestie.</p>

                        <div class="little-bits">
                            <div class="little-bits-cols">
                                <p>
                                    <b>Context of work:</b><br>
                                    {{post.design_context}}
                                </p>

                            </div>
                            <div class="little-bits-cols">
                                <p>
                                    <b>Client:</b><br>
                                    {{post.client}}
                                </p>

                                <p>
                                    <b>Client field:</b><br>
                                    {{post.client_field}}
                                </p>

                            </div>
                        </div>
                    </main>
                </div>
                <div class="cell large-5 rellax" data-rellax-speed="2">
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
            </div>

        </div>

        <div id="header-bg" class="header-post-image rellax" data-rellax-speed="-4">
            <div class="image-header">
                <img :src="post.img" class="image-header-temp">
            </div>
            <div class="transition"></div>
        </div>

        <div class="border-bottom-naturalize"></div>
    </header>
    
    <section>

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
    }

}
</script>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
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
    
    const {data: post} = await useFetch(`/api/data?search=${route.params.project}`, {
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
            "oneByone",
            "video",
        ]
    })

    console.log(post.value)
</script>

<style lang="scss" scoped>
    header {
        outline-color: #ffffff;
        background: none;

        #header-wrapper {
            height: unset;

            h1 {padding-right: 6.8rem;}
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
                }
            }
        }

        .video-overflow {
            aspect-ratio: 1/1;
            height: unset;
            overflow: hidden;

            .video {
                //background: #cfd8dc;
                background: #eceff1;
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
            background: #0b233d;
            margin-right: -6.8rem;
            padding-right: 6.8rem;
            //margin-top: -20vh;
            //padding-top: 20vh;

            padding-top: 3em;
            padding-bottom: 3em;
            padding-left: 3em;

            color: #cfd8dc;
        }
    

        .transition {
            background: #eceff1;
        }
    }
</style>