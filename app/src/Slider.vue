<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- <template v-if="currentUser.profile"> -->
      <template>
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="profile.picture" class="img-circle" alt="User Image">
          <ul>           <li class="user-footer">
                <div class="pull-left">
                 <router-link :to="'profile'" class="btn btn-default btn-flat">Profile</router-link>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat" @click="logout()">Sign out</a>
                </div>
              </li>
            </ul>
        </div>
        <div class="pull-left info">
          <p>{{ profile.name }}</p>
          <!-- <a href="#"><i class="fa sign-out" :style="`color:${currentUser.state.color}`"></i></a> -->

          <!-- <a href="#"><i class="fa fa-circle" :style="`color:${currentUser.state.color}`"></i> {{ currentUser.state.name }}</a> -->
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <va-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </va-slide-item>
      </ul>
      </template>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from "vuex"
import VASlideItem from "./components/VASlideItem"
import AuthService from "./auth/AuthService"

export default {
  name: "va-slider",
  props: ["slideMenuItems", "auth"],

  data() {
    this.auth.getProfile((err, profile) => {
      if (err) {
        console.log("got error no profile")
        // this.router.push("/signin")
      } else {
        console.log(profile)
        this.profile = profile
      }
    })
    return {
      profile: {}
    }
  },

  created() {
    // console.log(
    //   this.auth.getProfile((err, profile) => {
    //     console.log(err + profile)
    //   })
    // )
  },
  methods: {
    login() {
      this.$parent.login()
    },
    logout() {
      this.$parent.logout()
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  components: {
    "va-slide-item": VASlideItem
  }
}
</script>
