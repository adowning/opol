#!/usr/bin/env node

'use strict'
/* jshint -W097 */
/* globals require */
var //program = require('commander'),
//pkg = require('./package.json'),
    RootConfig = require('./lib/config/serviceconfig.js'),
    FirebaseChannelConfig = require('./lib/config/firebasechannelconfig.js'),
    Service = require('./lib/service.js')

var config = new RootConfig()
    // config.mqttURL = "mqtt://localhost:1884"
config.mqttURL = 'mqtt://localhost:1883'
    // config.mqttURL = "ws://localhost:1884"
config.query = 'owntracks/#'
config.channel = new FirebaseChannelConfig()
config.channel.databaseURL = 'https://andrews-test.firebaseio.com/'
    // config.channel.serviceAccount = require("./mqtt-db-sync.json")
config.channel.serviceAccount = 'ashdowning@gmail.com'

new Service(config)