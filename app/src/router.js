import Vue from "vue"
import Router from "vue-router"
// const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from "./ContentWrap.vue"
import Login from "../"
/* login */
// const Login = _import('login/index');
import Dashboard from "./components/Dashboard/Dashboard"

/* dashboard */
// const dashboard = _import('dashboard/index');

/* error page */
// const Err404 = _import('404');

/* demo page */
// const Form = _import('page/form');
// const Table = _import('table/index');

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  { path: "/login", component: Login, hidden: true },
  // { path: '/404', component: Err404, hidden: true },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    name: "Dashboard",
    hidden: true,
    children: [{ path: "/", component: Dashboard }]
  }
]

export default new Router({
  hashbang: false,
  linkActiveClass: "active",
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'Example',
  //   icon: 'zujian',
  //   children: [
  //     { path: 'index', component: Form, name: 'Form', icon: 'zonghe' }
  //   ]
  // },
  // { path: '*', redirect: '/404', hidden: true }
]
