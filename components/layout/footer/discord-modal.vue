<!--
Discord modal:
==============
This is accessed when the "Discord"
link is pressed on the social media
card.
-->
<template>
    <div class="discordmodal m-modal">
        <div class="discordmodalwrap">
            <a href="#%" class="button discordmodaltoggle" title="close" onclick="ToggleDiscordModal()"><i class="fas fa-times"> </i></a>
            <div class="modal-body">
                <h4>Hey, here's my DiscordTag!</h4>
                <p>
                    Add me if you want.
                </p>
                <code>
                    Mechetle<small>#9677</small>
                </code>
            </div>
        </div>
        <a class="modal-bg" onclick="ToggleDiscordModal()"></a>
    </div>
</template>

<script>
export default {
    name: 'discord-modal',
}
</script>

<style lang="scss" scoped>

</style>
