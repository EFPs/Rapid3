import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/HomePage'
import Landing from '@/components/MenuPage'
import Signin from '@/components/Register'

Vue.use(Router)

const AuthGuard = (to, from, next) => {
  if (auth.currentUser) {
    next()
  } else {
    next('/signin')
  }
}

// export default router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ],
  mode: 'history'
})
