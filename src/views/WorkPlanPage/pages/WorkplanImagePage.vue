<template >
    <RefreshablePage :page-title="`Workplan ${year}`">
        <div v-if="year === '2021'" class="flex justify-center h-full ">
            <img class="w-[40%]" src="@/assets/img/workplan-2021.png" alt="workplan 2021">
        </div>
        <div v-else-if="year === '2022'" class="flex flex-col items-stretch space-y-2 ">
            <img src="@/assets/img/workplan-2022-1.png" alt="workplan 2022">
            <img src="@/assets/img/workplan-2022-2.png" alt="workplan 2022">
        </div>
        <div v-else class="flex flex-col items-center space-y-2">
            <img src="@/assets/img/workplan-2023-1.png" alt="workplan 2023">
            <img src="@/assets/img/workplan-2023-2.png" alt="workplan 2023">
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
console.log(year)
</script>
