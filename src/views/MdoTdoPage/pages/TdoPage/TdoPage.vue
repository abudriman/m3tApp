<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="router.back()"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    TDO
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="main-content">
            <div class="main-grid">
                <section class="content">
                    <img src="@/assets/img/tdo-part-1.png" alt="">
                    <p>TDO (TRANVERSAL DIRECT ORIENTER) adalah mesin yang digunakan pada pabrik film plastik untuk
                        menarik / streching film searah tranversal

                    </p>
                    <ion-accordion-group>
                        <ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>TDO Parts</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="Oven System" @click="router.push('/tdo-parts/oven-system')" />
                                    <accord-nav-item text="Track System" @click="router.push('/')" />
                                </div>
                            </div>
                        </ion-accordion>
                    </ion-accordion-group>
                    <ion-accordion-group><ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>TDO Problem Mekanik</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="DRAT CHAIN LUBRICATION AUS" @click="router.push('/#')" />
                                    <accord-nav-item text="SELANG COOLING TRACK BOCOR" @click="router.push('/#')" />
                                    <accord-nav-item text="FILM LEPAS CLIP" @click="router.push('/#')" />
                                    <accord-nav-item text="CHAIN TENSION MATI" @click="router.push('/#')" />
                                    <accord-nav-item text="TEMPERATUR GEARBOX TINGGI" @click="router.push('/#')" />
                                    <accord-nav-item text="TORSI TINGGI" @click="router.push('/#')" />
                                    <accord-nav-item text="JALUR LUBRIKASI BOCOR/MAMPET" @click="router.push('/#')" />
                                    <accord-nav-item text="FLOW AIRING KURANG" @click="router.push('/#')" />

                                </div>
                            </div>
                        </ion-accordion></ion-accordion-group>
                    <ion-accordion-group><ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>TDO Problem Proses</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <accord-nav-item text="COF OUT SPEC"
                                        @click="router.push('/tdo-problem/cof-out-spec')" />
                                    <accord-nav-item text="BREAK" @click="router.push('/tdo-problem/break')" />
                                    <accord-nav-item text="FILM MENCIUT"
                                        @click="router.push('/tdo-problem/film-menciut')" />
                                    <accord-nav-item text="WAX" @click="router.push('/tdo-problem/wax')" />
                                    <accord-nav-item text="K1 NETRAL ZONE"
                                        @click="router.push('/tdo-problem/k1-netral-zone')" />
                                    <accord-nav-item text="GARIS PADA FILM"
                                        @click="router.push('/tdo-problem/garid-pada-film')" />
                                    <accord-nav-item text="SPOT OVAL" @click="router.push('/tdo-problem/spot-oval')" />

                                    <accord-nav-item text="FLATNESS" @click="router.push('/tdo-problem/flatness')" />
                                </div>
                            </div>
                        </ion-accordion></ion-accordion-group>

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

.accord-item>*:not(:last-child) {
    border-bottom: 1px solid #616161;
}
</style>
  
<script lang="ts" setup>
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

console.log('from MdoTdoPage.vue')
const route = useRoute()
const router = useRouter()
</script>
  