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
                                    <button>HANDWHEEL SPINDLE</button>
                                    <button>COOLING TRACK</button>
                                    <button>AIRING SYSTEM</button>
                                    <button>AIR SHOWER</button>
                                    <button>EDGE GUIDE</button>
                                    <button>LUBRICATION</button>
                                    <button>TRACK SYSTEM</button>
                                    <button>HEAT EXCHANGER</button>
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
                                    <button>DRAT CHAIN LUBRICATION AUS</button>
                                    <button>SELANG COOLING TRACK BOCOR</button>
                                    <button>FILM LEPAS CLIP</button>
                                    <button>CHAIN TENSION MATI</button>
                                    <button>TEMPERATUR GEARBOX TINGGI</button>
                                    <button>TORSI TINGGI</button>
                                    <button>JALUR LUBRIKASI BOCOR/MAMPET</button>
                                    <button>FLOW AIRING KURANG</button>
                                </div>
                            </div>
                        </ion-accordion></ion-accordion-group>
                    <ion-accordion-group><ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>TDO Problem Proses</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <div class="accord-item">
                                    <button @click="router.push('/tdo-problem/cof-out-spec')">COF OUT SPEC</button>
                                    <button @click="router.push('/tdo-problem/break')">BREAK</button>
                                    <button @click="router.push('/tdo-problem/film-menciut')">FILM MENCIUT</button>
                                    <button @click="router.push('/tdo-problem/wax')">WAX</button>
                                    <button>KORUGASI</button>
                                    <button @click="router.push('/tdo-problem/k1-netral-zone')">K1 NETRAL ZONE</button>
                                    <button>GARIS PADA FILM</button>
                                    <button>SPOT OVAL</button>
                                    <button>FLATNESS</button>
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
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
} from '@ionic/vue';
import { AuthSession } from '@supabase/supabase-js';
import { logOut } from 'ionicons/icons'

export default defineComponent({
    name: 'TdoPage',
    components: {
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
    },
    setup() {
        console.log('from MdoTdoPage.vue')
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
  