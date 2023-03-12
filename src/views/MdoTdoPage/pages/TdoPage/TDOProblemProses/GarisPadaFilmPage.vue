<template>
    <refreshable-page pageTitle="Garis Pada Film">
        <div class="content">
            <p>Garis pada film terjadi akibat goresan antara film dengan bagian dari mesin</p>
            <ul class="list-inside list-disc">
                <li>Ubah settingan blower floating dan air shower, pastingan jalannya film berada di tengah antara ducting
                    atas dan bawah (tidak ada film potensi tergesek ducting)</li>
                <li>Cek fitwool yang terpasang di area netral zone, ada kemungkinan terlepas dan gesek film</li>
                <li>Cek ducting preheating, pastikan sudah terpasang dengan baik</li>
                <li>Cek TDO in, posisi feeding plate dan gelombang pada film dapat berpotensi gesekan dan menyebabkan garis
                </li>
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
  