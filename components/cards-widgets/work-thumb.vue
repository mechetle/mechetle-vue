<!--
Thumbnail of the work:
======================
Seen on the home and portfolio page.

TODO:
- convert <a></a> into <NuxtLink :to="`/work/${slug}`"></NuxtLink>
- :to="{ name: 'portfolio-slug', params: { slug: slug } }"
-->
<template>
    <div :class="['cell', 'medium-6', columns, 'work-thumb']">
        <slot></slot>

        <NuxtLink
          :to="`/portfolio/${slug}`"
          @click.native="active = true"
        ><div class="work-thumb-wrapper">
                <div class="work-thumb-wrapper-cont" :class="{ active: active }">
                    <nuxt-img 
                        class="rellax"
                        :class="{'loaded': loaded}"
                        data-rellax-speed="-2" 
                        data-rellax-percentage="0.5"
                        format="webp"
                        :src="imgSrc" 
                        :alt="alt" 
                        loading="lazy"
                        height=506
                        width=900

                        @load="loadedIMG()"
                    ></nuxt-img>

                    <div class="cat-wrapper">
                        <span v-for="categories in cat">
                            <template v-if="categories == 'motion'">
                                <span class="material-symbols-outlined">animation</span>
                            </template>
                            <template v-if="categories == 'brand'">
                                <span class="material-symbols-outlined">architecture</span>
                            </template>
                            <template v-if="categories == 'code'">
                                <span class="material-symbols-outlined">code</span>
                            </template>
                        </span>
                    </div>

                </div>

                <div class="title">
                    <h3>{{ title }}</h3>
                    <p>{{ desc }}</p>
                </div>

                <!-- <div class="read-more-wrapper">
                    <div class="btn-read-more">See</div>
                </div> -->
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const active = ref(false);

</script>

<script>
export default {
    name: 'work-thumb',

    data () {
        return {
            loaded: false
        }
    },
    props: {
        key: String,

        title: {
            type: String,
            default: 'Untitled Project'
        },
        imgSrc: {
            type: String,
            default: '/assets/img/thumbs/nihdc4.png'
        },
        desc: {
            type: String,
            default: 'Hey bruv, there is no description'
        },
        /* alt: {
            type: String,
        }, */
        cat: {
            type: Array,
        },
        slug: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 6
        },
    },
    computed: {
        columns() {
            return 'large-' + this.size
        },
        alt() {
            if (this.alt == null) {
                return this.desc
            } else {
                return this.alt
            }
        }

/*         lazyStatus {
            if (this.imgSrc)
        } */
    },

    methods: {
        loadedIMG() {
            console.log("img loaded")
            setTimeout(() => {
                this.loaded = true
            }, 1000)
        }
    }

}
</script>

<style lang="scss" scoped>
.work-thumb {
    margin-top: 1.5em;
    margin-bottom: 2em;

    a {
        color: #fff;

        .title {
            color: #191C1D;
            
            h3 {
                margin-block-start: .5em;
                margin-bottom: .25em;
            }
            p {
                margin-block-start: .25em;
                margin-bottom: .25em;
                color: #43474E;
            }
        }
    }

    .loaded {
        filter: blur(0px);
    }
}
.work-thumb, img {
    border-radius: 0.75em;
}
.work-thumb-wrapper-cont {
    position: relative;
    display: flex;
    border-radius: 0.75em;
    overflow: hidden;

    // vertical centre:

    img {
        width: 110%;
        min-height: 100%;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        transition: filter 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
        filter: blur(220px);

        /* &.loaded {
            height: auto;
        } */
    }

}

.work-thumb-wrapper-cont.active { 
    view-transition-name: selected-project;
}

/* .title {
    //position: absolute;
    //bottom: 0;
    //margin-left: 1.75em;
    //width: min-content;
} */
.cat-wrapper {
    border-radius: 1.5em;
    box-shadow: 0 2.5px 20px 0px rgb(4 14 25 / 12%);
    //color: #f7f7f7;
    //color: #D1E4FF;
    color: rgba(57, 0, 54, 1);
    padding: 0 .75em;
    position: absolute;
    right: 1.5em;
    bottom: 1.5em;
    //background: rgb(255 255 255 / 20%);
    background: #FFD6F4;
    backdrop-filter: blur(10px);
}

.material-symbols-outlined {
  font-size: 20px;
}

</style>