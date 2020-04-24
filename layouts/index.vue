<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/root/elements/Header'
import Footer from '../components/root/elements/Footer'
export default {
  components: { Footer, Header },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style>

</style>
