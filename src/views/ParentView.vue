<template >
    <ion-page>
        <IonRouterOutlet />
    </ion-page>
</template>
<script lang="ts" setup>
import { IonRouterOutlet, IonPage } from '@ionic/vue'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>