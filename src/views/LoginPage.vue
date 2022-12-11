<template>
    <ion-page>
        <ion-content>
            <div class="main-grid">
                <section class="logo">
                    <div class="logo">
                        <img src="../assets/img/logo.png" alt=""/>
                    </div>
                </section>
                <section class="sign-in-button">
                    <div class="sign-in-button">
                    <button @click="signInWithGoogle">Continue with google</button>
                </div>
                </section>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
* {
    /* outline: 1px solid red; */
}

div.main-grid{
    min-height: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
}
section.logo, section.sign-in-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.logo img{
    height: 100%;
}


.sign-in-button button{
    padding: 16px;
    border-radius: 8px;
    color: black;
    font-size: medium;
    background-color: white;
    font-weight: 700;
}
</style>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { logoGoogle } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';

async function signInWithGoogle() {
    const url = `${process.env.VUE_APP_SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=capp://m3t.abud.top/home`
    await Browser.open({
        url: url
    });

    Browser.addListener('browserFinished', () => {
        console.log('anjing')
    })
    Browser.addListener('browserPageLoaded', () => {
        console.log('anjing2')
    })

}

export default defineComponent({
    name: 'LoginPage',
    setup() {
        console.log('from LoginPage.vue')
        return {
            logoGoogle,
            signInWithGoogle
        }

    },
});
</script>
  