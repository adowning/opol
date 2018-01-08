<template>
  <div id="q-pp">
    <div class="wrapper">
      <va-navibar :auth="auth" :authenticated="authenticated" :admin="admin"></va-navibar>
<va-slider :auth="auth" :authenticated="authenticated" :admin="admin" :slideMenuItems="slideMenuItems"></va-slider>

      <va-content-wrap :auth="auth" :authenticated="authenticated" :admin="admin"></va-content-wrap>
    </div>
  </div>
</template>

  <!-- <div id="q-app">
    <app-layout></app-layout>
  </div> -->




<script>
import VANaviBar from "NaviBar.vue"
import VASlider from "Slider.vue"
import VAContentWrap from "ContentWrap.vue"
import store from "./vuex/store.js"
import slideMenuItems from "./lib/slideMenuItems.js"
import AuthService from "./auth/AuthService"
const auth = new AuthService()
import Vue from "vue"
const { login, logout, authenticated, admin, authNotifier } = auth

export default {
  name: "app",
  data() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated
      this.admin = authState.admin
    })

    return {
      auth,
      authenticated,
      admin,
      slideMenuItems: slideMenuItems
    }
  },
  methods: {
    login,
    logout
  },
  components: {
    "va-navibar": VANaviBar,
    "va-slider": VASlider,
    "va-content-wrap": VAContentWrap
  },
  store
}
</script>


<!--
// import Layout from './components/layout/Master'
// export default {
//   components: {
//     'app-layout': Layout
//  }, // return ( // // this.$store.getters.user !== null && // // this.$store.ge      // return (
//       //   // this.$store.getters.user !== null &&
//       //   // this.$store.getters.user !== undefined
//       // )tters.user !== undefined // )

//   computed: {
//     userIsAuthenticated () {
//       // return (
//       //   // this.$store.getters.user !== null &&
//       //   // this.$store.getters.user !== undefined
//       // )
//     }
//   },
//   methods: {
//     onLogout () {
//       this.$store.dispatch('logout')
//     }
//   }
// }
-->
