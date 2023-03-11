<template>
    <refreshable-page pageTitle="HCU MDO PUMP">
        <div class="content">
            <p>
                Berfungsi mengalirkan oli panas pada roll mdo<br />
                Jumlah terpasang 15 unit (L6) 17 unit (L7)<br />
                Service Temperature : 250 degc<br />
                Service Pressure : 6 Bar<br />
                Flow : 6 m3/h<br />
                Head : 40.5 m<br />
                Motor : 3 kW<br />
                Allweiler NBT 32-160/01/170 PN 719230<br />
                MECH SEAL M32/32-AQKGG-AG02-KALREZ-MERK EAGLEBRUGMANN<br />
                BALL BEARING 6306 C4 ZZ<br />
            </p>
            <img src="@/assets/img/hcu-pump-1.png" />
            <img src="@/assets/img/hcu-pump-2.png" />
            <img src="@/assets/img/hcu-pump-3.png" />
            <img src="@/assets/img/hcu-pump-4.png" />
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
  