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
        <NuxtLink
          :to="`/portfolio/${slug}`"
        ><div class="work-thumb-wrapper">
                <div class="work-thumb-wrapper-cont">
                    <img :src="imgSrc" :alt="alt">

                    <div class="title">
                        <h3>{{ title }}</h3>
                        <!-- <p>{{ desc }}</p> -->
                    </div>

                    <div class="cat-wrapper">
                        <span v-for="categories in cat">
                            {{ categories }}
                        </span>
                    </div>

                </div>
                <!-- <div class="read-more-wrapper">
                    <div class="btn-read-more">See</div>
                </div> -->
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'work-thumb',
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
    }

}
</script>

<style lang="scss" scoped>
.work-thumb {
    margin-top: 1.5em;
}
.work-thumb, img {
    border-radius: 0.75em;
}
.work-thumb-wrapper-cont {
    position: relative;
    display: flex;
}
.title {
    position: absolute;
    bottom: 0;
    margin-left: 1.75em;
    width: min-content;
}
.cat-wrapper {
    position: absolute;
    top: 0;
    right: 0;
}
</style>