import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditGarage from '@/components/EditGarage'
import ViewGarage from '@/components/ViewGarage'
import NewGarage from '@/components/NewGarage'
import Page   from '@/components/Page'
import Requests from '@/components/Requests'
import ViewRequests from '@/components/ViewRequests'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    {
      path: '/page',
      name: 'edit-page',
      component: Page
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/:question_id',
      name: 'view-requests',
      component: ViewRequests
    }
  ]
})
