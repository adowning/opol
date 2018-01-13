<!-- main app component -->
<template>
  <div class="layout-padding row justify-center" style="padding-right: 44px;">

    <div class="doc-container">

      <!-- <div class="doc-container"> -->
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->

      <div class="row">

        <div class="col-sm-12">

     <div class="box box-primary">
            <div class="box-body box-profile">
          <google-map></google-map>
</div>
</div>
        </div>

        <!-- <div class="col-sm-3">

          <q-toolbar >
        <q-btn flat>
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Activity List
        </q-toolbar-title>
        <q-btn flat>
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar> 

          <chat></chat>

        </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import GoogleMap from "../GoogleMap"
import Chat from "../Chat"
import axios from "axios"
// var vehicleList = []
// import { RotateSquare2 } from "vue-loading-spinner"
var axez = axios.create({
  baseURL: "https://andrewscleaning.ezofficeinventory.com",
  params: {
    token: "2bed7e881106945b9e838d6141e019a8"
  }
})

export default {
  name: "LiveView",
  data() {
    return {
      ratingLabels: ["ancur", "jelek", "pas", "oke", "mantab"],
      ratingFilter: [0, 1, 2, 3, 4],
      vehicleList: []
    }
  },
  firebase() {
    return {
      markers: this.$db.ref("owntracks")
    }
  },
  methods: {
    addRandomMarker() {
      this.$db.ref("markers").push({
        position: {
          lat: -1.243668 + Math.random(),
          lng: 116.8519 + Math.random()
        },
        meta: {
          name: "marker " + (this.markers.length + 1),
          rating: parseInt(Math.random() * 100) % 5,
          created_date: `${new Date()}`
        }
      })
      this.ratingFilter.reverse().reverse()
    },
    deleteMarker() {
      if (this.markers.length === 0) {
        alert("tidak ada marker")
        return
      }
      this.$db
        .ref("markers")
        .child(this.markers[0][".key"])
        .remove()
    },
    countTotalRating(rate) {
      if (this.markers === undefined) {
        return 0
      }

      return this.markers.filter(marker => marker.meta.rating === rate).length
    },
    checkVehicleList: function() {
      // log.info('checking list and adding drivers')
      var _this = this
      var vl = this.vehicleList
      return new Promise(function(resolve, reject) {
        axez
          .get("/assets/filter.api?status=checked_out&page=1")
          .then(function(response) {
            var assetList = response.data.assets
            for (var value of assetList) {
              if (value.group_id == "72657") {
                // log.info('adding ' + value.assigned_to_user_name + " device id " + value.identifier)
                vl.push(value)
              }
            }
            console.log("resolving ")
            console.log(vl)
            _this.vehicleList = vl / resolve(vl)
            // missing = []
          })
          .catch(function(error) {
            console.log("err " + error)
            reject(error)
          })
      })
    }
  },
  computed: {},
  components: {
    GoogleMap,
    Chat
  }
}
</script>

<style>
.main-content,
.card-content {
  padding: 16px;
}
.map-control {
  margin-bottom: 16px;
}
/* .flex-grid {
  display: flex;
} */
/* .col {
  flex: 1;
} */
/* #activity {
  max-width: 400px;
} */
</style>
