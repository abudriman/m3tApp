<template>
    <refreshable-page pageTitle="Oli Rantai TDO" :onRefresh="onRefresh">
        <div v-if="oils.length === 0" class="w-full h-full flex flex-col space-y-4">
            <nav-button isLoading v-for="anjay, index in Array(10).fill('')" :key="index" />
        </div>
        <nav-button v-else class="!mx-0" v-for="oil in oils" :key="oil.id" :title="oil.name"
            @click="router.push(`/condition-monitoring/oil-rantai?id=${oil.id}&type=${oil.type}&name=${oil.name}`)"></nav-button>
    </refreshable-page>
</template>

<style scoped>
/* * {
outline: 1px solid red;
} */

div.main-grid {
    /* background-color: red; */
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr;
}

section.content {
    /* background-color: blue; */
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}
</style>
  
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import supabase from '@/supabase'
import { useRouter } from 'vue-router';
import { logOut } from 'ionicons/icons'
import { NavButton } from '@/components';
import { IonRefresherCustomEvent } from '@ionic/core';
import { IonRefresherContent } from '@ionic/core/components';
import { RefreshablePage } from '@/components';
import { IChainLubeTDO } from '@/interface';

console.log('from TeamPage.vue')
const router = useRouter()
const oils = ref<Array<IChainLubeTDO>>([])
const fetchData = async () => {
    const { data, error } = await supabase
        .from('chain_lube_tdo')
        .select('*')
        .order('id')
    if (!error) {
        oils.value = data
    }
}
const onRefresh = (event: IonRefresherCustomEvent<IonRefresherContent>) => {
    fetchData().finally(() => event.target.complete())
}
onBeforeMount(fetchData)
</script>
  