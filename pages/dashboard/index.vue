<template>
  <simplebar class="content" data-simplebar-auto-hide="true">
    sdffsdddddddddddddddddddddddddddddddddddddd
    sdffsdddddddddddddddddddddddddddddddddddddd
    sdffsdddddddddddddddddddddddddddddddddddddd
    <div class="size" />
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  layout: 'main',
  components: { simplebar },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  },
  mounted () {
    // document.documentElement.setAttribute('theme', 'dark')
  }

}
</script>

<style lang="scss" >
  .content{
    max-width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    height: 100%;
    transition: all .3s ease-in-out;
    padding: 25px;

  }
  .size{
    height: 1000px;
  }
</style>
