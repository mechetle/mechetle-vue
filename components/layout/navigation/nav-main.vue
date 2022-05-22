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
}
</script>

<style lang="scss" scoped>

</style>