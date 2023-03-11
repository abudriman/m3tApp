<template>
    <refreshable-page pageTitle="STRETCHING ROLL">
        <div class="content">
            <p>
                Berfungsi untuk menarik film agar film lebih panjang dan lebih tipis sesuai produk yang diinginkan <br>
                Jumlah terpasang 6 unit<br>
                Berat : 100 kg<br>
                Temperature : 110 – 140 degc<br>
                Dimensi: 150 x 1400 mm<br>
                Roughness: RA 0.01 - 0.02 micron super mirror<br>
                Thickness : 150-200 micron<br>
                Hardness Chrome: 60 - 65 HRC<br>
                Hardness Shaft : 70 HRC<br>
                Toleransi Shaft Area Bearing : P6 (0,03 – 0,05) interference fit<br>
                dial (run out) 0,01 - 0.02<br>
                Bearing: 22215 E C3 RADIAL SEAL 90X110X13MM<br>
                Grease: DUPONT KRYTOX FG 226<br>
                Drive Side: Cardant Shaft Spicer Bearing 2040 W25 9H 12<br>
                Operator Side: Rotary Joint Deublin 6506<br>

            </p>
            <img src="@/assets/img/stretching-roll-1.png" />
            <img src="@/assets/img/stretching-roll-2.png" />
            <img src="@/assets/img/stretching-roll-3.png" />
            <img src="@/assets/img/stretching-roll-4.png" />
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
    name: 'NiprollPage',
    components: {
        RefreshablePage,
    },
    setup() {

        return {
        }

    },
});
</script>
  