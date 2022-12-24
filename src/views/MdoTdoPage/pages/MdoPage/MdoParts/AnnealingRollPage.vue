<template>
    <private-page pageTitle="ANNEALING CHROME ROLL">
        <div class="content">
            <p>
                Berfungsi untuk mendinginkan film dengan temperatur yang lebih rendah<br />
                Jumlah terpasang 4 unit, Annealing 1-4<br />
                Berat : 513 kg<br />
                Service Temperature : 110 – 140 degc<br />
                Temperature Max : 180 degc<br />
                Pressure Max : 6 Bar<br />
                Volume : 38 liter<br />
                Dimensi: 614 x 1400 mm<br />
                Roughness: RA 0.01 - 0.02 micron super mirror<br />
                Thickness : 150-200 micron<br />
                Hardness Chrome: 60 - 65 HRC<br />
                Hardness Shaft : 70 HRC<br />
                Toleransi Shaft Area Bearing : P6 (0,03 – 0,05) interference fit<br />
                dial (run out) 0,01 - 0.02<br />
                Bearing: 22216 E C4 RADIAL SEAL 90X110X13MM<br />
                Grease: DUPONT KRYTOX FG 226<br />
                Operator Side: Rotary Joint Deublin 6507 (L6) & 6507 (L7)<br />
            </p>
            <img src="@/assets/img/annealing-chrome-roll.png" />
        </div>
    </private-page>
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
    PrivatePage
} from '@/components'

export default defineComponent({
    name: 'PreheatingRollPage',
    components: {
        PrivatePage,
    },
    setup() {

        return {
        }

    },
});
</script>
  