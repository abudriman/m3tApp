<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif
}
</style>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup() {
    const router = useRouter();
    App.addListener('appUrlOpen', function (event: URLOpenListenerEvent) {
      const slug = event.url.split('.top').pop();
      console.log(slug)
      if (slug) {
        console.log('im called')
        router.replace(slug);
      }
    });
  }
});
</script>