<template>
  <div style="width: 100%; height: 2000px; background: #2c3060;" />
</template>

<script>

export default {
  layout: 'index',
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
