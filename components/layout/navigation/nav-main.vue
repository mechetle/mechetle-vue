<!--
Primary navigation:
==================
The one that you will see on every page
-->
<template>
    <div class="nav-primary navigation loading nav-header-main" ref="nav">
        <div class="grid-container" ref="navContainer">
            <div class="logo-space logo-anim-nav"><NuxtLink to="/">
                    <img src="~/assets/img/logo-colour-2022-crop.svg" alt="Mechetle logo" width="80" height="47">
                    <!-- <h1 class="logo-text">MECHETLE</h1> -->
                </NuxtLink>
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

<script setup lang="ts">
import MobileMenu from '~/components/layout/navigation/nav-mobile.vue'

const route = useRoute()

const route_arr = route.path.substring(1).split('/')
let route_group = route_arr[0]
let link_length = (route_group != "") ? route_arr.length : 0

const offset = ref(0)
const width = ref(0)
const indexOfActive = ref(0)
const length = ref(4)     
const from = ref('')
const refreshHeaderRegions = ref(false)
const mobileMenuShow = ref(false)

// element references:
const headerRegions = ref<InstanceType<typeof HTMLElement> | null>(null)
const cursor = ref<InstanceType<typeof HTMLElement> | null>(null)
const nav = ref<InstanceType<typeof HTMLElement> | null>(null)
const navContainer = ref<InstanceType<typeof HTMLElement> | null>(null)

function changeActiveCursor() {
    let active = document.querySelector('.navigation-button-wrap .router-link-active') as HTMLElement
    
    if (active !== null) {
        // this means it is in the group but nuxt for some reason doesn't know:
        if ((link_length > 1 && route_group != "")) {
            active = document.querySelector('#'+ route_group) as HTMLElement
        }

        if (active && active.parentNode && cursor.value != null) {

            offset.value = active.offsetLeft;
            width.value = active.clientWidth;
    
            // these are for the tail and head of the cursor
            indexOfActive.value = Array.from(active.parentNode.children).indexOf(active)
    
            console.log("BRUHBRUH OFFSET:", offset.value, cursor.value, indexOfActive.value)
            cursor.value.style.left = offset.value + "px"
            cursor.value.style.width = width.value + "px"
        }
    } else {
        // this means that the page is either a sub page or it doesn't exist
    }
}

onMounted(() => {
    changeActiveCursor();

    setTimeout(()=> {
        if (nav.value !== null && navContainer.value !== null) { 
            nav.value.classList.remove("loading")
            navContainer.value.style.opacity = "1"
        }
    }, 400)

    headerRegions.value = document.querySelector("#who-am-i")
    
    if (headerRegions.value == null) {
        headerRegions.value = document.querySelector("header")
    }

    let navToggled = false;

    window.onscroll = () => {
        if (nav.value !== null && navContainer.value !== null) { 
            if(headerRegions.value && headerRegions.value.getBoundingClientRect().bottom <= -80) {
                if (!navToggled) {
                    console.log("Nav: expanded");
                    
                    nav.value.classList.remove("nav-header-main");
                    navContainer.value.classList.add("fluid");
                    navToggled = true;
                }
                } else {
                    if (navToggled) {
                        console.log("Nav: folded")
                        nav.value.classList.add("nav-header-main");
                        navContainer.value.classList.remove("fluid");
                        navToggled = false;
                    }
                    if (!refreshHeaderRegions.value) {
                        headerRegions.value = document.querySelector("#who-am-i")
                        if (headerRegions.value == null) {
                            headerRegions.value = document.querySelector("header")
                        }

                        refreshHeaderRegions.value = true;
                    }
                }
        }
    }

    addEventListener('resize', (event) => {
        mobileMenuShow.value = false
    });
}),


watch(route, (to, fromRoute) => {
    console.log("to:", to)
    console.log("routes change")

    setTimeout(() => {
        mobileMenuShow.value = false
    }, 400);

    let url_split = to.path.substring(1).split('/')
    
    link_length = url_split.length
    if (link_length > 1) {
        route_group = url_split[0]
    } else {
        route_group = ""
    }

    from.value = fromRoute.path.substring(1).split('/')[0]

    nextTick(() => {
        //console.log(this.show, this.$refs.content);
        changeActiveCursor();
    });
    
    if (to.path == "/") {
        nextTick(() => {
           headerRegions.value = document.querySelector("#who-am-i")
        })
    }
})
</script>

<style lang="scss" scoped>
#navigation-cursor {
    color: inherit;
}
</style>