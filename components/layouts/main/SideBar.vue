<template>
  <div class="side-bar" :class="{active: sidebar}">
    <div class="test" />
    {{ sidebar }}
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    sidebar: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .side-bar{
    width: 300px;
    height: 100%;
    position: relative;
    top: 0;
    left: -300px;
    background: #000000 radial-gradient(circle at 50% 0, rgba(193, 193, 193, 0.65), rgba(128, 128, 128, 0.35));
    box-shadow: inset rgba(0, 0, 0, 0.6) 0 -3px 8px, inset rgba(252, 255, 255, 0.7) -7px 0px 15px -4px, rgba(0, 0, 0, 0.8) 2px 2px 15px -3px;
    overflow-y: auto;
    transition: left .3s ease-in-out, max-width .5s ease;
    z-index: -1;
    max-width: 0;
  }
  .active{
    left: 0;
    z-index: 10;
    max-width: 100%;
  }
</style>
