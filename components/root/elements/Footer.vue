<template>
  <footer>
    <section class="top">
      <footer-info />
      <footer-account-control />
      <extras />
    </section>
    <section class="copyright">
      <copyright />
    </section>
  </footer>
</template>

<script>
import FooterInfo from '../components/FooterInfo'
import FooterAccountControl from '../components/FooterAccountControl'
import Extras from '../components/Extras'
import Copyright from '../components/Copyright'
export default {
  name: 'Footer',
  components: { Copyright, Extras, FooterAccountControl, FooterInfo }
}
</script>

<style scoped lang="scss">
  footer{
    display: flex;
    flex-flow: column;
    background: #181c3c;
    padding: 0 15px;
    .top, .copyright{
      display: flex;
    }
  }
</style>
