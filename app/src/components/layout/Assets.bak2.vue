
<template>
 <table>
        <tr v-for="item in assets" :key="item.category">
            <td>{{item.assigned_to}}</td>
            <td>{{item.category}}</td>
        </tr>
    </table>
</template>
<script>
// var assets
export default {
  name: "hardware",
  data() {
    return {
      assets: []
    }
  },
  // computed: {
  //   assets: function() {
  //     return this.$snipeit
  //       .get("hardware")
  //       .then(response => {
  //         console.log(response.data.rows)
  //        // this.assets = response.data.rows
  //       })
  //       .catch(e => {
  //        this.errors.push(e)
  //       })
  //   }
  // },
  created: {
    assets: function() {
      this.$snipeit
        .get("hardware")
        .then(response => {
          console.log(response.data.rows)
          this.assets = response.data.rows
        })
        .catch(e => {
         console.log(e)
        })
    }
  }
}
</script>
