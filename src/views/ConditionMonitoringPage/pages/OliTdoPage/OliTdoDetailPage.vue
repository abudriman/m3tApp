<template>
    <refreshable-page :pageTitle="name as string ?? '...'" :onRefresh="(e: IonRefresherCustomEvent<RefresherEventDetail>) => {
        fetchMonitoringData().then(() => {
            e.target.complete()
        })
    }">
        <template v-slot:end>
            <ion-button @click="onOpen">
                <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
            </ion-button>
        </template>
        <div class="filter">
            <div class="filter-item">
                <p>Detail</p>
                <ion-card class="ion-no-margin p-2">
                    <p>{{ name ?? '...' }}</p>
                </ion-card>
            </div>
            <div class="filter-item">
                <p>Tahun</p>
                <ion-card class="ion-no-margin">
                    <div class="date" @click="openPicker">
                        <p>{{ format(date, 'yyyy', { locale: indonesia }) }}</p>
                        <ion-icon slot="icon-only" :icon="caretDown"></ion-icon>
                    </div>
                </ion-card>
            </div>
        </div>

        <div class="max-w-full mt-4">
            <div v-if="isLoading" class="py-4 flex justify-center"> <ion-spinner></ion-spinner></div>
            <div v-else-if="monitoringData.length && Number(type) === 1" class="overflow-x-auto rounded-lg">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="text-center">{{ format(date, 'yyyy', { locale: indonesia }) }}</th>
                            <th>Chain Lube Inlet</th>
                            <th>Chain Lube Outlet</th>
                            <th>Bolt Lube</th>
                            <th>Total Monthly</th>
                            <th>Diperbarui Oleh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in monitoringData" :key="data.id">
                            <th>{{ format(new Date(`2023-${data.month}-01`), 'MMM') }} </th>
                            <td>{{ `${data.chain_lube_inlet} Liter` }}</td>
                            <td>{{ `${data.chain_lube_outlet} Liter` }}</td>
                            <td>{{ `${data.bolt_lube} Liter` }}</td>
                            <td>{{ `${data.chain_lube_inlet + data.chain_lube_outlet + data.bolt_lube} Liter` }}</td>
                            <td>{{ data.updated_by }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else-if="monitoringData.length && Number(type) === 2" class="overflow-x-auto rounded-lg">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="text-center">{{ format(date, 'yyyy', { locale: indonesia }) }}</th>
                            <th>Total sisi OS</th>
                            <th>Total sisi DS</th>
                            <th>Diperbarui Oleh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in monitoringData" :key="data.id">
                            <th>{{ format(new Date(`2023-${data.month}-01`), 'MMM') }} </th>
                            <td>{{ `${data.total_sisi_os} Liter` }}</td>
                            <td>{{ `${data.total_sisi_ds} Liter` }}</td>
                            <td>{{ data.updated_by }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="flex justify-center pt-6">
                <p>Tidak ada data</p>
            </div>
        </div>
        <MonitoringOliTdoModal :type="Number(type as unknown as string)" :pageTitle="name as unknown as string ?? '...'"
            :is-open="isOpen" :on-close="onClose" :handleSave="handleSave" :handleSelect="handleSelect"
            :monitoringForm="monitoringForm" :handleInput="handleInput" :selectedIndex="selectedIndex" />
    </refreshable-page>
</template>

<style scoped>
/* * { */
/* outline: 1px solid red; */
/* } */

.filter {
    margin: 0;
    padding: 0;
}

.filter>*:not(:last-child) {
    margin-bottom: .5rem;
}

.filter-item {
    display: flex;
    flex-direction: column;
}

.filter-item>*:not(:last-child) {
    margin-bottom: .2rem;
}

.date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .4rem;
}

p {
    margin: 0
}
</style>

<script lang="ts" setup>
import { onBeforeMount, ref, watchEffect, watch } from 'vue';
import {
    RefreshablePage,
} from '@/components'
import { MonitoringOliTdoModal } from '@/components/partials'
import supabase from '@/supabase';
import { useRoute, useRouter } from 'vue-router';
import startOfMonth from 'date-fns/startOfMonth'
import format from 'date-fns/format'
import endOfMonth from 'date-fns/endOfMonth'
import indonesia from 'date-fns/locale/id'
import {
    IonCard,
    IonIcon,
    pickerController,
    RefresherEventDetail,
    IonButton,
    IonSpinner,
    toastController
} from '@ionic/vue';
import { caretDown, addOutline } from 'ionicons/icons'
import { IChainLubeIntake, IChainLubeOuttake, Monitoring, PompaPart } from '@/interface'
import { IonRefresherCustomEvent } from '@ionic/core';
import { getMonth, getYear } from 'date-fns';
import { validate } from '@/utils';
import { SubmitChainIntakeData, SubmitChainOuttakeData } from '@/schema'


const isOpen = ref(false)
const onOpen = () => { isOpen.value = true; selectedIndex.value = 0; }
const onClose = () => { isOpen.value = false }
const route = useRoute()
const { id, type, name } = route.query
const monitoringData = ref<Array<IChainLubeIntake & IChainLubeOuttake>>([])
const selectedIndex = ref<number>(0)
const isLoading = ref<boolean>(true)
const date = ref(new Date())
const chainLubeFormInit: Partial<IChainLubeIntake & IChainLubeOuttake> = {
    id: undefined,
    chain_lube_inlet: undefined,
    chain_lube_outlet: undefined,
    bolt_lube: undefined,
    total_monthly: undefined,
    year: undefined,
    month: undefined,
    updated_by: undefined,
    chain_lube_id: undefined,
    total_sisi_os: undefined,
    total_sisi_ds: undefined,
}
const monitoringForm = ref<Partial<IChainLubeIntake & IChainLubeOuttake & Record<string, unknown>>>({ ...chainLubeFormInit })

const yearOption = Array(100).fill(undefined).map((value, index) => ({
    text: String(2019 + index),
    value: String(2019 + index)
}))
const fetchMonitoringData = async () => {
    const { data, error } = await supabase
        .from('chain_lube_monitoring')
        .select(`*                `)
        .eq('chain_lube_id', id)
        .eq('year', getYear(date.value))
        .order('month', { ascending: true })

    if (!error) {
        monitoringData.value = data
    }
    isLoading.value = false
}
const openPicker = async () => {
    const picker = await pickerController.create({
        columns: [
            {
                name: 'tahun',
                selectedIndex: yearOption.findIndex(item => item.value === date.value.getFullYear().toString()),
                options: yearOption
            },
        ],
        buttons: [
            {
                text: 'Batal',
                role: 'cancel',
            },
            {
                text: 'Pilih',
                handler: (value) => {
                    changeDate(value.tahun.value)
                },
            },
        ],
    })
    await picker.present()
}
const changeDate = (year: string) => {
    date.value = new Date(`${year}-01-01`)
}

const handleInput = (key: string, value: unknown) => {
    monitoringForm.value[key] = value
}

const handleSelect = (event: Event) => {
    selectedIndex.value = Number((event.target as HTMLInputElement).value)
}
const handleSave = async () => {
    let { data: dataUser, error: userError } = await supabase.auth.getUser()
    let data = {
        ...monitoringForm.value,
        updated_by: dataUser.user?.user_metadata?.name ?? dataUser.user?.email,
        month: selectedIndex.value,
        year: getYear(date.value),
        chain_lube_id: Number(id as unknown as string),
    }
    const errorToast = await toastController.create({
        message: 'Gagal menyimpan, mohon coba lagi',
        duration: 2000,
        position: 'top',
        color: 'danger'
    });
    const validation = await validate(Number(type as unknown as string) === 1 ? SubmitChainIntakeData : SubmitChainOuttakeData, data)
    // console.log(validation)
    if (validation !== true) {
        errorToast.message = validation[0].message
        await errorToast.present()
        return
    }
    const loadingToast = await toastController.create({
        message: 'Menyimpan data...',
        position: 'top',
    });

    await loadingToast.present();
    const { error } = await supabase
        .from('chain_lube_monitoring')
        .upsert(data)
    if (error) {
        loadingToast.dismiss()
        await errorToast.present()
    } else {
        loadingToast.dismiss()

        const successToast = await toastController.create({
            message: 'Data berhasil disimpan',
            position: 'top',
            color: 'success',
            duration: 1500
        });
        onClose()
        await successToast.present()
        await fetchMonitoringData()
    }
}
onBeforeMount(async () => {
    await Promise.all([
        fetchMonitoringData()
    ])
})
watchEffect(async () => {
    await fetchMonitoringData()
})
watch(selectedIndex, () => {
    let formData = monitoringData.value.find(data => data.month === Number(selectedIndex.value))
    monitoringForm.value = formData ? { ...formData } : { ...chainLubeFormInit }

})


</script>
