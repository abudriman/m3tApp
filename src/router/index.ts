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
    path: '/condition-monitoring/pompa-detail/:id',
    component: views.PompaDetailPage
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
    path: '/mdo/niproll',
    component: views.NiprollPage
  },
  {
    path: '/mdo/stretching-roll',
    component: views.StretchingRollPage
  },
  {
    path: '/mdo/preheating-chrome-roll',
    component: views.PreheatingRollPage
  },
  {
    path: '/mdo/preheating-teflon-roll',
    component: views.PreheatingTeflonRollPage
  },
  {
    path: '/mdo/annealing-roll',
    component: views.AnnealingRollPage
  },
  {
    path: '/mdo/idle-roll',
    component: views.IdleRollPage
  },
  {
    path: '/mdo/feeding-chain',
    component: views.FeedingChainPage
  },
  {
    path: '/mdo/hcu-pump',
    component: views.HcuPumpPage
  },
  {
    path: '/mdo/rotary-joint',
    component: views.RotaryJointPage
  },
  {
    path: '/mdo/draw-gap',
    component: views.DrawGapPage
  },
  {
    path: '/tdo-problem/break',
    component: views.BreakPage
  },
  {
    path: '/tdo-problem/film-menciut',
    component: views.FilmMenciutPage
  },
  {
    path: '/tdo-problem/wax',
    component: views.WaxPage
  },
  {
    path: '/tdo-problem/k1-netral-zone',
    component: views.K1NetralZonePage
  },
  {
    path: '/tdo-problem/cof-out-spec',
    component: views.CofOOSPage
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
