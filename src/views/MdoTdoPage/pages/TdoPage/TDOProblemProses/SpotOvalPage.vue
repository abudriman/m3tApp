<template>
    <refreshable-page pageTitle="Spot Oval">
        <div class="content">
            <p>Spot oval terjadi akibat tetesan cairan pada area sebelum tdo, kemudian ditarik scara tranversal di tdo dan
                menjadi bentuk oval. Sumber tetesan bisa dari melt nyangkut, oli rantai tdo, kondensat, grease mdo</p>
            <p>Suspect Penyebab Spot Oval</p>
            <ul class="list-inside list-disc">
                <li>Cipratan Oli dari Tatakan TDO Preheating</li>
                <li>Cipratan Oli dari TDO inlet </li>
                <li>Cipratan Oli akibat Bolt Lubrication bocor</li>
                <li>Tetesan Kondensat selang cooling track</li>
                <li>Cipratan grease MDO</li>
                <li>Melt Nyangkut di ducting preheating</li>
            </ul>
        </div>
    </refreshable-page>
</template>

<style scoped>
/* * {
outline: 1px solid red;
} */
.content {
    display: flex;
    flex-direction: column;
}

.content img {
    align-self: center;
}

.content img:not(:last-child) {
    margin: 0 0 10px 0;
}
</style>
  
<script lang="ts">
import { defineComponent } from 'vue';
import {
    RefreshablePage
} from '@/components'

export default defineComponent({
    name: 'PreheatingRollPage',
    components: {
        RefreshablePage,
    },
    setup() {

        return {
        }

    },
});
</script>
  