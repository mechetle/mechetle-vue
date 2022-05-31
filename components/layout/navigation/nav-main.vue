<!--
Primary navigation:
==================
The one that you will see on every page
-->
<template>
    <div class="nav-primary navigation nav-header-main">
        <div class="grid-container">
            <div class="logo-space logo-anim-nav"><a href="/" alt="Home">
                    <img src="/assets/img/mechetleweb-svglogo.svg" alt="Mechetle logo">
                    <!-- <h1 class="logo-text">MECHETLE</h1> -->
                </a>
            </div>
            <div class="navigation-button-wrap">
                <nav>
                    <NuxtLink to="/">🏠</NuxtLink>
                    <NuxtLink to="/works">Works</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/lab">Lab room</NuxtLink>
                    <NuxtLink to="/test">Contact</NuxtLink>
                </nav>
                <div 
                    id="navigation-cursor" 
                    ref="cursor"
                    v-bind:class="{ trailing: indexOfActive == 0 || indexOfActive == length}"
                ></div>
                <div 
                    class="cursor-endings left"
                    v-bind:class="{ active: indexOfActive == 0}"
                ></div>
                <div 
                    class="cursor-endings right"
                    v-bind:class="{ active: indexOfActive == length}"
                ></div>
            </div>
        </div>

        <!--
        <div class="fix-blink-temp"></div>
        -->

    </div>
</template>

<script>
export default {
    name: 'nav-main',

    data() {
        return { 
            offset: 0,
            width: 0,
            indexOfActive: 0,

            length: 4
        }
    },

    methods: {
        changeActiveCursor() {
            let cursor = this.$refs.cursor
            let active = document.querySelector('.router-link-exact-active')

            this.offset = active.offsetLeft;
            this.width = active.clientWidth;

            // these are for the tail and head of the cursor
            this.indexOfActive = Array.from(active.parentNode.children).indexOf(active)

            console.log("BRUHBRUH OFFSET:", this.offset, cursor, this.indexOfActive)
            cursor.style.left = this.offset + "px"
            cursor.style.width = this.width + "px"
        }
    },

    watch: {
        $route(to, from) {
            this.$nextTick(() => {
                //console.log(this.show, this.$refs.content);
                this.changeActiveCursor();
            });
        }
    },

    mounted() {
        this.changeActiveCursor();
    }
}
</script>

<style lang="scss" scoped>

</style>