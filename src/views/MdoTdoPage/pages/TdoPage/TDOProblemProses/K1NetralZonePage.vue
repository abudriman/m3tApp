<template>
    <refreshable-page pageTitle="K1 Netral Zone">
        <div class="content">
            <p>
                Kondensat terjadi ketika udara panas yang mengandung oli dari annealing zone bertemu dengan udara dingin
                di netral zone. Udara panas melepaskan panas sehingga terjadi pengembunan.
            </p>
            <p>
                Action:

            <ul class="list-disc list-inside">
                <li>Lakukan cleaning secara optimal di area netral zone dengan menggunakan dry ice</li>
                <li>Pastikan exhaust blower bekerja dengan baik</li>
                <li>Pastikan tidak ada masalah pada ducting exhaust, cek rembes pada sambungan ducting dan cek flow</li>
                <li>Pasang terpal dan ganti terpal sebelum jenuh, terpal dapat menyerap kondensat agar tidak jatuh ke
                    film</li>
                <li>Pasang Kardus dan fitwool untuk menambah area penyerapan</li>

            </ul>

            </p>
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
  