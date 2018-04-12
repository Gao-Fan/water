import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Daytrip from '@/pages/daytrip'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/daytrip/:id',
      name: 'Daytrip',
      component: Daytrip,
      props: true
    }, {
      path: '/city/',
      name: 'City',
      component: City
    }
  ]
})
