<template>
  <div class="copyrights">
    @Copyrights
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .copyrights {
    display: flex;
    width: 100%;
    padding: 1em;
    background: rgb(37, 37, 37) radial-gradient(circle at 50% 0, rgba(93, 93, 93, 0.65), rgba(111, 111, 111, 0.35));
    box-shadow:
      inset rgba(0,0,0,.6) 0 -3px 8px,
      inset rgba(252,255,255,.7) 0 3px 8px,
      rgba(0,0,0,.8) 0 3px 8px -3px;
    color: whitesmoke;
    margin-top: auto;
  }
</style>
