<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    Pompa
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <nav-button title="POMPA HCU MDO LINE 6" />
                    <nav-button title="POMPA HCU MDO LINE 7" />
                    <nav-button title="POMPA BOOSTER LINE 6" />
                    <nav-button title="POMPA BOOSTER LINE 7" />
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
</style>
  
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import supabase from '@/supabase'
import { useRoute, useRouter } from 'vue-router';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton
} from '@ionic/vue';
import { AuthSession } from '@supabase/supabase-js';
import { logOut } from 'ionicons/icons'
import { NavButton } from '@/components';

export default defineComponent({
    name: 'TeamPage',
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        NavButton
    },
    setup() {
        console.log('from TeamPage.vue')
        const route = useRoute()
        const router = useRouter()
        const onLogout = async () => {
            console.log('logging out')
            const error = await supabase.auth.signOut()
            console.log(error.error)
            if (!(error.error)) {
                router.replace('/')
            }
        }

        onMounted(async () => {
            const query = route.query as unknown as AuthSession
            if (query?.access_token) {
                supabase.auth.setSession({
                    access_token: query.access_token,
                    refresh_token: query.refresh_token,
                })
            } else {
                const { data, error } = await supabase.auth.getSession()
                console.log(data)
                if (data.session && !error) {
                    return
                } else {
                    router.replace('/')
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
  