"use strict"
/* jshint -W097 */
/* globals require, module */

const winston = require("winston"),
    firebase = require("firebase"),
    q = require("q")

/**
 * Syncs data with Firebase
 * @param {FirebaseChannelConfig} config configuration for the channel
 * @constructor
 */
function FirebaseChannel(config) {
    var app, db

    function initialise() {}

    this.connect = function() {
        winston.info(
                "Authenticating with " +
                config.databaseURL +
                " and " +
                config.serviceAccount
            )
            // app = firebase.initializeApp({
            //     serviceAccount: config.serviceAccount,
            //     databaseURL: config.databaseURL
            // })
        app = firebase.initializeApp({
            apiKey: "AIzaSyBEOwXK3CiV6ASIS66a7vicIbfHqAaLt1w",
            databaseURL: "https://andrews-test.firebaseio.com/",
            authDomain: "andrews-test.firebaseapp.com",
            storageBucket: "gs://andrews-test.appspot.com"
        })
        db = app.database()
        return q()
    }

    this.accept = function(topic, message) {
        console.log(topic)
        var ref = db.ref("owntracks")
            // console.log(JSON.parse(message))
        var pmessage = JSON.parse(message)
            // console.log(pmessage)
        pmessage.time = new Date().getTime()
        var plocation = {}
        plocation.lat = pmessage.lat
        plocation.lng = pmessage.lon
        pmessage.location = plocation
        pmessage.tablet = topic
            // console.log(plocation)
            // console.log(pmessage)
            // ref.set(pmessage)
        ref.push(pmessage)
    }
    initialise()
}
module.exports = FirebaseChannel