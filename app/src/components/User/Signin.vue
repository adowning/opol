<template>
  <div class="layout-padding docs-input row justify-center">
    <form @submit.prevent="onSignin">
      <div class="row">
        <q-field icon="mail" label="Email" :error="error" error-label="Oops, we got an error.">
          <q-input v-model="email" type="email" />
        </q-field>
      </div>
      <div class="row">
        <q-field icon="password" label="Pass">
          <q-input type="password" v-model="password" />
        </q-field>
      </div>
      <div class="row">

        <q-btn type="submit" class="primary" :disabled="loading" :loading="loading">Sign In
          <span slot="loader" class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </q-btn>
      </div>
      <div class="text-xs-center">
        <q-btn round class="red" dark :disabled="loading" :loading="loading" @click.prevent="onSigninGoogle">Login with Google
          <q-icon right dark>lock_open</q-icon>
          <span slot="loader" class="custom-loader">
            <q-icon light>cached</q-icon>
          </span>
        </q-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user() {
      // return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  mounted () {

 console.log(this.$mmu)



  },
  watch: {
    // user(value) {
    //   if (value !== null && value !== undefined) {
    //     this.$router.push('/profile') // redirect to main page after user click submit btn
    //   }
    // }
  },
  methods: {
    onSignin() {
      // Vuex
      console.log(this.email)
      console.log(this.password)
      this.$store.dispatch('signUserIn', {
        email: this.email,
        password: this.password
      })
    },
    onSigninGoogle() {
      this.$store.dispatch('signUserInGoogle')
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="css">

</style>
