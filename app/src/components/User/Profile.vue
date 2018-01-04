<template>
  <div class="panel panel-default profile-area">
    <div class="panel-heading">
      <h3>Profile</h3>
    </div>
    <div class="panel-body">
      <img :src="profile.picture" class="avatar" alt="avatar">
      <div>
        <label>
          <i class="glyphicon glyphicon-user"></i> Nickname</label>
        <h3 class="nickname">{{ profile.nickname }}</h3>
      </div>
      <div>
        <label>
          <i class="glyphicon glyphicon-envelope"></i> Email</label>
        <h3 class="email">{{ profile.email }}</h3>
      </div>
      <div>
        <label>
          <i class="glyphicon glyphicon-envelope"></i> Roles</label>
        <h3 class="nickname">{{ profile.roles }}</h3>
      </div>
      <pre class="full-profile">{{ profile }}</pre>
    </div>
<button class="button-primary" type="submit" @click="logout">logout</button>


  </div>
</template>

<script>
var _auth = {}

  export default {

    props: ['auth'],
    data() {
      if (this.auth.userProfile) {
        console.log(this.auth)
        this.$nextTick(() => {
          this.profile = this.auth.userProfile
        })
      } else {
        this.auth.getProfile((err, profile) => {
          if (err) return console.log(err)
          this.profile = profile
        })
      }
      return {
        profile: {}
      }
    },
    methods: {

      logout: () => {
        this.getProf()

        //  var _this = this
        //  console.log(_auth)
        //  _auth.logout()
      },
getProf: () => {
 this.auth.getProfile((err, profile) => {
   if (err) return console.log(err)
   this.profile = profile

      })

      },

    created () {
      console.log(this.auth)
      _auth = this.auth
    }
  }
  }
</script>

<style>
  .profile-area img {
    max-width: 150px;
    margin-bottom: 20px;
  }

  .panel-body h3 {
    margin-top: 0;
  }

</style>

