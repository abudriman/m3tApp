<template>
    <refreshable-page pageTitle="ROTARY JOINT">
        <div class="content">
            <p>
                Rotary Joint adalah sambungan antara selang jalur heating oil dengan Roll heating MDO.<br />
                Jumlahnya sebanyak heating oil roll MDO dari preheating, streching sampe annealing.<br />
                Yaitu 28 Pcs.<br />
                Tipe Deublin 6506 untuk line 7<br />
                Tipe Deubline 6507 untuk line 6<br />
            </p>
            <img src="@/assets/img/rotary-joint-1.png" />
            <img src="@/assets/img/rotary-joint-2.png" />
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
  