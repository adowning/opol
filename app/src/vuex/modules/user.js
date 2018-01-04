import * as types from '../mutation-types'

const state = {
  main: {
    name: 'Alexander Pierce',
    position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {
  [types.SET_CURRENT_USER] (state, user) {
    console.log(user)
    state.user.main = user
  }
}

export default {
  state,
  mutations
}
