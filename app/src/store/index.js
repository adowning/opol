import Vue from 'vue'
import Vuex from 'vuex'

import shared from './shared'
import user from './user'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }
  },
  modules: {
    user: user,
    shared: shared

  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message) {
      state.message = message
    }
    // mutations for reconnect methods
    // [ws.WS_RECONNECT](state, count) {
    //     console.info(state, count)
    // },
    // [ws.WS_RECONNECT_ERROR](state) {
    //     state.socket.reconnectError = true;
    // },
  }
})
