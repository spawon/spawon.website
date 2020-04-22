<template>
  <div class="navicon-button" :class="{active}" @click="active = !active">
    <div class="navicon" />
  </div>
</template>

<script>
export default {
  name: 'NavIcon',
  data () {
    return {
      active: false
    }
  },
  watch: {
    active (value) {
      return this.$emit('active', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  $transition: .3s;
  $base: .5rem;
  $space: $base / 4;
  $color: rgb(37, 37, 37);

  .navicon-button {
    padding: $base*2; //2rem
    cursor: pointer;
    user-select: none;
    position: relative;
    z-index: 100;
    transition: $transition*1.324;
  }

  .navicon {
    width: $base;
    height: $base;
    background: $color;
    color: $color; /* Not in use when the colors are specified below */
    transition: $transition;
    box-shadow:
      -($base+$space) 0,
      -($base+$space) ($base+$space),
      $base+$space 0,
        ($base+$space) (-($base+$space)),
      0 0 -($base+$space),
      -($base+$space) 0 -($base+$space),
      0 ($base+$space),
        ($base+$space) ($base+$space);
  }

  .active.navicon-button {
    transform: scale3d(.8, .8, .8);
    margin-left: 250px;

    .navicon {
      box-shadow:
        -$base 0,
        0 0 transparent,
        $base 0,
        0 0 transparent,
        0 0 -$base,
        0 0 transparent,
        0 $base,
        0 0 transparent;
      transform: rotate3d(0,0,1,225deg)  scale3d(.8,.8,.8);
    }
  }
</style>
