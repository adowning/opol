import * as firebase from 'firebase'

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUserUp({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            console.log(payload.data)
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    const newUser = { id: user.uid, displayName: "adsf" }
                    console.log(payload.data.picture)
                    console.log(payload.data.picture.thumbnail)
                    user
                        .updateProfile({
                            displayName: 'Jane Q. User',
                            id: user.uid,
                            metadata: payload.data,
                            email: user.email,
                            photoURL: payload.data.picture.thumbnail,
                            phoneNumber: payload.data.phone
                        })
                        .then(function() {
                            // Profile updated successfully!
                            // "Jane Q. User"
                            var displayName = user.displayName
                                // "https://example.com/jane-q-user/profile.jpg"
                            var photoURL = user.photoURL
                        }, function(error) {
                            // An error happened.
                            console.log(error)
                        })
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        signUserIn({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })

        },
        signUserInGoogle({ commit }) {
            commit('setLoading', true)
            commit('clearError')
            firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    console.log(newUser)
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        signUserInFacebook({ commit }) {
            commit('setLoading', true)
            commit('clearError')
            firebase
                .auth()
                .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        signUserInGithub({ commit }) {
            commit('setLoading', true)
            commit('clearError')
            firebase
                .auth()
                .signInWithPopup(new firebase.auth.GithubAuthProvider())
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        signUserInTwitter({ commit }) {
            commit('setLoading', true)
            commit('clearError')
            firebase
                .auth()
                .signInWithPopup(new firebase.auth.TwitterAuthProvider())
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    commit('setUser', newUser)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        autoSignIn({ commit }, payload) {
            commit('setUser', {
                id: payload.uid,
                name: payload.displayName,
                email: payload.email,
                photoUrl: payload.photoURL
            })
        },
        logout({ commit }) {
            firebase.auth().signOut()
            commit('setUser', null)
        }
    },
    getters: {
        user(state) {
          if(state.user)
            return state.user
            else{
              console.log('asdf')
              return "not_available"
            }
        }
    }
}
