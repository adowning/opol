<template>
  <div>
    <q-toolbar>
      <q-btn flat v-go-back=" '/' ">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-toolbar-title>
        Register
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-view layout-padding">
      <!-- <q-field icon="face">
        <q-input v-model="credentials.name" placeholder="Your name" class="full-width" />
      </q-field> -->
      <q-field icon="mail">
        <q-input v-model="credentials.email" placeholder="Your email address" class="full-width" />
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="credentials.password" type="password" placeholder="Your password" class="full-width" />
      </q-field>
      <q-btn color="primary" class="full-width" @click="onSignup()">Register</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     credentials: {
          name: '',
          email: '',
          password: ''
        }
    }
  },
  computed: {
    comparePassword() {
      return this.password !== this.confirmPassword
        ? 'Password do not match'
        : ''
    },
    user() {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/') // redirect to main page after user click submit btn
      }
    }
  },
  methods: {
    onSignup() {
      var _this = this
      // Vuex
      $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    // console.log(data);
    var rdata = data.results[0]
    console.log(rdata.email)
     _this.$store.dispatch('signUserUp', {
        email: rdata.email,
        password: 'asdfasdf',
        data: rdata
      })
  }
});

    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="css">

</style>
