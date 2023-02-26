<template>
    <private-page :pageTitle="pompaData ? pompaData.name : ''">
        <template v-slot:end>
            <label for="my-modal">
                <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
            </label>
        </template>
        <div class="filter">
            <div class="filter-item">
                <p>Pompa</p>
                <ion-card class="ion-no-margin p-2">
                    <p>{{ pompaData ? pompaData.name : '' }}</p>
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
        </div>
        <div class="max-w-full mt-4">
            <div class="overflow-x-auto rounded-lg">
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <!-- <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                    free!</p> -->
                <div class="flex flex-col">
                    <select v-model="selectedIndex" @change="handleSelect($event)" class="select select-bordered w-full ">
                        <option value='0' disabled selected>Pilih bagian </option>
                        <option v-for="part in pompaPartData" :key="part.id" :value="part.id">{{ part.name }}</option>
                    </select>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Coupling V</span>
                        </label>
                        <input v-model.number="monitoringForm.coupling_v" type="number" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Motor V</span>
                        </label>
                        <input v-model.number="monitoringForm.motor_v" type="number" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Motor H</span>
                        </label>
                        <input v-model.number="monitoringForm.motor_h" type="number" class="input input-bordered" />
                    </div>
                </div>
                <div class="modal-action flex">
                    <label for="my-modal" class="btn btn-outline">Cancel</label>
                    <label for="my-modal" class="btn" @click="handleSave">Save</label>
                </div>
            </div>
        </div>
    </private-page>
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

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watchEffect, watch } from 'vue';
import {
    PrivatePage,
} from '@/components'
import supabase from '@/supabase';
import { useRoute, useRouter } from 'vue-router';
import startOfMonth from 'date-fns/startOfMonth'
import format from 'date-fns/format'
import endOfMonth from 'date-fns/endOfMonth'
import indonesia from 'date-fns/locale/id'
import {
    IonCard,
    IonIcon,
    pickerController
} from '@ionic/vue';
import { caretDown, addOutline } from 'ionicons/icons'
import { Monitoring, PompaPart } from '@/interface'

export default defineComponent({
    name: 'PompaDetailPage',
    components: {
        PrivatePage,
        IonCard,
        IonIcon
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const { id } = route.params
        const monitoringData = ref<Array<Monitoring>>([])
        const pompaPartData = ref<Array<PompaPart>>()
        const selectedIndex = ref<number>(0)
        const pompaData = ref()
        const date = ref(new Date())
        const monitoringFormInit = {
            coupling_v: undefined,
            id: undefined,
            impeler_h: undefined, impeler_v: undefined,
            keterangan: undefined,
            master_pompa_parts: undefined,
            motor_a: undefined,
            motor_h: undefined,
            motor_v: undefined,
            tanggal_penggantian: undefined,
            coupling_h: undefined,
        }
        const monitoringForm = ref<Partial<Monitoring>>(monitoringFormInit)
        const yearOption = [
            {
                text: '2019',
                value: '2019'
            },
            {
                text: '2020',
                value: '2020'
            },
            {
                text: '2021',
                value: '2021'
            },
            {
                text: '2022',
                value: '2022'
            },
            {
                text: '2023',
                value: '2023'
            },
            {
                text: '2024',
                value: '2024'
            },
            {
                text: '2025',
                value: '2025'
            },
            {
                text: '2026',
                value: '2026'
            },
        ]
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
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            changeDate(value.tahun.value, value.bulan.value)
                        },
                    },
                ],
            })
            await picker.present()
        }
        const changeDate = (year: string, month: string) => {
            console.log(new Date(`${month}-01-${year}`))
            date.value = new Date(`${month}-01-${year}`)
        }
        const selectPompaPart = (id: number) => {
            console.log(id)
            selectedIndex.value = id
        }
        const handleSelect = (event: Event) => {
            selectedIndex.value = Number((event.target as HTMLInputElement).value)
        }
        const handleSave = () => {
            console.log(monitoringForm.value)
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
        return {
            monitoringData,
            pompaData,
            pompaPartData,
            router,
            date,
            format,
            caretDown,
            addOutline,
            openPicker,
            indonesia,
            selectPompaPart,
            selectedIndex,
            handleSelect,
            monitoringForm,
            handleSave
        }

    },
});
</script>
