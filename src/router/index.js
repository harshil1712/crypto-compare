import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import HomeWorld from '@/components/HelloWorld'
import Eth from '@/components/eth'
 
Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeWorld
    },
    {
        path: '/eth',
        name: 'eth',
        component: Eth
      }
  ]
})