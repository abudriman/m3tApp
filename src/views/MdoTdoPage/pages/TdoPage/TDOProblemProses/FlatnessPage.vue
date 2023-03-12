<template>
    <refreshable-page pageTitle="Flatness Issue">
        <div class="content">
            <p>Masalah Flatness atau kerataan terjadi akibat panas yang kurang merata pada film saat penarikan
            </p>
            <ul class="list-inside list-disc">
                <li>Cek Flow HE TDO<br>Flow yang terhambat menyebabkan pemanasan yang kurang merata</li>
                <li>Cek Temperature & Flow Air Supply TDO<br>Supply angin yang kurang panas dan kurang banyak dapat
                    menyebabkan kondisi ruangan tdo dingin dan mempengaruhi proses penarikan</li>
                <li>Cek Friction pada Pull Roll<br>Penarikan pada temperatur dingin dapat menyebabkan flatness, kurangi
                    friction/perbedaan speed antara pull roll dan tdo.</li>

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
  