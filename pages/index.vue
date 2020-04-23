<template>
  <div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user }}
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret">
          secret page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">
        login
      </NuxtLink>.
    </p>
  </div>
</template>

<script>

export default {
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
