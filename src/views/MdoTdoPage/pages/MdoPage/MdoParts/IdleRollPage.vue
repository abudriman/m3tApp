<template>
    <refreshable-page pageTitle="IDLE ROLL">
        <div class="content">
            <p>
                Atau biasa disebut guide roll/tension measuring roll berfungsi hanya mengarahkan film (idle) tanpa
                ada<br />
                heating system. 2 diantaranya yg berposisi di MDO In & Out dilengkapi oleh load cell untuk
                mengukur<br />
                tekanan film, sehingga disebut tension measuring roll<br />
                Jumlah terpasang 6 unit, MDO In (2), MDO Out (2), TDO In (2)<br />
                Berat : 82 kg Bahan Aluminium<br />
                Dimensi: 150 x 1400 mm<br />
                Hardness Shaft : 60 HRC<br />
                Toleransi Shaft Area Bearing : P6 (0,03 – 0,05) interference fit<br />
                dial (run out) 0,01 - 0.02<br />
                Bearing: 2207 E C3<br />
                Grease: HTG INTERFLON<br />
            </p>
            <img src="@/assets/img/idle-roll.png" />
            <img src="@/assets/img/tension-measuring-roll-1.png" />
            <img src="@/assets/img/tension-measuring-roll-2.png" />
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
  