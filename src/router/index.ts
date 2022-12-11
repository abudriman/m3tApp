import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import * as views from '../views'
import { App, URLOpenListenerEvent } from '@capacitor/app';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: views.LoginPage
  },
  {
    path: '/home',
    component: views.HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

App.addListener('appUrlOpen', function (event: URLOpenListenerEvent) {
  // Example url: https://beerswift.app/tabs/tabs2
  // slug = /tabs/tabs2
  const slug = event.url.split('.top').pop();
  console.log(slug)

  // We only push to the route if there is a slug present
  if (slug) {
    console.log('im called')
    router.replace({
      path: slug,
    });
  }
});

export default router
