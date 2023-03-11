<template>
    <refreshable-page pageTitle="FEEDING CHAIN">
        <div class="content">
            <img src="@/assets/img/feeding-chain.png" />
            <p>
                Berfungsi untuk mengumpan film pada MDO agar sesuai jalur streching. Digerakan dengan spur gear dan
                rantai.
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
  