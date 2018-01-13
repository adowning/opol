<template>
   <!-- <section v-if="!$supply.Applicants.ready" class="loading">Loading...</section> -->
<div>

        <section v-for="applicant of employeeList" :key="applicant.user_id" >
          <Applicant :position="applicant.user_metadata.position" :email="applicant.email" :picture="applicant.picture" :name="applicant.name"></Applicant>
        </section>

</div>
</template>

<script>
import Applicant from "./Applicant"
import axios from "axios"
import AuthService from "../../auth/AuthService"
const auth = new AuthService()
export default {
data() {
  return {
    employeeList: []
  }
},
  components: {
    Applicant
  },
  // methods: {
  //   getEmployeeList() {
  //     // var _this = this
  //     axios
  //       .get("https://andrews-group.auth0.com/api/v2/users", {
  //         headers: {
  //           authorization:
  //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik0wVXpOVGd5UWpZeU5UZzBRa1U1UlRCQ05VUTVNMEl3TmtZeVFUbEdRVFF6TkRrME0wSkZOdyJ9.eyJpc3MiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tLyIsInN1YiI6ImVVQXBoQTJ1Z1BQMmFmRnlLZlo2RWRPUHY2V1BRaUkxQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MTU1OTAwMjgsImV4cCI6MTUyNDIzMDAyOCwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.eopNGhQlmoA8FZrfTDjJmW_xc2FqejM6cCcT7Hn0BkrHL0o3uJxUTDcAVv7pzpKyqMV_qbA5vFkyQi_kl4Z_rFMywHQAGJTSHExl3we8iR7J1UIsTyhhg8gxDVExWSh7Lv4fAjrJ4sK3Xq-ZW-kAsXA6q54olwast1gE-4sy1hdg0vW7JrHbi7t3k3pcrcw_s4CEXiGCYeGYqGDsXJzqwPSvofEbOxVJKIpCYVrk-sqpj5eiex2n8jtEGpAvDctGNb0qUBGJxPTBJ-Djzukx7ku-SBHLOz7Isa72WeYGsBSbcPO416jc6sQLpwWFnz1ut73F-ryfKKK3nx_8qm1BIA"
  //         }
  //       })
  //       .then(response => {
  //         console.log(response.data)
  //       // this.employeeList.push(response.data)
  //        return response.data
  //          this.employeeList = response.data
  //       })
  //       .catch(e => {
  //         console.log(e)
  //       })
  //   }
  // },
  // computed: {
  //   employeeList () {
  //     this.getEmployeeList()
  //     // get: function() {
  //     //   return this.employeeList
  //     // },
  //     // set: function() {
  //     //   this.employeeList = this.getEmployeeList()
  //     // }
  //   },
    created() {
      // this.employeeList = this.employeeList()
  axios
        .get("https://andrews-group.auth0.com/api/v2/users", {
          headers: {
            authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik0wVXpOVGd5UWpZeU5UZzBRa1U1UlRCQ05VUTVNMEl3TmtZeVFUbEdRVFF6TkRrME0wSkZOdyJ9.eyJpc3MiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tLyIsInN1YiI6ImVVQXBoQTJ1Z1BQMmFmRnlLZlo2RWRPUHY2V1BRaUkxQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MTU1OTAwMjgsImV4cCI6MTUyNDIzMDAyOCwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.eopNGhQlmoA8FZrfTDjJmW_xc2FqejM6cCcT7Hn0BkrHL0o3uJxUTDcAVv7pzpKyqMV_qbA5vFkyQi_kl4Z_rFMywHQAGJTSHExl3we8iR7J1UIsTyhhg8gxDVExWSh7Lv4fAjrJ4sK3Xq-ZW-kAsXA6q54olwast1gE-4sy1hdg0vW7JrHbi7t3k3pcrcw_s4CEXiGCYeGYqGDsXJzqwPSvofEbOxVJKIpCYVrk-sqpj5eiex2n8jtEGpAvDctGNb0qUBGJxPTBJ-Djzukx7ku-SBHLOz7Isa72WeYGsBSbcPO416jc6sQLpwWFnz1ut73F-ryfKKK3nx_8qm1BIA"
          }
        })
        .then(response => {
          console.log(response.data)
        // this.employeeList.push(response.data)
        //  return response.data
           this.employeeList = response.data
        })
        .catch(e => {
          console.log(e)
        })
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
