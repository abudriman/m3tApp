<template>
    <ion-page>
        <ion-menu content-id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-title>Hello</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div class="home-menu">
                    <div>
                        <p>M3T V.0.2 by Fauzan & Abud</p>
                    </div>
                    <button id="logout-button" @click="onLogout">
                        <ion-icon :icon="logOut"></ion-icon>
                        <span>Logout</span>
                    </button>
                </div>
            </ion-content>
        </ion-menu>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button :auto-hide="false"></ion-menu-button>
                </ion-buttons>
                <ion-title>
                    Home
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <nav-button @click="router.push('/team')" class="navigation" title="TEAM" />
                    <nav-button @click="router.push('/condition-monitoring')" class="navigation"
                        title="CONDITION MONITORING" />
                    <nav-button @click="router.push('/history-maintenance')" class="navigation"
                        title="HISTORY MAINTENANCE" />
                    <nav-button @click="router.push('/workplan')" class="navigation" title="WORKPLAN" />
                    <nav-button @click="router.push('/capex')" class="navigation" title="CAPEX" />
                    <nav-button @click="router.push('/kamus-mdo-tdo')" class="navigation" title="KAMUS MDO TDO" />
                </section>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
/* * {
    outline: 1px solid red;
} */

div.main-grid {
    /* background-color: red; */
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr;
}

section.content {
    /* background-color: blue; */
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}



.home-menu {
    /* background-color: red; */
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.home-menu #logout-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 5px;
    background-color: #0000;
    border-top: 1px solid #FFF;
    display: flex;
    font-size: 20px;
    column-gap: 8px;
}
</style>
  
<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import supabase from '../supabase'
import { useRoute, useRouter } from 'vue-router';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonMenu,
    IonIcon
} from '@ionic/vue';
import { NavButton } from '../components'
import { AuthSession } from '@supabase/supabase-js';
import { logOut } from 'ionicons/icons'
import { Preferences } from '@capacitor/preferences';

export default defineComponent({
    name: 'HomePage',
    components: {
        IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
        IonMenu,
        IonIcon,
        NavButton
    },
    setup() {
        console.log('from HomePage.vue')
        const router = useRouter()
        const onLogout = async () => {
            console.log('logging out')
            const error = await supabase.auth.signOut()
            await Preferences.clear()
            console.log(error.error)
            if (!(error.error)) {
                router.replace('/')
            }
        }

        onBeforeMount(async () => {
            console.log(
                'onMounted called'
            )
            const route = useRoute()
            const query = route.query as unknown as AuthSession
            const hash = route.hash
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
            } else {
                const prefAccessToken = await Preferences.get({ key: 'access_token' })
                const prefRefreshToken = await Preferences.get({ key: 'refresh_token' })
                const { data, error } = await supabase.auth.getSession()
                console.log(data)
                if (data.session && !error) {
                    return
                } else {
                    console.log(prefAccessToken.value)
                    console.log(prefRefreshToken.value)
                    if (prefAccessToken.value !== null && prefRefreshToken.value !== null) {
                        console.log('hydrate session from preferences')
                        await supabase.auth.setSession({
                            access_token: prefAccessToken.value,
                            refresh_token: prefRefreshToken.value,
                        })
                    } else {
                        console.log('session & preferences not found')
                        router.replace('/')
                    }
                }
            }

        })

        return {
            logOut,
            onLogout,
            router
        }

    },
});
</script>
  