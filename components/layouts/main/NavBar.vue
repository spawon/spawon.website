<template>
  <div class="nav-bar">
    <div class="nav-icon">
      <NavIcon @active="(value)=>{$emit('sidebar', value)}" />
    </div>
  </div>
</template>

<script>
import NavIcon from '../../elements/NavIcon'
export default {
  name: 'NavBar',
  components: { NavIcon }
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    width: 100%;
    padding: 1em;
    background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
    box-shadow:
      inset rgba(0,0,0,.6) 0 -3px 8px,
      inset rgba(252,255,255,.7) 0 3px 8px,
      rgba(0,0,0,.8) 0 3px 8px -3px;
  }

</style>
