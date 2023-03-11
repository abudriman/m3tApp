<template>
    <refreshable-page pageTitle="DRAW GAP">
        <div class="content">
            <p>
                Adalah sistem untuk menentukan gap penarikan antara roll streching. Digerakan dengan motor,
                ditransmisikan dengan gearbox dan cardant shaft. Terpasang pada roll streching nomor 2,4, & 6<br />
                Gearbox Draw Gap : RADIAL SEAL 17X40X7 & BEARING 51309 <br />
                Cardant Shaft : MMAX 30 NM PART NO. 526682.16<br />


            </p>
            <img src="@/assets/img/draw-gap-1.png" />
            <img src="@/assets/img/draw-gap-2.png" />
            <img src="@/assets/img/draw-gap-3.png" />
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
  