<template>
    <private-page pageTitle="Pompa">
        <p>this is sink page</p>
    </private-page>
</template>

<style scoped>
/* * {
outline: 1px solid red;
} */
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import {
    PrivatePage,
} from '@/components'
import supabase from '@/supabase';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'PompaPage',
    components: {
        PrivatePage,
    },
    setup() {
        const router = useRouter()
        const pompas = ref()
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('master_pompa')
                .select()
                .order('id')
            if (!error) {
                pompas.value = data
            }
        }
        onBeforeMount(fetchData)
        return {
            pompas,
            router,
        }

    },
});
</script>
