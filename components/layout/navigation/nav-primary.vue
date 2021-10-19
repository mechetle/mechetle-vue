<!--
Primary navigation:
==================
The one that you will see on every page
-->
<template>
    <div class="nav-primary navigation nav-header-main">
        <div class="grid-container fluid">
            <div class="logo-space logo-anim-nav"><a href="/" alt="Home">
                    <img src="/assets/img/mechetleweb-svglogo.svg" alt="Mechetle logo">
                    <h1 class="logo-text">MECHETLE</h1>
                </a>
            </div>
            <div class="navigation-button-wrap">
                <div class="nav-breaking-percau">
                    <div class="nav-break">
                        <div class="nav-hamburger"><span style="font-size: 0.5em; ">icon goes here</span></div>
                        <div class="nav-break-its-free-real-estate" itemscope itemtype="http://schema.org/SiteNavigationElement">
                            <ul class="links-1 nav-link-section">
                                <li><a href="/" class="nav-button">Home</a></li>
                                <li><a href="/about-me" class="nav-button">About Me</a></li>
                                <li><a href="#Portfolio" class="nav-button">Portfolio <i
                                            class="fas fa-caret-down"></i></a>
                                    <div class="fix-shadow"></div>
                                    <div class="nav-megaDropdown-bg">
                                        <div class="grid-container">
                                            <div class="grid-x">
                                                <div class="cell small-12 medium-9 large-7 navbar-dropdown-wrap">
                                                    <h4>Portfolio</h4>
                                                    <ul class="nav-dropdown">

                                                        <li><a href="#">Graphic design</a></li>
                                                        <li><a href="#">Motion Design</a></li>
                                                        <li><a href="#">Web development</a></li>
                                                        <li><a href="#">School Projects</a></li>

                                                    </ul>
                                                </div>
                                                <div class="cell medium-3 large-5 hide-for-small-only">
                                                    <div class="dropdown-image">
                                                        <!-- add background image css inline here-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="nav-megaDropdown-bg hover-area"></div>
                                </li>

                            </ul>
                            <ul class="links-2 nav-link-section">
                                <li><a href="#" class="nav-button disable-me">Lab room</a></li>
                                <li><a href="/contact" class="nav-button">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <a href="#" class="nav-button search-button"><i class="search-sym"></i></a>
            </div>
        </div>

        <!--
        <div class="fix-blink-temp"></div>
        -->

    </div>
</template>

<script>
export default {
    name: 'nav-primary',
}
</script>

<style lang="scss" scoped>

</style>