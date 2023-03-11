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
            <ion-refresher :pullMin="120" slot="fixed" @ionRefresh="onRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
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
    margin: 10px 15px;
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
import { defineComponent, } from 'vue';
import { useRouter } from 'vue-router';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonRefresher,
    IonRefresherContent
    // IonIcon
} from '@ionic/vue';
import { logOut, home } from 'ionicons/icons'
import { IonRefresherCustomEvent, RefresherEventDetail } from '@ionic/core';

export default defineComponent({
    name: 'RefreshablePage',
    props: {
        pageTitle: String,
        onRefresh: {
            type: Function,
            default: (event: IonRefresherCustomEvent<RefresherEventDetail>) => {
                console.log('do nothing')
                setTimeout(() => {
                    event.target.complete()
                }, 2000);
            }
        },
    },
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonRefresher,
        IonRefresherContent
        // IonIcon
    },
    setup() {
        const router = useRouter()
        const icons = {
            logOut,
            home
        }

        return {
            ...icons,
            router,
        }

    },
});
</script>
