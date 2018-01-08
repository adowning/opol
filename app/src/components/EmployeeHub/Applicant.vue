<template>

<div  class="col-md-3">

          <div class="box box-primary">
            <div class="box-body box-profile">
              <img class="profile-user-img img-responsive img-circle" :src="picture" alt="User profile picture">

              <h3 class="profile-username text-center">{{nickname}}</h3>

              <p class="text-muted text-center">Position</p>

              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>Email</b> <a class="pull-right">{{email}}</a>
                </li>
                <li class="list-group-item">
                  <b>Status</b> <a class="pull-right">Hired</a>
                </li>
                <li class="list-group-item">
                  <b>Friends</b> <a class="pull-right">13,287</a>
                </li>
              </ul>

              <a href="#" class="btn btn-primary btn-block"><b>Edit</b></a>
            </div>
            <!-- /.box-body -->
          </div>
</div>

</template>

<script>
export default {
  props: ["firstName", "email", "picture", "nickname"],
  data: () => ({}),

  methods: {
    edit() {
      this.firstName += "*"
    }
  }
}
</script>
