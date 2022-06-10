<!--
Footer:
==
Its a fucking footer lol
-->
<template>
<footer>
    <Container>
        <GridX>
            <div class="cell medium-6 large-3 ftr-fst">
                <div class="footer-widget other-pages">
                    <h5>Other Pages</h5>
                    <ul>
                        <li><a href="/faq">Frequently asked Questions</a></li>
                        <li><a href="https://web.archive.org/web/20181127191854/https://mechetle.ml/">Time Travel</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/order-progress">Order Progress</a></li>
                        <li><a href="https://mache.mechetle.com">Mechetle Mache</a></li>
                    </ul>
                </div>
                <div class="show-for-medium">
                    <p class="footer-note">
                        Website by Mechetle.<br>
                        Steven B-M Nguyen<br>
                        &copy; <span class="year"></span> Mechetle
                    </p>
                </div>
            </div>
            <div class="cell medium-6 large-3">
                <div class="footer-widget">
                    <h5>Social Media</h5>
                    <ul>
                        <li><a  href="#discordtag" 
                                class="discordmodaltoggle"
                                @click="discord_modal = !discord_modal"
                                ><i
                                    class="fab fa-discord"></i>Discord</a></li>
                        <li><a href="https://www.instagram.com/mechetle/"><i
                                    class="fab fa-instagram"></i>Instagram</a></li>
                        <li><a href="https://www.youtube.com/Mechetle"><i class="fab fa-youtube"></i>YouTube</a>
                        </li>
                        <li><a href="https://twitter.com/mechetle"><i class="fab fa-twitter"></i>Twitter</a></li>


                    </ul>

                    <button class="button small-button" id="leaveBeta" onclick="leaveBeta()">Leave Beta</button>

                </div>
            </div>

            <div class="small-12 show-for-small-only">
                <p class="footer-note">
                    Website by Mechetle.<br>
                    Stevenn B-M Nguyen<br>
                    &copy; <span class="year"></span> Mechetle
                </p>
                    <div id="last-modified"></div>  
            </div>
        </GridX>

    </Container>

    <template v-if="discord_modal">
        <DiscordModal/>
    </template>
</footer>

<div class="nortification-pullup">
    <p id="nortification_details"></p>
</div>

</template>

<script>
import DiscordModal from "./discord-modal.vue";
import GridX from "../grid/grid-x.vue";
import Container from "../grid/container.vue";
function loadScript(url) {
		let externalScript = document.createElement('script');
		externalScript.setAttribute("src", url);
		document.querySelector('body').appendChild(externalScript)
}
export default {
    name: 'footer-m',

    components: {
        DiscordModal,
        GridX,
        Container
    },

    data() {
        return {
            // todo: transform this data to a prop in the discord modal 
            //       & and have the modal emit what is.
            discord_modal: false,
        }
    },

    mounted() {
		loadScript("/js/mechetle-core.js")
		//loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
		loadScript("/js/mechetle-core-animations.js")
    }
}
</script>

<style lang="scss" scoped>

</style>