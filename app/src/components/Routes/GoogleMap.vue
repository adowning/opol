<template>
    <gmap-map
	  :center="center"
	  :zoom="12"

	>
	  <!-- <gmap-marker
		:key="index"
		v-for="(m, index) in markers"
		:position="m.position"
		:clickable="true"
		:draggable="true"
		@click="center=m.position"
	  ></gmap-marker> -->
      <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :opened="m.ifw2" :clickable="true" >
			<gmap-info-window :opened="m.ifw">{{m.ifw2text}}</gmap-info-window>
      			</gmap-marker>

	</gmap-map>
  </template>

<script>
  </script>
<!--
// import Faye from 'faye'import VueSocketio from 'vue-socket.io';
import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:5001');

export default {
    data () {
      return {
        center: {
           lat: 32.317723032,
        lng: -95.248990095
      },
			markers: [{marker:{lat: "123"}}],
			ifw2: false,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -25
        }
      }
      }
    },
    methods: {

     subscribe () {

      console.log('x')

      pusher.subscribe('my-channel')
      console.log('subbede')
      pusher.bind('my-event', data => {
        console.log(data.message)
        let marker = new google.maps.Marker({
          position: data.message,
          title: 'Hello World!'
        });
        this.markers.push(marker)
        // this.mockReviews.unshift(data.message)
      })
    },
    addMarker: function(message) {
      if (message.alert) {
        EventBus.$emit("alerts", message.alert);
      } else {
        for (var i = 0; i < this.markers.length; i++) {
          if (this.markers[i].label == message.currentLocationPoint.deviceid) {
            this.markers.splice(i, 1);
            break;
          }
        }

        this.infoWindowPos = {
          lat: message.currentLocationPoint.lat,
          lng: message.currentLocationPoint.lng
        };
        this.infoContent = message.currentLocationPoint.assigned_to_user_name;
        this.markers.push({
          position: {
            lat: message.currentLocationPoint.lat,
            lng: message.currentLocationPoint.lng
          },
          ifw2text: message.currentLocationPoint.assigned_to_user_name,
					label: message.currentLocationPoint.deviceid,
					ifw: true
        });
			}
			// console.log(this.markers.length)
    }
  },
  // sockets:{
  //   connect: function(){
  //     console.log('socket connected')
  //   },
  //   customEmit: function(val){
  //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //   }
  // },
  created () {
    // 32.317733032° 19' 3.84'' N
    // Longitude:-95.247890095° 14' 52.40'' W
    var client = new Faye.Client("http://localhost:3000/");
    var onMessage = function(message) {};
    client.subscribe("/mapUpdates", this.addMarker);
    this.mapAlerts = this.alerts;
    console.log('ready')
    this.subscribe()
  }
    }

  //   mounted () {
  //   // Configure Faye client.
  //   this.socket = new Faye.Client('http://localhost:3000/faye', {
  //     timeout: 20
  //   })

  //   // Publish a simple message to '/foo'.
  //   this.socket.publish('/foo', {text: 'Hi there'})

  //   // Subscribe to'/channelServer' for incoming message.
  //   this.socket.subscribe('/channelServer', function(data) {
  //     // this.messages.push(data)
  //     console.log(data)
  //     // console.log(this.messages)
  //   }.bind(this))

  //   console.log('mounted')
  // },
  // async asyncData () {
  //   return {
  //     inputMessage: '',
  //     messages: ['hello']
  //   }
  // },
  // head () {
  //   return {
  //     title: 'Chat'
  //   }
  // },
  // methods: {
  //   submitMessage() {
  //     // Publish submitted message to '/channelClient'.
  //     this.socket.publish('/channelClient', this.inputMessage)
  //     this.inputMessage = ''
  //   }
  // },

	// 	ready () {

	// 	},
	// 	methods: {

	// }
-->
