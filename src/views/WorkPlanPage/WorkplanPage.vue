<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    Workplan
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <nav-button @click="router.push('/workplan/2021')" title="WORKPLAN 2021" />
                    <nav-button @click="router.push('/workplan/2022')" title="WORKPLAN 2022" />
                    <nav-button @click="router.push('/workplan/2023')" title="WORKPLAN 2023" />
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

.navigation {
    color: #000000;
    padding: 30px 10px;
    margin: 10px 15px;
    background-color: #CFE7F5;
    border-radius: 10px;
}

.home-menu {
    /* background-color: red; */
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.home-menu #logout-button {
    padding: 20px 5px;
    background-color: #0000;
    border-top: 1px solid #FFF;
    display: flex;
    font-size: 20px;
    column-gap: 8px;
}
</style>
  
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
// import supabase from '@/supabase'
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
import { NavButton } from '@/components';
import { AuthSession } from '@supabase/supabase-js';
import { logOut } from 'ionicons/icons'

export default defineComponent({
    name: 'WorkplanPage',
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
        const router = useRouter()

        return {
            logOut,
            router
        }

    },
});
</script>
  