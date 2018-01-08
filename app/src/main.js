// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
    // ==============================
    /* es-lint ignore*/
    // Uncomment the following lines if you need IE11/Edge support
    // require(`quasar/dist/quasar.ie`)
    // require(`quasar/dist/quasar.ie.${__THEME}.css`)
import "./lib/css"
import "./lib/script"
import "./lib/global"
import Vue from "vue"
import { Events } from "quasar"
import Quasar, * as All from "quasar"
import axios from "axios"
import router from "./router"
import * as VueGoogleMaps from "vue2-google-maps"
import VueFire from "vuefire"
import firebase from "firebase"
import VueEvents from "vue-event-handler"

import store from "./vuex/store"
Vue.use(VueFire)
Events.$on("app:error", error => console.log(error.source))
    // Vue.prototype.$mmu = user
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCsm1264u4iBvHrvuCmn5AbHBwD5i1pJ0Y"
    }
})

var config = {
    apiKey: "AIzaSyBEOwXK3CiV6ASIS66a7vicIbfHqAaLt1w",
    databaseURL: "https://andrews-test.firebaseio.com/",
    authDomain: "andrews-test.firebaseapp.com",
    storageBucket: "gs://andrews-test.appspot.com",
    messagingSenderId: "759206729601",
    projectId: "andrews-test"
}
firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

var token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4Zjg1MzAzNDlhMDhlNzAwODYyYzcwNDM5OTRjMDhhNTBlMWI2NGE0ZWYxNjA0NjM3ZjcwNjc4Y2QyYjViMmQyM2NmNTU0NzExYmMwNTg5In0.eyJhdWQiOiIxIiwianRpIjoiNjhmODUzMDM0OWEwOGU3MDA4NjJjNzA0Mzk5NGMwOGE1MGUxYjY0YTRlZjE2MDQ2MzdmNzA2NzhjZDJiNWIyZDIzY2Y1NTQ3MTFiYzA1ODkiLCJpYXQiOjE1MTQ1MzE4OTYsIm5iZiI6MTUxNDUzMTg5NiwiZXhwIjoxNTQ2MDY3ODk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyzpV0D-KkEcmPwTXXnCYkSbvKlqCBYDZMBgzNQvRz9ydgygOVEX8RcRigEjtAIYD4vquok1aq3SmHm_4ZNuOyux82sZt6HiucBJCWzZhWJ1t5sEeMuQaWB2hDxQEu8HbS-xRYl4df94BP_vJM-v-FfKCJ3x-QZaY6Srmu9m8hzZWGfG-U7jbBDxDV1RFMyD6506i0B1Z-cTrBBSY4q0V4Ke6JF7LYzX_sm3KoV6NOEjGqKtNqWwOOfCXfdwgsBV3GUCZCRDBdBXQSACBN8cUl5syalP9tIIuZ4Zzzcxff-4WzuEWwkQL5gYSX5bESG59NmEDFyGI7dmZXt9ytHOsQZGy0bOgRJkNtqAID1F-0TXduMr0pJzszRtVawqqrVWQ2oS2UvI8JKzv4F5c7m9A6l3G9i3CnWT5wgN8QLNsh0D7PlrmRQQl5P8D4WjxfHsvyKn7cp4oH605Rupbx6UG-TsFR4RoNQQ4xJW6zeNnIEOtPTFftJNNIxQnt4JDh2v8fd5hbg0MkDHjt-nflVvf53KfPnLR_gSqvyBZzmKXWAz8zbH_ISWLY7cywvmzA5qYtdr-UDetU7-KEwiSbVZH-FY4GYBlcDR4C35nC9CO1z_e8x-0p4WBjvDNYO7Q3UWt7U8EsnAXHGIKcNWO38zFJo0VHqgUCW7zBtwiPCAA5o"

// var token2 = 'SDMFmc5rIfmm4DYkQvv7jVkn7VqQoVRldlE970Cq'
Vue.prototype.$snipeit = axios.create({
    baseURL: "http://ramnode1.ashdevtools.com:8080/api/v1/",
    timeout: 1000,
    headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json"
    }
})

Vue.prototype.$employeeListLookup = axios.create({
    baseURL: "https://andrews-group.auth0.com/api/v2/",
    timeout: 1000,

    headers: {
        authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik0wVXpOVGd5UWpZeU5UZzBRa1U1UlRCQ05VUTVNMEl3TmtZeVFUbEdRVFF6TkRrME0wSkZOdyJ9.eyJpc3MiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tLyIsInN1YiI6ImVVQXBoQTJ1Z1BQMmFmRnlLZlo2RWRPUHY2V1BRaUkxQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FuZHJld3MtZ3JvdXAuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MTUzNjIzMTEsImV4cCI6MTUxNTQ0ODcxMSwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.bHKZNN5GZSY911fI5T82Hu9sk9hlkWIKKyfIhx7weLEbP2-BRELeowcupu9GOyL7kqtUWPkgB4jEvMlTqDiQX5xu6PhXa6VL_Al5G3NYHKN0LEEnKOeIjyN-yyABDO6MaTFlY1tq1RcUMjSrZIOapYTNHz-xLZVNIBZf_7jtBHDz6XoQT2Z7mv5B0abk9wUUK0k9AwfRq5l97gQX6ChcZs8J36U5EevxU0PaMZqgDWpNNMuItM6Ub87ZKs2gWUzQO8aVsOCqt5EYI__QJI9hu1R44cRoT3DyI3L8HBwM_WuP9ESY_xeqxzokxQ2lO_vPUap_X9IvvBkucbTtXZhzdg"
    }
})
Vue.prototype.$employeeListLookup
    .get("users?")
    .then(response => {
        console.log(response)
            // this.table = response.data.rows
            // done()
        Vue.prototype.$employeeList = response.data
    })
    .catch(e => {
        this.errors.push(e)
    })
    // var rocketToken = ''
    //     // var userId = ''

// if (rocketToken) {
//     Vue.prototype.$rocket = axios.create({
//         baseURL: 'http://vultr.ashdevtools.com:3000/api/v1/',
//         timeout: 1000,
//         headers: {
//             'Content-type': 'application/json',
//             'X-Auth-Token': rocketToken
//         }
//     })
// }

// axios({
//     method: 'post',
//     url: 'http://45.32.201.57:3000/api/v1/login/',
//     headers: { 'Content-Type': 'application/json' },
//     data: JSON.stringify({ username: 'ash', password: 'sugarlips42' })
// }).then(function(response) {
//     console.log(response.data)
//         // rocket_token = response.data.authToken
//         // rocket_userId = response.data.userId
//     axios({
//         method: 'get',
//         url: 'http://45.32.201.57:3000/api/v1/channels.list/',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'X-User-Id': '3sDmbQHAezmcKsuLm',
//             'X-Auth-Token': 'Xna5VZdIFPzwyALclKh8m8sDD-U5VSf1HdRu59f2tDN'
//         }
//     }).then(function(response) {
//         console.log(response)
//     })
// })

Vue.config.productionTip = false

Vue.use(Quasar, {
        components: All,
        directives: All
    }) // Install Quasar Framework

if (__THEME === "mat") {
    require("quasar-extras/roboto-font")
}
import "quasar-extras/material-icons"
import "quasar-extras/ionicons"
import "quasar-extras/fontawesome"
import "quasar-extras/animate"
// import { socket } from './lib/rocket'

Quasar.start(() => {
    new Vue({
        el: "#q-app",
        router,
        store,
        render: h => h(require("./App").default),
        created() {
            // firebase.auth().onAuthStateChanged(user => {
            //     console.log('auth state changed')
            //     if (user) {
            //         // this.$store.state.user = firebase.auth().currentUser
            //         console.log('user in main')
            //         console.log(user)
            //         this.$router.push('/')
            //     } else {
            //         console.log('no user in main')
            //         this.$store.state.user = null
            //         if (this.$route.path !== '/signin') {
            //             this.$router.push('/signin')
            //         }
            //     }
            // })
        }
    })
})