import supabase from '@/supabase';
import { Preferences } from '@capacitor/preferences';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { AuthSession } from '@supabase/supabase-js';
import { RouteRecordRaw } from 'vue-router';
import * as views from '../views'
import TDOPartsRoute from './TdoPart.router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: views.LoginPage,
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
  }, //TODO: split router
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
    path: '/condition-monitoring/oil-rantai',
    component: views.OliTdoDetailPage,
    children: []
  },
  {
    path: '/history-maintenance',
    component: views.HistoryMaintenancePage,
  },
  {
    path: '/history-maintenance/problem-npt',
    component: views.ProblemNptPage
  },
  {
    path: '/workplan',
    component: views.WorkplanPage,
  },
  { path: '/workplan/:year', component: views.WorkplanImagePage },
  {
    path: '/capex',
    component: views.CapexPage
  },
  {
    path: '/langkah-kerja',
    component: views.LangkahkerjaPage,
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
    path: '/tdo-problem/garid-pada-film',
    component: views.GarisPadaFilmPage
  },
  {
    path: '/tdo-problem/spot-oval',
    component: views.SpotOvalPage
  },
  {
    path: '/tdo-problem/flatness',
    component: views.FlatnessPage
  },
  {
    path: '/tdo-problem/cof-out-spec',
    component: views.CofOOSPage
  },
  {
    path: '/kamus-mdo-tdo/tdo',
    component: views.TdoPage
  },
  ...TDOPartsRoute
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  let isLoggedIn = false

  const { data, error } = await supabase.auth.getSession()
  if (data.session && !error) {
    isLoggedIn = true
  } else {
    const prefAccessToken = await Preferences.get({ key: 'access_token' })
    const prefRefreshToken = await Preferences.get({ key: 'refresh_token' })
    if (prefAccessToken.value !== null && prefRefreshToken.value !== null) {
      console.log('hydrate session from preferences')
      await supabase.auth.setSession({
        access_token: prefAccessToken.value,
        refresh_token: prefRefreshToken.value,
      })
      isLoggedIn = true
    } else {
      console.log('session & preferences not found')
    }
  }


  // console.log(from.path, to.path)
  if (isLoggedIn) {
    // console.log('logged in')
    if (to.path === '/') {
      return '/home'
    }
  } else {
    console.log('session not found')
    const query = to.query as unknown as AuthSession
    const hash = to.hash
    if (hash) {
      const parsedHash = new URLSearchParams(
        hash.substring(1) // skip the first char (#)
      );
      if (parsedHash.get('access_token') && parsedHash.get('refresh_token')) {
        await Preferences.set({
          key: 'access_token',
          value: parsedHash.get('access_token') ?? '',
        });
        await Preferences.set({
          key: 'refresh_token',
          value: parsedHash.get('refresh_token') ?? '',
        });
        await supabase.auth.setSession({
          access_token: parsedHash.get('access_token') ?? '',
          refresh_token: parsedHash.get('refresh_token') ?? '',
        })
        console.log('hash available, set preferences & session')
        return
      }
    }
    if (query?.access_token) {
      await Preferences.set({
        key: 'access_token',
        value: query.access_token,
      });
      await Preferences.set({
        key: 'refresh_token',
        value: query.refresh_token,
      });
      await supabase.auth.setSession({
        access_token: query.access_token,
        refresh_token: query.refresh_token,
      })
      console.log('query available, set preferences & session')
    }
    if (to.path !== '/') {
      return '/'
    }
  }

})

export default router
