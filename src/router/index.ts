import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import * as views from '../views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: views.LoginPage
  },
  {
    path: '/home',
    component: views.HomePage
  },
  {
    path: '/team',
    component: views.TeamPage
  },
  {
    path: '/condition-monitoring',
    component: views.MonitoringPage,
  },
  {
    path: '/condition-monitoring/pompa',
    component: views.PompaPage
  },
  {
    path: '/condition-monitoring/heat-exchanger',
    component: views.HeatExchangerPage
  },
  {
    path: '/condition-monitoring/oli-rantai-tdo',
    component: views.OliTdoPage
  },
  {
    path: '/history-maintenance',
    component: views.HistoryMaintenancePage
  },
  {
    path: '/workplan',
    component: views.WorkplanPage
  },
  {
    path: '/capex',
    component: views.CapexPage
  },
  {
    path: '/kamus-mdo-tdo',
    component: views.MdoTdoPage
  },
  {
    path: '/kamus-mdo-tdo/mdo',
    component: views.MdoPage
  },
  {
    path: '/kamus-mdo-tdo/tdo',
    component: views.TdoPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
