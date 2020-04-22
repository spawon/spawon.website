<template>
  <div class="container">
    <NavBar
      @sidebar="sidebarShow"
    />
    <div class="middle">
      <SideBar :sidebar="sidebar" />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/layouts/main/NavBar'
import Footer from '../components/layouts/main/Footer'
import SideBar from '../components/layouts/main/SideBar'
export default {
  name: 'Main',
  components: { Footer, NavBar, SideBar },
  data () {
    return {
      sidebar: false
    }
  },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  },
  methods: {
    sidebarShow (val) {
      this.sidebar = val
    }
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }
  .middle{
    display: flex;
    flex: 1 0 auto;
    align-items: stretch;
    width: 100%;
    height: 86%;
  }
</style>
