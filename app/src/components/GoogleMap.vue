<template>
  <div>
    <gmap-map :center="center" :zoom="9">
      <gmap-marker v-for="marker in latestMarkers" :key="marker.id" :position.sync="marker.location" :clickable="true" :draggable="false" @click="onMarkerClick(marker)">
        <gmap-info-window :opened="true">{{marker.tablet}}</gmap-info-window>
      </gmap-marker>
    </gmap-map>
    <q-btn icon="create" @click="getLatest">New item</q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {
        lat: 32.243668,
        lng: -95.8519
      }
    }
  },
  firebase() {
    return {
      markers: this.$db.ref('owntracks').limitToLast(1000)
    }
  },
  computed: {
    latestMarkers: function() {
      var tabList = []
      var marker = {}
      this.markers.sort(function(x, y) {
        return y.time - x.time
      })
      for (marker of this.markers) {
        // var index = findWithAttr(tabList, 'tablet', marker.tablet)
        var index = tabList
          .map(function(e) {
            return e.tablet
          })
          .indexOf(marker.tablet)

        if (index == -1) {
          tabList.push(marker)
        }
      }
      console.log(tabList.length)
      for (var x of tabList) {
        console.log(x.tablet)
        console.log(x.time)
      }
      return tabList
    }
  },
  methods: {
    onMarkerClick(marker) {
      console.log(marker)
    },
    getLatest() {
      var tabList = []
      var marker = {}
      function findWithAttr(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i][attr] === value) {
            return i
          }
        }
        return -1
      }
      this.markers.sort(function(x, y) {
        return y.time - x.time
      })
      for (marker of this.markers) {
        // var index = findWithAttr(tabList, 'tablet', marker.tablet)
        var index = tabList
          .map(function(e) {
            return e.tablet
          })
          .indexOf(marker.tablet)
        if (index == -1) {
          tabList.push(marker)
        }
      }

      for (var x of tabList) {
        console.log(x.tablet)
        console.log(x.time)
      }
    }
  }
}
</script>

<style>
.vue-map-container {
  width: 100%;
  float: left;
  height: 600px;
  display: block;
}
</style>
