<template>
    <refreshable-page pageTitle="Pompa" :onRefresh="onRefresh">
        <div v-if="pompas.length === 0" class="w-full h-full flex flex-col space-y-4">
            <nav-button isLoading v-for="anjay, index in Array(10).fill('')" :key="index" />
        </div>
        <div v-else class="w-full h-full flex flex-col">
            <nav-button class="!mx-0" v-for="pompa in pompas" :key="pompa.id" :title="pompa.name"
                @click="router.push(`/condition-monitoring/pompa-detail/${pompa.id}`)"></nav-button>
        </div>
    </refreshable-page>
</template>

<style scoped>
/* * {
outline: 1px solid red;
} */
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import {
    RefreshablePage,
    NavButton
} from '@/components'
import supabase from '@/supabase';
import { useRouter } from 'vue-router';
import { IonRefresherCustomEvent } from '@ionic/core';
import { IonRefresherContent } from '@ionic/core/components';

export default defineComponent({
    name: 'PompaPage',
    components: {
        RefreshablePage,
        NavButton
    },
    setup() {
        const router = useRouter()
        const pompas = ref<Array<{ id: number, name: string }>>([])
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('master_pompa')
                .select()
                .order('id')
            if (!error) {
                pompas.value = data
            }
        }
        const onRefresh = (event: IonRefresherCustomEvent<IonRefresherContent>) => {
            fetchData().finally(() => event.target.complete())
        }
        onBeforeMount(fetchData)
        return {
            pompas,
            router,
            onRefresh
        }

    },
});
</script>
