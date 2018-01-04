<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <!-- <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol> -->
    </section>

    <section class="content">
      <transition name="page" mode="out-in">
        <router-view
        :auth="auth"
        :authenticated="authenticated"
        :admin="admin">
      </router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import AuthService from './auth/AuthService'

export default {
  name: 'va-content-wrap',
props: ['auth', 'authenticated', 'admin'],

}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
