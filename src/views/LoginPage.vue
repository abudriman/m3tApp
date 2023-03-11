<template>
    <ion-page>
        <ion-content>
            <div class="main-grid">
                <section class="logo">
                    <div class="logo">
                        <img src="../assets/img/logo.png" alt="argha-logo" />
                    </div>
                </section>
                <section class="sign-in-button">
                    <button @click="signInWithGoogle">
                        <img src="../assets/img/google.png" class="google-logo" alt="google-logo">
                        <span>Continue with google</span>
                    </button>
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
    min-height: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
}

section.logo,
section.sign-in-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.logo img {
    height: 100%;
}


.sign-in-button button {
    padding: 16px;
    border-radius: 8px;
    color: black;
    font-size: medium;
    background-color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    border: 1px solid black;
}

.sign-in-button img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { logoGoogle } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';
import { IonPage, IonContent } from '@ionic/vue'
import supabase from '@/supabase';
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount } from 'vue'
import { Preferences } from '@capacitor/preferences';


async function signInWithGoogle() {
    const url = `${process.env.VUE_APP_SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${process.env.VUE_APP_REDIRECT_URL}/home`
    // await Browser.open({
    //     url: url
    // });
    supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.VUE_APP_REDIRECT_URL}/home`
        }
    })
}

export default defineComponent({
    name: 'LoginPage',
    components: { IonPage, IonContent, },

    setup() {
        onBeforeMount(async () => {
            const router = useRouter()
            const prefAccessToken = await Preferences.get({ key: 'access_token' })
            const prefRefreshToken = await Preferences.get({ key: 'refresh_token' })
            const { data, error } = await supabase.auth.getSession()
            if (data.session && !error) {
                router.push('/home')
                console.log('logged in')
            }
            if (prefAccessToken.value !== null && prefRefreshToken.value !== null) {
                console.log('hydrate session from preferences')
                await supabase.auth.setSession({
                    access_token: prefAccessToken.value,
                    refresh_token: prefRefreshToken.value,
                })
                router.push('/home')
            }
            console.log('session & preferences not found')
        })
        return {
            logoGoogle,
            signInWithGoogle
        }

    },
});
</script>
