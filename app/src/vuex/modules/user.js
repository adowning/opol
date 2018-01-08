import * as types from "../mutation-types"

const state = {
    main: {}
}

const mutations = {
    [types.SET_CURRENT_USER](state, user) {
        console.log(user)
        state.user.main = user
    }
}

export default {
    state,
    mutations
}