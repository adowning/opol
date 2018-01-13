// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
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
// import vueKanban from "vue-kanban"
// import Vuetable from 'vuetable-2'
// Vue.use(Vuetable)

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
var config2 = {
    apiKey: "AIzaSyBEOwXK3CiV6ASIS66a7vicIbfHqAaLt1w",
    databaseURL: "https://andrews-test-workshop.firebaseio.com/",
    authDomain: "andrews-test.firebaseapp.com",
    // storageBucket: "gs://andrews-test.appspot.com",
    messagingSenderId: "759206729601",
    projectId: "andrews-test"
}


var workshop = firebase.initializeApp(config2, "workshop")
Vue.prototype.$workshop = workshop
Vue.prototype.$db = firebase.database()
Vue.prototype.$dbworkshop = workshop.database()

var token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4Zjg1MzAzNDlhMDhlNzAwODYyYzcwNDM5OTRjMDhhNTBlMWI2NGE0ZWYxNjA0NjM3ZjcwNjc4Y2QyYjViMmQyM2NmNTU0NzExYmMwNTg5In0.eyJhdWQiOiIxIiwianRpIjoiNjhmODUzMDM0OWEwOGU3MDA4NjJjNzA0Mzk5NGMwOGE1MGUxYjY0YTRlZjE2MDQ2MzdmNzA2NzhjZDJiNWIyZDIzY2Y1NTQ3MTFiYzA1ODkiLCJpYXQiOjE1MTQ1MzE4OTYsIm5iZiI6MTUxNDUzMTg5NiwiZXhwIjoxNTQ2MDY3ODk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyzpV0D-KkEcmPwTXXnCYkSbvKlqCBYDZMBgzNQvRz9ydgygOVEX8RcRigEjtAIYD4vquok1aq3SmHm_4ZNuOyux82sZt6HiucBJCWzZhWJ1t5sEeMuQaWB2hDxQEu8HbS-xRYl4df94BP_vJM-v-FfKCJ3x-QZaY6Srmu9m8hzZWGfG-U7jbBDxDV1RFMyD6506i0B1Z-cTrBBSY4q0V4Ke6JF7LYzX_sm3KoV6NOEjGqKtNqWwOOfCXfdwgsBV3GUCZCRDBdBXQSACBN8cUl5syalP9tIIuZ4Zzzcxff-4WzuEWwkQL5gYSX5bESG59NmEDFyGI7dmZXt9ytHOsQZGy0bOgRJkNtqAID1F-0TXduMr0pJzszRtVawqqrVWQ2oS2UvI8JKzv4F5c7m9A6l3G9i3CnWT5wgN8QLNsh0D7PlrmRQQl5P8D4WjxfHsvyKn7cp4oH605Rupbx6UG-TsFR4RoNQQ4xJW6zeNnIEOtPTFftJNNIxQnt4JDh2v8fd5hbg0MkDHjt-nflVvf53KfPnLR_gSqvyBZzmKXWAz8zbH_ISWLY7cywvmzA5qYtdr-UDetU7-KEwiSbVZH-FY4GYBlcDR4C35nC9CO1z_e8x-0p4WBjvDNYO7Q3UWt7U8EsnAXHGIKcNWO38zFJo0VHqgUCW7zBtwiPCAA5o"

// var token2 = 'SDMFmc5rIfmm4DYkQvv7jVkn7VqQoVRldlE970Cq'
Vue.prototype.$snipeit = axios.create({
    // baseURL: "http://ramnode1.ashdevtools.com:8080/api/v1/",
    baseURL: "http://ramnode1.ashdevtools.com:8080/api/v1/",
    timeout: 1000,
    headers: {
        Authorization: "Bearer " +     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4Zjg1MzAzNDlhMDhlNzAwODYyYzcwNDM5OTRjMDhhNTBlMWI2NGE0ZWYxNjA0NjM3ZjcwNjc4Y2QyYjViMmQyM2NmNTU0NzExYmMwNTg5In0.eyJhdWQiOiIxIiwianRpIjoiNjhmODUzMDM0OWEwOGU3MDA4NjJjNzA0Mzk5NGMwOGE1MGUxYjY0YTRlZjE2MDQ2MzdmNzA2NzhjZDJiNWIyZDIzY2Y1NTQ3MTFiYzA1ODkiLCJpYXQiOjE1MTQ1MzE4OTYsIm5iZiI6MTUxNDUzMTg5NiwiZXhwIjoxNTQ2MDY3ODk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyzpV0D-KkEcmPwTXXnCYkSbvKlqCBYDZMBgzNQvRz9ydgygOVEX8RcRigEjtAIYD4vquok1aq3SmHm_4ZNuOyux82sZt6HiucBJCWzZhWJ1t5sEeMuQaWB2hDxQEu8HbS-xRYl4df94BP_vJM-v-FfKCJ3x-QZaY6Srmu9m8hzZWGfG-U7jbBDxDV1RFMyD6506i0B1Z-cTrBBSY4q0V4Ke6JF7LYzX_sm3KoV6NOEjGqKtNqWwOOfCXfdwgsBV3GUCZCRDBdBXQSACBN8cUl5syalP9tIIuZ4Zzzcxff-4WzuEWwkQL5gYSX5bESG59NmEDFyGI7dmZXt9ytHOsQZGy0bOgRJkNtqAID1F-0TXduMr0pJzszRtVawqqrVWQ2oS2UvI8JKzv4F5c7m9A6l3G9i3CnWT5wgN8QLNsh0D7PlrmRQQl5P8D4WjxfHsvyKn7cp4oH605Rupbx6UG-TsFR4RoNQQ4xJW6zeNnIEOtPTFftJNNIxQnt4JDh2v8fd5hbg0MkDHjt-nflVvf53KfPnLR_gSqvyBZzmKXWAz8zbH_ISWLY7cywvmzA5qYtdr-UDetU7-KEwiSbVZH-FY4GYBlcDR4C35nC9CO1z_e8x-0p4WBjvDNYO7Q3UWt7U8EsnAXHGIKcNWO38zFJo0VHqgUCW7zBtwiPCAA5o",
        Accept: "application/json"
    }
})

// Vue.prototype.$auth0base = axios
//     .post("https://andrews-group.auth0.com/authorize?", {
//         headers: {
//             "content-type": "application/json"
//         },
//         data: '{"redirect_uri: "http://localhost:8081", "grant_type":"authorization_code",client_id":"eUAphA2ugPP2afFyKfZ6EdOPv6WPQiI1","client_secret":"MjqQCbJumF6jKhsfR6hWKtt5Mhexrg3cOxQ4gqS7TLe0mMZloJKX-8KjxkJpj6Is","audience":"https://andrews-group.auth0.com/api/v2/"}'
//     })
//     .then(response => {
//         console.log(response)
//             // return response
//     })
//     .catch(e => {
//         console.log(e)
//     })

// Vue.prototype.$auth0base = axios
//     .get("https://andrews-group.auth0.com/authorize?audience={API_AUDIENCE}&scope=offline_access&response_type=code&client_id=Z3wGIjCHCcko6y-iVcmAbwNT_XetWzPn&redirect_uri=http://localhost:8081&state={OPAQUE_VALUE}")


// Vue.prototype.$auth0token = Vue.prototype.$auth0base
//     .post("oauth/token/")
//     .then(response => {
//         console.log(response)
//         return response
//     })
//     .catch(e => {
//         console.log(e)
//     })


// Vue.prototype.$employeeListLookup = axios.create({
//         baseURL: "https://andrews-group.auth0.com/api/v2/",
//         timeout: 1000,

//         headers: {
//         }
//     })

// Vue.prototype.$employeeListLookup
//     .get("https://andrews-group.auth0.com/api/v2/users",{
//       headers: {authorization: 'Bearer YOUR_MGMT_API_ACCESS_TOKEN'}
//     }
//     .then(response => {
//         console.log(response)

//     })
//     .catch(e => {
//          this.errors.push(e)
//      })
//     // var rocketToken = ''
//     //     // var userId = ''

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
// Vue.use(vueKanban)

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