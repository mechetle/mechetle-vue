<template>
    <div class="nerdy-details">
        <b>Nerdy details:</b>
        <div class="nd-wrap">
            <div class="nd-row">
                <div class="nd-head">Dimensions:</div>
                <div class="nd-val"><span id="videoWidth">{{dimensions.x}}</span>x<span id="videoHeight">{{dimensions.y}}</span>px</div>
            </div>
            <div class="nd-row">
                <div class="nd-head">Exported:</div>
                <div class="nd-val">
                    <span v-for="el in exported">{{ el }}, </span>
                </div>
            </div>
            <div class="nd-row">
                <div class="nd-head">Client supplied:</div>
                <div class="nd-val">
                    <span v-for="el in supplied">{{ el }}, </span>
                </div>
            </div>
            <div class="nd-row">
                <div class="nd-head">Finished:</div>
                <div class="nd-val">{{ datefinished }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nerdyDetails',
    props: {
        dimensions: Object,
        exported: Array,
        supplied: Array,
        datefinished: String
    }
}
</script>

<style lang="scss" scoped>
.nerdy-details {
    background: #0b233d;
    color: #cfd8dc;
    padding: 3em;

    .nd-wrap {
        margin-block-start: 1em;
    }

    .nd-row {
        display: flex;
    }

    .nd-head {
        min-width: 9.5em;
    }

    .nd-val {
        flex-grow: 1;
    }
}

</style>