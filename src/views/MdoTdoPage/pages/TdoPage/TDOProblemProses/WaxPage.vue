<template>
    <refreshable-page pageTitle="WAX">
        <div class="content">
            <p>
                Wax adalah efek samping dari additive tipe film tertentu (PSV) yang muncul akibat pendinginan di air
                shower yang kurang.
            </p>
            <p>Action: Tingkatkan persentase putaran blower & cek kondisi flow pada ducting air shower
            </p>
            <img src="@/assets/img/wax-1.png" alt="">
            <img src="@/assets/img/wax-2.png" alt="">
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
  