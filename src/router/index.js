import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditGarage from '@/components/EditGarage'
import ViewGarage from '@/components/ViewGarage'
import NewGarage from '@/components/NewGarage'
import Requests   from '@/components/Requests'
import HelloWorld from '@/components/HelloWorld'
import ViewRequests   from '@/components/ViewRequests'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/',
      name: 'view-requests',
      component: ViewRequests
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-garage',
      component: NewGarage
    },
    {
      path: '/edit/:garage_id',
      name: 'edit-garage',
      component: EditGarage
    },
    {
      path: '/:garage_id',
      name: 'view-garage',
      component: ViewGarage
    },

  ]
})
