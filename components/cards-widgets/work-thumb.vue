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
        <a
          :href="`/portfolio/${slug}`"
        ><div class="work-thumb-wrapper">
                <div class="work-thumb-wrapper-cont">
                    <img :src="imgSrc" :alt="alt">
                    <h3>{{ title }}</h3>
                    <p>{{ desc }}</p>

                    <div class="cat-wrapper">
                        <div class="categories">
                            <span>&#9866; &nbsp</span>
                            <span>{{ cat }}</span>
                        </div>
                    </div>

                </div>
                <div class="read-more-wrapper">
                    <div class="btn-read-more">See</div>
                </div>
            </div>
        </a>
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
        alt: {
            type: String,
        },
        cat: {
            type: String,
            default: ' '
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

</style>