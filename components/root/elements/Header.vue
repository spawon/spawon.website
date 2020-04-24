<template>
  <header :class="{fixed}">
    <logo />
    <top-nav-bar />
    <top-controls />
  </header>
</template>

<script>
import Logo from '../components/Logo'
import TopNavBar from '../components/TopNavBar'
import TopControls from '../components/TopControls'
export default {
  name: 'Header',
  components: { TopControls, TopNavBar, Logo },
  data () {
    return {
      scrollCount: 0
    }
  },
  computed: {
    fixed () {
      return this.scrollCount >= 100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrolling)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    scrolling () {
      this.scrollCount = pageYOffset
    }
  }
}
</script>

<style scoped lang="scss">
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background: rgba(24, 28, 60, 0.7);
    padding: 0 124px;
    transition: all 3s ease-in-out;
  }
  .fixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    -moz-box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    animation: show-head 0.7s;
    left: 0;
    right: 0;
    background: #181c3c;
    height: 50px;

  }

  @keyframes show-head {
    0%{
      visibility: hidden;
      opacity: 0;
    }
    100%{
      visibility: visible;
      opacity: 1;
      height: 50px;
    }
  }
</style>
