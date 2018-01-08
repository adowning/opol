<template>
<dir>
  this is callback
</dir>
</template>
<script>
import { auth } from "./auth/AuthService"
export default {
  name: "",
  mounted() {
    this.$nextTick(() => {
      this.auth.setSession()
      window.location.href = "/"
    })
  }
}
</script>
