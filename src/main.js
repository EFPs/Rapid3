// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import store from './store/store'
import App from './App'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
// import Framework7Vue from 'framework7-vue'
Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7)
// Vue.use(VueOnsen)
// Vue.use(Framework7)
// Vue.use(Framework7Vue)

// Create Component for Home page
Vue.component('HomePage', {
  template: '<f7-page name="home"><HomePage/></f7-page>'
})
// Create Component for Menu page
Vue.component('MenuPage', {
  template: '<f7-page name="menu"><MenuPage/></f7-page>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  framework7: {
    // Array with app routes
    routes: [
      {
        path: '/home',
        component: 'HomePage'
      },
      {
        path: '/menu',
        component: 'MenuPage'
      }
    ],
    // App Name
    name: 'Rapid'
  },
  // App root data
  data: {
    // ....
  },
  // App root methods
  methods: {
    // ....
  }
})
