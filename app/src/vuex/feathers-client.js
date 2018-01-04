// import 'babel-polyfill'
// import feathers from 'feathers'
// import hooks from 'feathers-hooks'
// import socketio from 'feathers-socketio'
// import auth from 'feathers-authentication-client'
// import io from 'socket.io-client'
// import feathersVuex from 'feathers-vuex'
// import store from '@/vuex/store'

// const socket = io('http://localhost:3030', {transports: ['websocket']})

// const feathersClient = feathers()
//   .configure(hooks())
//   .configure(socketio(socket))
//   .configure(auth({ storage: window.localStorage }))
// //   .configure(rx(RxJS, {idField: '_id'}))
//   .configure(feathersVuex(store, {
//     idField: '_id',
//     auth: {
//       userService: '/users'
//     }
//   }))

// feathersClient.service('/users')
// feathersClient.service('/messages')
// // feathersClient.service('/todos').vuex({idField: '_id'})
// // feathersClient.service('/deeply/nested/names')
// // feathersClient.service('/some/explicit/namespace').vuex({name: '/explicit/namespace'})

// export default feathersClient

const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const errors = require('feathers-errors'); // An object with all of the custom error types.
const auth = require('feathers-authentication-client');
const io = require('socket.io-client');

const socket = io('http://localhost:3030', {
  transports: ['websocket']
});

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(auth())

module.exports = feathersClient;