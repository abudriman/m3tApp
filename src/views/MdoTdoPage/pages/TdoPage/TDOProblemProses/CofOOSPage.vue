<template>
    <refreshable-page pageTitle="COF OUT SPEC">
        <div class="content">
            <p>
                COF/Coefficient of Friction adalah indikator untuk menentukan kasar atau licinnya permukaan film. Untuk
                mendapatkan properties yang diinginkan, pada material ditambahkan additive yang disebut slip agent.
            </p>
            <p>Semakin banyak Slip agent maka permukaan film akan semakin licin dan nilai COF semakin rendah.
            </p>
            <p>Slip Agent ini akan bermigrasi ke permukaan film tergantung dari temperatur. Semakin tinggi temperatur
                maka semakin cepat. Khususnya adalah temperatur TDO.
            </p>
            <p>Jika nilai COF terlalu tinggi maka temperatur TDO terlalu panas
            </p>
            <p>Sebaliknya jika nilai COF terlalu rendah
                maka TDO terlalu dingin</p>
            <p>Action: <br />
                Cek TDO Airing System untuk keseluruhan temperature TDO
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
  