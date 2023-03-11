<template>
    <refreshable-page pageTitle="NIPROLL">
        <div class="content">
            <p>
                Berfungsi untuk menahan film pada saat penarikan agar visual film bagus. Terhindar dari skratch &
                flek.<br />
                Jumlah terpasang ph 1 stc 6 ann 1, total 8 pcs<br />
                Berat : 97 kg<br />
                Ditopang oleh Pneumatic Cylinder :<br />
                DSBC-100-55-PPVA-N3T4 FESTO<br />
                Material Rolll: Silikon rubber<br />
                Hardness: 70 - 75 Shore A<br />
                Diameter Rubber: 135 - 155 mm<br />
                Diameter Core: 110 – 120 mm<br />
                Panjang: 1400 mm<br />
                Profile: Flat<br />
                Colour: White<br />
                Dial Max: 0.01<br />
                Bearing: 22210 E C3<br />
                Grease: DUPONT KRYTOX FG 226
            </p>
            <img src="@/assets/img/niproll-1.png" />
            <img src="@/assets/img/niproll-2.png" />
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
  