<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    {{ pageTitle }}
                </ion-title>
                <ion-buttons slot="end">
                    <!-- <ion-icon slot="icon-only" :icon="home" @click="router.replace('/home')"></ion-icon> -->
                    <slot name="end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <slot></slot>
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
    /* background-color: white; */
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
    margin: 0 8%;
    text-align: left;
    overflow-x: hidden;
    max-width: 100%;
    box-sizing: border-box;
}

section.content p {
    text-align: left;
}

section.content>* {
    margin: 10px 0px;
}


.accord-item {
    display: flex;
    flex-direction: column;
}

.accord-item>button {
    padding: 20px;
    margin: 3px 0px;
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
    IonBackButton,
    // IonIcon
} from '@ionic/vue';
import { AuthSession } from '@supabase/supabase-js';
import { logOut, home } from 'ionicons/icons'

export default defineComponent({
    name: 'NiprollPage',
    props: {
        pageTitle: String
    },
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        // IonIcon
    },
    setup() {
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
        const icons = {
            logOut,
            home
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
            ...icons,
            onLogout,
            router,
        }

    },
});
</script>
