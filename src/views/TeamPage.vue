<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    Team
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <div class="team-card">
                        <img src="@/assets/img/team/team1.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team2.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team3.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team4.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team5.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team6.png" alt="">
                    </div>
                    <div class="team-card">
                        <img src="@/assets/img/team/team7.png" alt="">
                    </div>
                </section>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
/* * {
outline: 1px solid red;
} */

.team-card img {
    width: 100%;
}

.team-card:not(:last-child) {
    margin-bottom: 20px;
}

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
    margin: 0 8%;
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
import supabase from '../supabase'
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
    },
    setup() {
        console.log('from TeamPage.vue')
        const router = useRouter()


        return {
            router
        }

    },
});
</script>
  