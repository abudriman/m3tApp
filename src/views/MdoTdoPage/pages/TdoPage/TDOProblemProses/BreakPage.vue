<template>
    <refreshable-page pageTitle="FREQUENTLY BREAK TDO">
        <div class="content">
            <p>
                Ada banyak penyebab break yang harus di cek:
            <ul>
                <li>Penggantian Material<br />Cek history pemakaian material</li>
                <li>Air terbawa dari water removal<br />Cek kondisi film setelah water removal</li>
                <li>Material di Silo basah<br />Cek sampel material pada silo</li>
                <li>Temperatur TDO kurang panas<br />Cek temperature film & cek flow blower</li>
                <li>Gigitan clip kurang Sempurna<br />Cek Open Clip & Cek Waste nyangkut pada clip</li>
                <li>Streching Ratio terlalu tinggi<br />Evaluasi Streching ratio pada MDO dan Kalibrasi lebar handwheel
                </li>
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
  