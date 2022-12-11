<template>
    <ion-page>
        <ion-content>
            <div class="main-grid">
                <section class="content">
                    <p>this is homepage</p>
                </section>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
* {
    outline: 1px solid red;
}

div.main-grid{
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr;
}
section.content {
    display: flex;
    align-items: center;
}
</style>
  
<script lang="ts">
import { defineComponent } from 'vue';
import supabase from '../supabase'
import { useIonRouter } from '@ionic/vue';
import { useRoute } from 'vue-router';

const onInit = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log(data)
    console.log(error)
}

export default defineComponent({
    name: 'HomePage',
    setup() {
        console.log('from HomePage.vue')
        const router = useIonRouter()
        const route = useRoute()
        const parsedHash = new URLSearchParams(
            route.hash.substring(1) 
        );
        console.log(Object.fromEntries(parsedHash))
        console.log(router)
        onInit()
        return {
            
        }

    },
});
</script>
  