<template>
<div>
<div class="box box-success box-solid" style="height: 100%">
  <div class="box-header">
    <h3 class="box-title">Live Map</h3>
    <div class="box-tools">
      <div class="box-tools pull-left">
      	<span v-for="alert in alerts">
							<v-alert  color="warning" icon="info" v-model="alertbox">
								<h2>  {{alert.text}} </h2>
							</v-alert>
				</span>
      </div>
      <button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i class="fa fa-times"></i></button>
     <div class="box-tools pull-right">
      <button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i class="fa fa-minus"></i></button>
     </div>
    </div>
  </div>
    <div class="box-body" style="height: 800px;">
    <!-- <GoogleMap></GoogleMap> -->
  </div>
</div>
</div>
</template>

<script>

import GoogleMap from "./GoogleMap";

export default {
  components: {
     GoogleMap
  },
  data() {
    return {
      errors: [],
      res: [],
      alerts: [],
      alertbox: true
    };
  },
  created() {
      console.log('routes up')
  }
};
</script>
