// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
    // ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
//TODO fix me later
// import Quasar from 'quasar'
import Quasar, * as All from 'quasar'

import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCsm1264u4iBvHrvuCmn5AbHBwD5i1pJ0Y'
    }
})

var config = {
    // apiKey: 'AIzaSyDzd8cHT470aqvcTFWggQVRqqVhoFvSyIk',
    // authDomain: 'vue-realtime-das-1486882747956.firebaseapp.com',
    // databaseURL: 'https://vue-realtime-das-1486882747956.firebaseio.com',
    // storageBucket: 'vue-realtime-das-1486882747956.appspot.com',
    // messagingSenderId: '759206729601'
    apiKey: 'AIzaSyBEOwXK3CiV6ASIS66a7vicIbfHqAaLt1w',
    databaseURL: 'https://andrews-test.firebaseio.com/',
    authDomain: 'andrews-test.firebaseapp.com',
    storageBucket: 'gs://andrews-test.appspot.com',
    messagingSenderId: '759206729601',
    projectId: 'andrews-test'
}
firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

Vue.config.productionTip = false

Vue.use(Quasar, {
        components: All,
        directives: All
    }) // Install Quasar Framework

if (__THEME === 'mat') {
    require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
    /* eslint-disable no-new */
    new Vue({
        el: '#q-app',
        router,
        render: h => h(require('./App').default)
    })
})