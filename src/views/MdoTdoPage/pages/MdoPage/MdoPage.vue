<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    MDO
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <img src="@/assets/img/mdo-part-1.png" alt="">
                    <p>MDO (MACHINE DIRECT ORIENTER) adalah mesin yang digunakan pada pabrik film plastik untuk menarik
                        / streching film searah jalannya mesin
                    </p>
                    <img src="@/assets/img/mdo-part-2.png" alt="">
                    <ion-accordion-group>
                        <ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>MDO Parts</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="NIP ROLL" @click="router.push('/mdo/niproll')" />
                                    <accord-nav-item text="DRAW GAP" @click="router.push('/mdo/draw-gap')" />
                                    <accord-nav-item text="HCU PUMP" @click="router.push('/mdo/hcu-pump')" />
                                    <accord-nav-item text="FEEDING CHAIN" @click="router.push('/mdo/feeding-chain')" />
                                    <accord-nav-item text="ROTARY JOINT" @click="router.push('/mdo/rotary-joint')" />
                                    <accord-nav-item text="PREHEATING CHROME ROLL"
                                        @click="router.push('/mdo/preheating-chrome-roll')" />
                                    <accord-nav-item text="PREHEATING TEFLON ROLL"
                                        @click="router.push('/mdo/preheating-teflon-roll')" />
                                    <accord-nav-item text="STRETCHING ROLL" @click="router.push('/mdo/stretching-roll')" />
                                    <accord-nav-item text="ANNEALING ROLL" @click="router.push('/mdo/annealing-roll')" />
                                    <accord-nav-item text="IDLE ROLL" @click="router.push('/mdo/idle-roll')" />
                                </div>
                            </div>
                        </ion-accordion>
                    </ion-accordion-group>
                    <ion-accordion-group>
                        <ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>MDO Problem Mekanik</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="CARDANT SHAFT KASAR" @click="router.push('/#')" />
                                    <accord-nav-item text="DRAW GAP MACET" @click="router.push('/#')" />
                                    <accord-nav-item text="ROLL UNBALANCE" @click="router.push('/#')" />
                                    <accord-nav-item text="BEARING ROLL KASAR" @click="router.push('/#')" />
                                    <accord-nav-item text="RANTAI FEEDING PUTUS" @click="router.push('/#')" />
                                    <accord-nav-item text="POMPA REMBER/KASAR" @click="router.push('/#')" />
                                    <accord-nav-item text="TEMPERATUR TIDAK TERCAPAI" @click="router.push('/#')" />
                                    <accord-nav-item text="ROTARY JOINT REMBES/GOYANG" @click="router.push('/#')" />

                                </div>
                            </div>
                        </ion-accordion>
                    </ion-accordion-group>
                    <ion-accordion-group>
                        <ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>MDO Problem Proses</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="FILM KOTOR" @click="router.push('/#')" />
                                    <accord-nav-item text="PROBLEM TEMPERATUR" @click="router.push('/#')" />
                                    <accord-nav-item text="FLEK PADA FILM" @click="router.push('/#')" />
                                    <accord-nav-item text="TALI FEEDING PUTUS" @click="router.push('/#')" />
                                    <accord-nav-item text="SPOT PADA FILM" @click="router.push('/#')" />
                                    <accord-nav-item text="SKRATCH PADA FILM" @click="router.push('/#')" />
                                    <accord-nav-item text="BREAK MDO" @click="router.push('/#')" />
                                    <accord-nav-item text="FILM BERGEL OMBANG" @click="router.push('/#')" />

                                </div>
                            </div>
                        </ion-accordion>
                    </ion-accordion-group>
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

.accord-item>*:not(:last-child) {
    border-bottom: 1px solid #616161;
}
</style>
  
<script lang="ts" setup>
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
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
} from '@ionic/vue';
import { AccordNavItem } from '@/components';
const route = useRoute()
const router = useRouter()
</script>
  