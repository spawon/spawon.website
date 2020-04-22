<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input id="email" type="email" value="test">
      </label>
      <label for="password">
        <input id="password" type="password" value="test">
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  methods: {
    async postLogin () {
      try {
        await this.$store.dispatch('login', { login: 'login', password: 'pass' })
        if (this.$store.state.auth) {
          this.$router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
