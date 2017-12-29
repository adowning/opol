<!-- main app component -->
<template>
  <div>

    <google-map></google-map>
    <!-- <marker-table></marker-table> -->
    <q-btn icon="create" @click="checkVehicleList">New ixtem</q-btn>

  </div>
</template>

<script>
import GoogleMap from '../GoogleMap'
import { Qbtn } from 'quasar'
// import MarkerTable from './components/MarkerTable'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
import axios from 'axios'
// var vehicleList = []
// import { RotateSquare2 } from "vue-loading-spinner"
var axez = axios.create({
  baseURL: 'https://andrewscleaning.ezofficeinventory.com',
  params: {
    token: '2bed7e881106945b9e838d6141e019a8'
  }
})

export default {
  name: 'LiveView',
  data() {
    return {
      ratingLabels: ['ancur', 'jelek', 'pas', 'oke', 'mantab'],
      ratingFilter: [0, 1, 2, 3, 4],
      vehicleList: []
    }
  },
  firebase() {
    return {
      markers: this.$db.ref('owntracks')
    }
  },
  methods: {
    addRandomMarker() {
      this.$db.ref('markers').push({
        position: {
          lat: -1.243668 + Math.random(),
          lng: 116.8519 + Math.random()
        },
        meta: {
          name: 'marker ' + (this.markers.length + 1),
          rating: parseInt(Math.random() * 100) % 5,
          created_date: `${new Date()}`
        }
      })
      this.ratingFilter.reverse().reverse()
    },
    deleteMarker() {
      if (this.markers.length === 0) {
        alert('tidak ada marker')
        return
      }
      this.$db
        .ref('markers')
        .child(this.markers[0]['.key'])
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
          .get('/assets/filter.api?status=checked_out&page=1')
          .then(function(response) {
            var assetList = response.data.assets
            for (var value of assetList) {
              if (value.group_id == '72657') {
                // log.info('adding ' + value.assigned_to_user_name + " device id " + value.identifier)
                vl.push(value)
              }
            }
            console.log('resolving ')
            console.log(vl)
            _this.vehicleList = vl / resolve(vl)
            // missing = []
          })
          .catch(function(error) {
            console.log('err ' + error)
            reject(error)
          })
      })
    }
  },
  computed: {
    // pieData() {
    //   return {
    //     labels: this.ratingLabels,
    //     datasets: [
    //       {
    //         backgroundColor: [
    //           '#FF6384',
    //           '#36A2EB',
    //           '#FFCE56',
    //           '#55FF56',
    //           '#33DD56'
    //         ],
    //         data: this.ratingFilter.map(rating => this.countTotalRating(rating))
    //       }
    //     ]
    //   }
    // },
    // barData() {
    //   return {
    //     labels: this.ratingLabels,
    //     datasets: [
    //       {
    //         label: 'Jumlah Rating',
    //         backgroundColor: '#36A2EB',
    //         data: this.ratingFilter.map(rating => this.countTotalRating(rating))
    //       }
    //     ]
    //   }
    // }
  },
  components: {
    GoogleMap
    // MarkerTable,
    // PieChart,
    // BarChart
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
</style>
