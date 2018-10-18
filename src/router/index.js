import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '@/components/login'
import Home from '@/components/home'
import Mhsidebar from '@/components/menhu'
import Zhaoshang from '@/components/zhaoshang'
import {Coworkers, Mhgl} from '@/components/content/menhu'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'MyLogin',
      component: MyLogin
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/menhu',
      component: Home,
      children: [
        {
          path: '/menhu',
          name: 'Mhsidebar',
          components: {
            'leftrouter': Mhsidebar,
            'rightrouter': Coworkers
          }
        },
        {
          path: '/zhaoshang',
          name: 'Zhaoshang',
          components: {'leftrouter': Zhaoshang}
        },
        {
          path: '/coworkers',
          name: 'Coworkers',
          components: {
            'leftrouter': Mhsidebar,
            'rightrouter': Coworkers
          }
        },
        {
          path: '/mhgl',
          name: 'Mhgl',
          components: {
            'rightrouter': Mhgl,
            'leftrouter': Mhsidebar
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('token') === null) {
    if (to.path === '/') {
      next(true)
    } else {
      next(false)
    }
  } else {
    next(true)
  }
})
export default router
