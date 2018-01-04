<template>
   <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>

      <v-toolbar class="pink">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Applicants</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container fluid style="min-height: 0;" grid-list-lg>
        <section v-if="!$supply.Applicants.ready" class="loading">Loading...</section>
<!--
        <section v-for="applicant of $supply.Applicants.allApplicants" :key="applicant.id" class="applicants">
          <Applicant :firstName="applicant.firstName" :addressList="applicant.addressList" :jobHistory="applicant.jobHistory"></Applicant>
        </section> -->
      </v-container>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Applicant from "./Applicant";
// import { use } from "vue-supply";

export default {
  components: {
    Applicant
  },
  // mixins: [use("Applicants")]
};
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
