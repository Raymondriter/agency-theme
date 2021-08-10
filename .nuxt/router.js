import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4bdeb0c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _465007f0 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _ca4e2a70 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _e4bdeb0c,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _465007f0,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _ca4e2a70,
    name: "contact___en"
  }, {
    path: "/de",
    component: _e4bdeb0c,
    name: "index___de"
  }, {
    path: "/id",
    component: _e4bdeb0c,
    name: "index___id"
  }, {
    path: "/pt",
    component: _e4bdeb0c,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _e4bdeb0c,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _465007f0,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _ca4e2a70,
    name: "contact___ar"
  }, {
    path: "/de/blank-page",
    component: _465007f0,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _ca4e2a70,
    name: "contact___de"
  }, {
    path: "/id/blank-page",
    component: _465007f0,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _ca4e2a70,
    name: "contact___id"
  }, {
    path: "/pt/blank-page",
    component: _465007f0,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _ca4e2a70,
    name: "contact___pt"
  }, {
    path: "/zh/blank-page",
    component: _465007f0,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _ca4e2a70,
    name: "contact___zh"
  }, {
    path: "/",
    component: _e4bdeb0c,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
