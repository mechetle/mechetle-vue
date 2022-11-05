<!--
Primary navigation:
==================
The one that you will see on every page
-->
<template>
    <div class="nav-primary navigation loading nav-header-main" ref="nav">
        <div class="grid-container" ref="navContainer">
            <div class="logo-space logo-anim-nav"><a href="/" alt="Home">
                    <img src="~/assets/img/logo-colour-2022-crop.svg" alt="Mechetle logo" width="80" height="47">
                    <!-- <h1 class="logo-text">MECHETLE</h1> -->
                </a>
            </div>
            <div class="navigation-button-wrap">
                <nav class="hover-fx dark">
                    <NuxtLink to="/"><span class="material-symbols-outlined">&#xe88a;</span></NuxtLink>
                    <NuxtLink to="/portfolio" id="portfolio">Works</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/lab">Lab room</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>

                    <!-- If in mobile mode -->
                    <a id="hamborger" @click="mobileMenuShow = !mobileMenuShow"><span class="material-symbols-outlined">menu</span></a>
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

    <transition name="mobile-menu">
        <MobileMenu v-if="mobileMenuShow">
        </MobileMenu>    
    </transition>

</template>

<script setup>
import MobileMenu from '~/components/layout/navigation/nav-mobile.vue'


const route = useRoute()

const route_arr = route.path.substring(1).split('/')
let route_group
route_group = route_arr[0]
let link_length = (route_group != "") ? route_arr.length : 0
</script>

<script>

export default {
    name: 'nav-main',

    data() {
        return { 
            offset: 0,
            width: 0,
            indexOfActive: 0,

            length: 4,
            
            from: '',
            refreshHeaderRegions: false,
            headerRegions: null,
            mobileMenuShow: false
        }
    },

    methods: {
        changeActiveCursor() {
            let cursor = this.$refs.cursor
            let active = document.querySelector('.router-link-active')

            // this means it is in the group but nuxt for some reason doesn't know:
            if ((this.link_length > 1 && this.route_group != "")) {
                active = document.querySelector('#'+ this.route_group)
            }

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
            console.log("to:", to)
            let url_split = to.path.substring(1).split('/')
            this.link_length = url_split.length
            if (this.link_length > 1) {
                this.route_group = url_split[0]
            } else {
                this.route_group = ""
            }

            this.from = from.path.substring(1).split('/')[0]

            this.$nextTick(() => {
                //console.log(this.show, this.$refs.content);
                this.changeActiveCursor();
            });
            
            if (to == "/") {
                this.$nextTick(() => {
                    this.refreshHeaderRegions = false;
                    this.headerRegions = document.querySelector("#who-am-i")
                })
            }

        }
    },

    mounted() {
        this.changeActiveCursor();
        let nav = this.$refs.nav
        let navContainer = this.$refs.navContainer

        setTimeout(()=> {
            nav.classList.remove("loading")
            navContainer.style.opacity = 1
        }, 400)

        this.headerRegions = document.querySelector("#who-am-i")
        let navToggled = false;

        window.onscroll = () => {
            if(this.headerRegions.getBoundingClientRect().bottom <= -80){
                if (!navToggled) {
                    console.log("Nav: expanded");
                    
                    nav.classList.remove("nav-header-main");
                    navContainer.classList.add("fluid");
                    navToggled = true;
                }
            } else {
                if (navToggled) {
                    console.log("Nav: folded")
                    nav.classList.add("nav-header-main");
                    navContainer.classList.remove("fluid");
                    navToggled = false;
                }
                if (!this.refreshHeaderRegions) {
                    this.headerRegions = document.querySelector("#who-am-i")
                    this.refreshHeaderRegions = true;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>