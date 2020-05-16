<template>
  <div style="width: 100%; height: 2000px; background: #2c3060;">
    <slider />
  </div>
</template>

<script>

import Slider from "~/components/elements/Slider";
export default {
  components: {Slider},
  layout: 'index',
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
