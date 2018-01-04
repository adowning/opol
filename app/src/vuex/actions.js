import * as types from "./mutation-types"
// import { services } from './api'
// import * as services from '../services'
// import { productsService } from "../services"
import users from "./modules/user"
export const fetchProduct = ({ commit }) => {
    // API request
    return productsService.products
        .getAll()
        .then(response => {
            console.log(response)
            commit(types.FETCH_PRODUCT, response.data)
        })
        .catch(error => {
            console.error(error)
        })
}

// import * as services from '../services'

export const fetchMessages = function({ dispatch }) {
    // Call the messages service on the server via websocket
    console.log("fetching msgs")
    services.messageService.find({}).then(messages => {
        console.log(messages.data)
        dispatch("FETCH_MESSAGES", messages.data)
    })
}

export const addMessage = function({ dispatch }) {
    // A new message has been created on the server, so dispatch a mutation to update our state/view
    services.messageService.on("created", message => {
        dispatch("ADD_MESSAGE", message)
    })
}

export const removeMessage = function({ dispatch }) {
    // A message has been removed from the server, so dispatch a mutation to update our state/view
    services.messageService.on("removed", message => {
        dispatch("REMOVE_MESSAGE", message)
    })
}
