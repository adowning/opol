import "../scss/global.scss"
import "../../node_modules/material-design-lite/dist/material.js"

import Vue from "vue"
import * as VueGoogleMaps from "vue2-google-maps"
console.log("howdy ho")
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCPsEEFceW4ey3xbpFf6b_Ab_n3yO77qkk",
        v: "3.27"
    }
})

import App from "./App.vue"

document.addEventListener("DOMContentLoaded", e => {
    const appEl = document.getElementById("app")

    new Vue({
        el: appEl,
        render: h => h(App)
    })

    appEl.style.display = null
})