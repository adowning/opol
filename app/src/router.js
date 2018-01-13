import Vue from "vue"
import Router from "vue-router"
import VueResource from "vue-resource"
import Profile from "./components/User/Profile"
import Signin from "./components/User/Signin"
import Admin from "./components/Admin"
import Routes from "./components/Routes/Routes"
import Dashboard from "./components/Dashboard/Dashboard"
import Employees from "./components/EmployeeHub/Employees"
import Applicants from "./components/EmployeeHub/Applicants"
import AuthService from "./auth/AuthService"
import Chat from "./components/Chat/Chat"
import Callback from "./callback"
import LiveView from "./components/layout/LiveView.vue"
import Assets from "./components/layout/Assets"
import WorkShop from "./components/WorkShop/MyVuetable"
import AssetDetail from "./components/WorkShop/AssetDetail"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const auth = new AuthService()

export default new Router({
    routes: [{
            path: "/callback",
            name: "Callback",
            component: Callback
        },
        {
            path: "/assets",
            name: "Assets",
            component: Assets,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/routes",
            name: "Routes",
            component: Routes,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/workshop",
            name: "WorkShop",
            component: WorkShop,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
                {
            path: "/asset_detail/:id",
            name: "AssetDetail",
            component: AssetDetail,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/",
            name: "Dashboard",
            component: LiveView,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },

        {
            path: "/employees",
            name: "Employees",
            component: Employees,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/applicants",
            name: "Applicants",
            component: Applicants,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/chat",
            name: "Chat",
            component: Chat,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    next(false)
                } else {
                    next()
                }
            }
        },
        {
            path: "/admin",
            name: "Admin",
            component: Admin,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated() || !auth.isAdmin()) {
                    next(false)
                } else {
                    next()
                }
            }
        }
    ]
})

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
// import AuthService from './auth/AuthService'
// const auth = new AuthService()

// function load (component) {
//   // '@' is aliased to src/components
//   return () =>
//         import(`@/${component}.vue`)
// }
// // import AuthGuard from './auth-guard'
// import Profile from './components/User/Profile'
// export default new VueRouter({
//   /*
//      * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
//      * it is only to be used only for websites.
//      *
//      * If you decide to go with "history" mode, please also open /config/index.js
//      * and set "build.publicPath" to something other than an empty string.
//      * Example: '/' instead of current ''
//      *
//      * If switching back to default "hash" mode, don't forget to set the
//      * build publicPath back to '' so Cordova builds work again.
//      */

//   mode: 'hash',
//   // mode: 'hash',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: [
//     { path: '/', component: load('layout/Home'), },

//     { path: '/home', component: load('layout/Home'),      beforeEnter: (to, from, next) => {
//         if (!auth.isAuthenticated()) {
//           next(false)
//         } else {
//           next()
//         }
//       } },
//     { path: '/liveview', component: load('layout/LiveView'),      beforeEnter: (to, from, next) => {
//         if (!auth.isAuthenticated()) {
//           next(false)
//         } else {
//           next()
//         }
//       } },
//     { path: '/assets', component: load('layout/Assets') },
//     { path: '/signin', component: load('User/Signin') },
//     { path: '/signup', component: load('User/Signup') },
//     {
//       path: '/profile',
//       name: 'Profile',
//       component: Profile,
//       // beforeEnter: AuthGuard
//     },
//     {
//       path: '/hub',
//       component: load('layout/EmployeeHub')

//     },

//     { path: '*', component: load('Error404') } // Not found
//   ]
// })li