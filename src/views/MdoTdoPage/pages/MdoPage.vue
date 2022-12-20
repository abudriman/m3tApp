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
                                    <button>NIP ROLL</button>
                                    <button>DRAW GAP</button>
                                    <button>HCU PUMP</button>
                                    <button>FEEDING CHAIN</button>
                                    <button>PREHEATING ROLL</button>
                                    <button>STRECHING ROLL</button>
                                    <button>ANNEALING ROLL</button>
                                    <button>IDLE ROLL</button>
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
                                    <button>CARDANT SHAFT
                                        KASAR</button>
                                    <button>DRAW GAP MACET</button>
                                    <button>ROLL UNBALANCE</button>
                                    <button>BEARING ROLL
                                        KASAR</button>
                                    <button>RANTAI FEEDING
                                        PUTUS</button>
                                    <button>POMPA
                                        REMBER/KASAR</button>
                                    <button>TEMPERATUR TIDAK
                                        TERCAPAI</button>
                                    <button>ROTARY JOINT
                                        REMBES/GOYANG</button>
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
                                    <button>FILM KOTOR</button>
                                    <button>PROBLEM
                                        TEMPERATUR</button>
                                    <button>FLEK PADA FILM</button>
                                    <button>TALI FEEDING
                                        PUTUS</button>
                                    <button>SPOT PADA FILM</button>
                                    <button>SKRATCH PADA
                                        FILM</button>
                                    <button>BREAK MDO</button>
                                    <button>FILM BERGEL
                                        OMBANG</button>
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
    name: 'MdoPage',
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
  