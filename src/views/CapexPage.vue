<template >
    <RefreshablePage :page-title="`Capex`">
        <div class="flex flex-col items-center space-y-2">
            <img src="@/assets/img/capex-1.png" alt="capex 2023">
            <img src="@/assets/img/capex-2.png" alt="capex 2023">
        </div>
    </RefreshablePage>
</template>
<script lang="ts" setup>
import { RefreshablePage } from '@/components';
import { useIonRouter } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { year } = route.params
</script>
