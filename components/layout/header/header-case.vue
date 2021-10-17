<!--
Case study portfolio page header:
=================================
This is only used when according to the
database the work has a case study.

Title : H1
Type : <template v-if="type == motion">  {header w/ video}  </template>
Type : <template v-if="type == brand">  {header w/o video}  </template>
bg_img : Image in the background
video: Video in the video container if type == 'video'
-->
<template>
  
</template>

<script>
export default {
    name: 'header-case',
    props: {
       title: String,
       type: String,
       bg_img: String,
       video: String,
    },

}
</script>

<style lang="scss" scoped>

</style>