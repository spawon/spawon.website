<template>
  <section>
    <search />
    <account />
    <card />
  </section>
</template>

<script>
import Search from './top-controls/Search'
import Account from '~/components/root/components/top-controls/Account'
import Card from '~/components/root/components/top-controls/Card'

export default {
  name: 'TopControls',
  components: { Card, Account, Search }
}
</script>

<style scoped lang="scss">
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
