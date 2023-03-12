<template >
    <div class="flex items-center justify-between p-5 my-[3px] cursor-pointer">
        <span>{{ text }}</span>
        <ion-icon :icon="chevronForward"></ion-icon>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { IonIcon } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';

defineProps({
    text: {
        type: String,
        default: 'button'
    },

})
</script>