<template>
  <div>
    <gmap-map :center="center" :zoom="9">
      <gmap-marker v-for="marker in latestMarkers" :key="marker.id" :position.sync="marker.location" :clickable="true" :draggable="false" @click="onMarkerClick(marker)" @mouseover="statusText = marker.tablet" @mouseout="statusText = null">
        <gmap-info-window :opened="true">{{marker.assigned_to}}</gmap-info-window>
      </gmap-marker>
      <div slot="visible">
        <div style="bottom: 0; left: 0; background-color: #0000FF; color: white; position: absolute; z-index: 100">
          {{statusText}}
        </div>
      </div>
    </gmap-map>
    <!-- <q-btn icon="create" @click="getLatest">tablets</q-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {
        lat: 32.243668,
        lng: -95.8519
      },
      statusText: ''
    };
  },
  firebase() {
    return {
      markers: this.$db.ref('owntracks').limitToLast(1000),
      tabletsCheckedOut: this.$db
        .ref('checkedOutDevices')
        .orderByChild('category/id')
        .equalTo(1),
      vehiclesCheckedOut: this.$db
        .ref('checkedOutDevices')
        .orderByChild('category/id')
        .equalTo(2)
    };
  },
  computed: {
    latestMarkers: function () {
      var tabList = [];
      var marker = {};
      this.markers.sort(function (x, y) {
        return y.time - x.time;
      });
      for (marker of this.markers) {
        var index = tabList
          .map(function (e) {
            return e.tablet;
          })
          .indexOf(marker.tablet);

        if (index === -1) {
          tabList.push(marker);
        }
      }
      var _this = this;
      var obj = {};
      for (var tabletsReporting of tabList) {
        obj = _this.tabletsCheckedOut.find(function (obj) {
          return obj.asset_tag == tabletsReporting.tablet;
        });
        try {
          tabletsReporting.assigned_to = obj.assigned_to.name;
        } catch (e) {
          console.log(e);
        }
      }
      return tabList;
    }
  },
  methods: {
    onMarkerClick() {},
    getLatest() {}
  }
};
</script>

<style>
.vue-map-container {
  width: 100%;
  /* float: right; */
  height: 900px;
  display: flex;
}
</style>
