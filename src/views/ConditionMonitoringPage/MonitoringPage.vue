<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    Condition Monitoring
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <nav-button title="POMPA" @click="router.push('/condition-monitoring/pompa')" />
                    <nav-button title="HEAT EXCHANGER" @click="router.push('/condition-monitoring/heat-exchanger')" />
                    <nav-button title="OLI RANTAI TDO" @click="router.push('/condition-monitoring/oli-rantai-tdo')" />
                    <nav-button title="KONDENSATE REJECT" />
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
import { defineComponent, } from 'vue';
import { useRouter } from 'vue-router';
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
        const router = useRouter()

        return {
            router
        }

    },
});
</script>
  