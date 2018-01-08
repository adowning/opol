<template>
   <!-- <section v-if="!$supply.Applicants.ready" class="loading">Loading...</section> -->
<div>

        <section v-for="applicant of employeeList" :key="applicant.user_id" class="applicant">
          <Applicant :firstName="applicant.name" :email="applicant.email" :picture="applicant.picture" :nickname="applicant.nickname"></Applicant>
        </section>

</div>
</template>

<script>
import Applicant from "./Applicant"
// import { use } from "vue-supply";

export default {
  components: {
    Applicant
  },
  computed: {
    employeeList: function() {
      return this.$employeeList
    }
  }
}
</script>

<style>
.scroller {
  margin: 0;
  padding: 0;
}
.scroller .item {
  height: 40;
}
</style>
