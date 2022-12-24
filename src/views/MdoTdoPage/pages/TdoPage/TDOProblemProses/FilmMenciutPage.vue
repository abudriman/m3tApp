<template>
    <private-page pageTitle="FILM MENCIUT">
        <div class="content">
            <p>
                Keadaan film yang menyusut pada TDO out terjadi akibat thermal shrinkage. Ini dapat terjadi ketika air
                shower tidak mampu mendinginkan film sampai temperature ruangan.
            </p>
            <p>Action: Tingkatkan persentase putaran blower & cek kondisi flow pada ducting air shower
            </p>
            <img src="@/assets/img/film-menciut-1.png" alt="">
        </div>
    </private-page>
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
    PrivatePage
} from '@/components'

export default defineComponent({
    name: 'PreheatingRollPage',
    components: {
        PrivatePage,
    },
    setup() {

        return {
        }

    },
});
</script>
  