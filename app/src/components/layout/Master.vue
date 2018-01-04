<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
    <q-toolbar slot="header">
      <!-- opens drawer below -->
      <!-- <button class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()"> -->
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Andrews Group
      </q-toolbar-title>
      <!-- <div id="top" v-if="user">asdf</div> -->
      <div v-if="user">
        <q-btn  color="primary" small @click="logOut">
  Logout
</q-btn>
      </div>
      <div v-else>
        <q-side-link item to="/signin" exact>
          <q-item-main>
            <q-item-tile label color="white">
              Signin
            </q-item-tile>
          </q-item-main>
        </q-side-link>
        <q-side-link item to="/signup" exact>
          <q-item-main>
            <q-item-tile label color="white">
              Signup
            </q-item-tile>
          </q-item-main>
        </q-side-link>
      </div>

    </q-toolbar>

    <div slot="left">
      <div id="profile" v-if="user">
        <img :src="user.photoURL" style='height: 80px' class="inline-block">
        <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"-->
        <div id="user-name">
          <span class="text-white"> {{user.displayName}} </span>
          <hr>
          <!-- <span class="text-blue"> {{ user.email }} </span> -->
          <!-- <hr> -->
        </div>
        <div id="user-actions">
          <button class="bordered blue small">
            <i>person</i>
          </button>
          <button class="bordered blue small">
            <i>lock</i>
          </button>
          <button class="bordered blue small" @click='logOut'>
            <i>exit_to_app</i>
          </button>
        </div>
      </div>
      <q-list no-border link inset-separator>

        <q-side-link item to="/liveview" exact>
          <q-item-main>
            <q-item-tile label>
              Live View
            </q-item-tile>
          </q-item-main>
        </q-side-link>
        <q-side-link item to="/assets" exact>
          <q-item-main>
            <q-item-tile label>
              Assets
            </q-item-tile>
          </q-item-main>
        </q-side-link>
        <q-side-link item to="/hub" exact>
          <q-item-main>
            <q-item-tile label>
              Employee Center
            </q-item-tile>
          </q-item-main>
        </q-side-link>
      </q-list>
      {{user}}
    </div>

    <!-- Right Side Panel -->
    <!-- <div slot="right">
      <p>Right Panel</p>
    </div> -->

    <router-view />

  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import firebase from 'firebase'

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QList,
  QBtn,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QList,
    QListHeader,
    QItem,
    QBtn,
    QItemSide,
    QItemMain
  },
  data() {
    return {
      user: {},
      photourl: "https://randomuser.me/api/portraits/thumb/men/83.jpg"

    }
  },
  computed: {
    // ...mapGetters(['user']),
    // user(){
    //   return this.$store.getters.user
    // }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logout')
      console.log('goodbye')
    }
  },
  created() {
          var vm = this

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
vm.user = user
}
        })
      }
            // firebase.auth().onAuthStateChanged(tuser => {
            //    this.$store.state.user = tuser
            // this.user = tuser
            // })
  }

</script>

<style scoped>
  .fixed-bottom {
    margin-bottom: 1%;
  }
  .fixed-bottom a img {
    width: 25px;
    height: 25px;
  }
  #avatar{
    padding: 20px;
  }
  #profile {
    height: 130px;
    background-color: #009688;
  }
  #user-name {
    left: 90px;
    bottom: 77px;
    position: relative;
    width: 159px;
  }
  #user-actions {
    left: 90px;
    bottom: 71px;
    position: relative;
    width: 171px;
  }
  #menu-collapse {
    margin-top: 5%;
  }
</style>
