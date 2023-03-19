<template>
    <refreshable-page :pageTitle="pompaData ? pompaData.name : '...'"
        :onRefresh="(e: IonRefresherCustomEvent<RefresherEventDetail>) => { fetchMonitoringData().then(() => e.target.complete()) }">
        <template v-slot:end>
            <ion-button @click="onOpen">
                <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
            </ion-button>
        </template>

        <div class="filter">
            <div v-show="pompaData ? pompaData.type_id === 2 : false"
                class="filter-item relative overflow-y-hidden overflow-x-hidden">
                <button className="btn" @click="showBoosterInfo = !showBoosterInfo">
                    {{ showBoosterInfo ? 'Sembunyikan' : 'Lihat info Pompa' }}</button>
                <div
                    :class="showBoosterInfo ? 'transition-all flex flex-col items-center py-4 bottom-0 opacity-100' : 'absolute bottom-[100%] opacity-0'">
                    <img src="@/assets/img/booster-1.jpg" alt="pompa-booster-1">
                    <img src="@/assets/img/booster-2.jpg" alt="pompa-booster-2">
                </div>
            </div>
            <div class="filter-item">
                <p>Pompa</p>
                <ion-card class="ion-no-margin p-2">
                    <p>{{ pompaData ? pompaData.name : '...' }}</p>
                </ion-card>
            </div>
            <div class="filter-item">
                <p>Tanggal</p>
                <ion-card class="ion-no-margin">
                    <div class="date" @click="openPicker">
                        <p>{{ format(date, 'yyyy - MMMM', { locale: indonesia }) }}</p>
                        <ion-icon slot="icon-only" :icon="caretDown"></ion-icon>
                    </div>
                </ion-card>
            </div>
            <!-- <div vshow class="filter-item">
                <p>Informasi</p>
                
            </div> -->
        </div>
        <div class="max-w-full mt-4">
            <div v-if="isLoading" class="py-4 flex justify-center"> <ion-spinner></ion-spinner></div>
            <div v-else-if="monitoringData.length" class="overflow-x-auto rounded-lg">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="text-center">Date</th>
                            <th class="text-center bg-red-500" colspan="3">MOTOR</th>
                            <th class="text-center bg-green-500" colspan="2">COUPLING</th>
                            <th class="text-center bg-blue-500" colspan="2">IMPELER</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th class="text-center">{{ format(date, 'dd/MM/yyyy', { locale: indonesia }) }}</th>
                            <th>Vertikal</th>
                            <th>Horizontal</th>
                            <th>Axial</th>
                            <th>Vertikal</th>
                            <th>Horizontal</th>
                            <th>Vertikal</th>
                            <th>Horizontal</th>
                            <th class="text-center">Tanggal Penggantian</th>
                            <th class="text-center">Keterangan</th>
                            <th class="text-center">Diperbarui Oleh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in monitoringData" :key="data.id">
                            <th @click="selectPompaPart(data.id)"><label for="my-modal">{{
                                data.master_pompa_parts.name
                            }}</label></th>
                            <td>{{ data.motor_v }}</td>
                            <td>{{ data.motor_h }}</td>
                            <td>{{ data.motor_a }}</td>
                            <td>{{ data.coupling_v }}</td>
                            <td>{{ data.coupling_h }}</td>
                            <td>{{ data.impeler_v }}</td>
                            <td>{{ data.impeler_h }}</td>
                            <td>{{ data.tanggal_penggantian }}</td>
                            <td>{{ data.keterangan }}</td>
                            <td>{{ data.updated_by }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="flex justify-center pt-6">
                <p>Tidak ada data</p>
            </div>
        </div>
        <MonitoringPompaModal :page-title="pompaData ? pompaData.name : ''" :is-open="isOpen" :on-close="onClose"
            :handle-save="handleSave" :handle-select="handleSelect" :monitoring-form="monitoringForm"
            :selected-index="selectedIndex" :pompa-part-data="pompaPartData" :handle-input="handleInput" />
    </refreshable-page>
</template>

<style scoped>
* {
    /* outline: 1px solid red; */
}

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
import { defineComponent, onBeforeMount, ref, watchEffect, watch } from 'vue';
import {
    RefreshablePage,
} from '@/components'
import { MonitoringPompaModal } from '@/components/partials'
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
    toastController,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
} from '@ionic/vue';
import { caretDown, addOutline } from 'ionicons/icons'
import { Monitoring, PompaPart } from '@/interface'
import { IonRefresherCustomEvent } from '@ionic/core';
import { SubmitMonitoringData } from '@/schema'
import { validate } from '@/utils'


const isOpen = ref(false)
const onOpen = () => { isOpen.value = true; selectedIndex.value = 0 }
const onClose = () => { isOpen.value = false }
const router = useRouter()
const route = useRoute()
const { id } = route.params
const monitoringData = ref<Array<Monitoring>>([])
const pompaPartData = ref<Array<PompaPart>>()
const user: any = ref()
const selectedIndex = ref<number>(0)
const isLoading = ref<boolean>(true)
const pompaData = ref()
const showBoosterInfo = ref(false)
const date = ref(new Date())
const monitoringFormInit = {
    id: undefined,
    keterangan: '',
    master_pompa_parts: undefined,
    motor_v: 0,
    motor_h: 0,
    motor_a: 0,
    coupling_v: 0,
    coupling_h: 0,
    impeler_v: 0,
    impeler_h: 0,
    tanggal_penggantian: format(new Date(), 'yyyy-MM-dd'),
    pompa_id: id,
    part_id: undefined,
}
const monitoringForm = ref<Partial<Monitoring> & Record<string, unknown>>(monitoringFormInit)

const yearOption = Array(100).fill(undefined).map((value, index) => ({
    text: String(2019 + index),
    value: String(2019 + index)
}))
const monthOption = [
    {
        text: 'Januari',
        value: '01'
    },
    {
        text: 'Februari',
        value: '02'
    },
    {
        text: 'Maret',
        value: '03'
    },
    {
        text: 'April',
        value: '04'
    },
    {
        text: 'Mei',
        value: '05'
    },
    {
        text: 'Juni',
        value: '06'
    },
    {
        text: 'Juli',
        value: '07'
    },
    {
        text: 'Agustus',
        value: '08'
    },
    {
        text: 'September',
        value: '09'
    },
    {
        text: 'Oktober',
        value: '10'
    },
    {
        text: 'November',
        value: '11'
    },
    {
        text: 'Desember',
        value: '12'
    },
]
const fetchMonitoringData = async () => {
    // console.log(date.value)
    const { data, error } = await supabase
        .from('monitoring')
        .select(`*,
                master_pompa_parts (
                    *
                )
                `)
        .eq('pompa_id', id)
        .gte('date', format(startOfMonth(date.value), 'yyyy-MM-dd'))
        .lte('date', format(endOfMonth(date.value), 'yyyy-MM-dd'))
        .order('part_id')

    if (!error) {
        monitoringData.value = data
    }
    isLoading.value = false
}
const fetchPompaData = async () => {
    const { data, error } = await supabase
        .from('master_pompa')
        .select()
        .eq('id', id)
        .single()

    if (!error) {
        pompaData.value = data
    }
}
const fetchPompaPartData = async () => {
    const { data, error } = await supabase
        .from('master_pompa_parts')
        .select()
        .eq('type_id', pompaData.value.type_id)

    if (!error) {
        pompaPartData.value = data
    }
}
const openPicker = async () => {
    const picker = await pickerController.create({
        columns: [
            {
                name: 'tahun',
                selectedIndex: yearOption.findIndex(item => item.value === date.value.getFullYear().toString()),
                options: yearOption
            },
            {
                name: 'bulan',
                selectedIndex: monthOption.findIndex(item => item.value === date.value.getMonth().toString()),
                options: monthOption
            }
        ],
        buttons: [
            {
                text: 'Batal',
                role: 'cancel',
            },
            {
                text: 'Pilih',
                handler: (value) => {
                    changeDate(value.tahun.value, value.bulan.value)
                },
            },
        ],
    })
    await picker.present()
}
const changeDate = (year: string, month: string) => {
    // console.log(new Date(`${year}-${month}-01`))
    date.value = new Date(`${year}-${month}-01`)
}
const selectPompaPart = (id: number) => {
    console.log(id)
    selectedIndex.value = id
}
const handleSelect = (event: Event) => {
    selectedIndex.value = Number((event.target as HTMLInputElement).value)
}
const handleInput = (key: string, value: unknown) => {
    monitoringForm.value[key] = value
}
const handleSave = async () => {
    let { data: dataUser, error: userError } = await supabase.auth.getUser()
    let data = {
        ...monitoringForm.value,
        date: format(date.value, 'yyyy-MM-dd'),
        pompa_id: id,
        part_id: selectedIndex.value,
        updated_by: dataUser.user?.user_metadata?.name ?? dataUser.user?.email
    }
    delete data.master_pompa_parts
    const errorToast = await toastController.create({
        message: 'Gagal menyimpan, mohon coba lagi',
        duration: 2000,
        position: 'top',
        color: 'danger'
    });
    const validation = await validate(SubmitMonitoringData, data)
    console.log(validation)
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
        .from('monitoring')
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
    }


}
onBeforeMount(async () => {
    await Promise.all([
        fetchMonitoringData(),
        fetchPompaData(),
    ])
})
watchEffect(async () => {
    await fetchMonitoringData()
})
watch(selectedIndex, () => {
    let formData = monitoringData.value.find(data => data.master_pompa_parts.id === selectedIndex.value)
    monitoringForm.value = formData ? { ...formData } : monitoringFormInit

})
watch(pompaData, () => {
    fetchPompaPartData()
})


//realtime channel
supabase
    .channel('any')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'monitoring' }, async payload => {
        console.log('Change received!', payload)
        const changeIndex = monitoringData.value.findIndex(data => data.id === (payload.old as { id: number }).id)
        const { data, error } = await supabase
            .from('monitoring')
            .select(`*,
                master_pompa_parts (
                    *
                )
                `).limit(1)
            .eq('id', (payload.new as { id: number }).id)
            .gte('date', format(startOfMonth(date.value), 'yyyy-MM-dd'))
            .lte('date', format(endOfMonth(date.value), 'yyyy-MM-dd'))
            .order('part_id')

        if (!error && changeIndex > -1) {
            monitoringData.value[changeIndex] = data[0]
        } else if (data) {
            monitoringData.value.push(data[0])
            monitoringData.value.sort((a, b) => a.master_pompa_parts.id - b.master_pompa_parts.id)
        }
        // let temp = monitoringData.value[changeIndex]
        //  = { ...payload.new as Monitoring, master_pompa_parts: temp.master_pompa_parts }
    })
    .subscribe()


</script>
