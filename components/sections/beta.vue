<template>
    <section id="beta-section">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell medium-6 large-3" id="beta-notify">
                    <h2>Lights are still being installed</h2>
                    <p>Some in-dev features are disabled because they are incomplete, or obviously still in development
                        and may not be working as intended.<br><br> <i>Enter beta mode to get a sneak peak on what I'm
                            working on!</i></p>
                    <button class="button" id="joinBeta" onclick="joinBeta()">Enter beta</button>

                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'beta',
}
</script>

<style lang="scss" scoped>

</style>