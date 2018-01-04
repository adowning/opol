// // /**
// //  * Subscribes and listens to the Real Time stream of all messages happening in a Rocket.Chat Channel/Room
// //  *
// //  * Written by John Szaszvari <jszaszvari@gmail.com>
// //  * Git Repo:  https://github.com/jszaszvari/rocketchat-ddp-listener
// //  *
// //  */
// // import { Events } from 'quasar'

// // //Fill out the 4 variables below

// // //Address of the Rocket.Chat server you want to connect to
// var server = 'http://45.32.201.57'

// // //Port of the Rocket.Chat server.
// var serverPort = 3000

// // //authToken that we got from the Rocket.Chat API
// var authToken = 'Xna5VZdIFPzwyALclKh8m8sDD-U5VSf1HdRu59f2tDN'

// // //The _id of the channel or group you want to listen too. See the README
// // var subscribe = 'GENERAL'

// // // import VueNativeSock from 'vue-native-websocket'
// // // import Vue from 'vue'

// // // Vue.use(VueNativeSock, 'ws://vultr.ashdevtools.com:3000/websocket', {
// // //     reconnection: true, // (Boolean) whether to reconnect automatically (false)
// // //     reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
// // //     reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
// // // })
// // // var connect = {
// // //         msg: 'connect',
// // //         version: '1',
// // //         support: ['1']
// // //     }
// // //     // Vue.prototype.$socket.send({
// // //     //     msg: 'connect',
// // //     //     version: '1',
// // //     //     support: ['1']
// // //     // })

// // // // Vue.prototype.$socket.sendObj({ connect })
// // // var ddpClient;
// // // var sub = {
// // //     msg: 'sub',
// // //     id: '3sDmbQHAezmcKsuLm',
// // //     name: 'the-stream',
// // //     params: ['event', false]
// // // }

// // // // Vue.prototype.$socket.send({
// // // //     msg: 'sub',
// // // //     id: '3sDmbQHAezmcKsuLm',
// // // //     name: 'GENERAL',
// // // //     params: ['event', false]
// // // // })

// // // // Vue.prototype.$socket.sendObj({ sub })

// // // Vue.prototype.$socket.onmessage = (data) => console.log(data)
// /* es-lint disable */
// // var token
// var subscribe
// // //End of user defined variables

// var DDP = require('ddp')
// var login = require('ddp-login')
// process.env.METEOR_TOKEN = authToken

// const ddpClient = new DDP({
//   host: server,
//   port: serverPort,
//   maintainCollections: true
// })

// ddpClient.connect(function (err) {
//   if (err) throw err

//   login(
//     ddpClient, {
//       env: 'METEOR_TOKEN',
//       method: 'token',
//       retry: 5
//     },

//     function (error, userInfo) {
//       console.log(userInfo)
//       if (error) {
//         // Something went wrong...
//       } else {
//         // We are now logged in, with userInfo.token as our session auth token.
//         // var token = userInfo.token
//         console.log('Authentication Sucessful.\n')

//         // Subscribe to a message stream from a channel or group
//         console.log('Attempting to subscribe to the Group/Channel now.\n')
//         ddpClient.subscribe(
//           'stream-room-messages', [subscribe, false],
//           function () {
//             console.log(ddpClient.collections)
//             console.log('Subscription Complete.\n')

//             // Display the stream on console so we can see its working
//             console.log('\nStarting live-stream of messages.:\n')
//             ddpClient.on('message', function (msg) {
//               console.log('Subscription Msg: ' + msg)
//             })
//           }
//         )
//       }
//     }
//   )
// })

// export default ddpClient
