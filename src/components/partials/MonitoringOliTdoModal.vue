<template >
    <ion-modal :is-open="isOpen">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="cancel()">Batal</ion-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button :strong="true" @click="confirm()">Simpan</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="flex flex-col pb-[20vh]">
                <select :disabled="isSubmitting" v-bind:value="selectedIndex" @change="handleSelect($event)"
                    class="select select-bordered w-full ">
                    <option value='0' disabled selected>Pilih bulan </option>
                    <option v-for="month in monthOption" :key="month.value" :value="month.value">{{ month.text }}</option>
                </select>

                <div class="form-control" v-show="type === 1">
                    <label class="label">
                        <span class="label-text">Chain Lube Inlet (Liter)<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.chain_lube_inlet" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('chain_lube_inlet', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control" v-show="type === 1">
                    <label class="label">
                        <span class="label-text">Chain Lube Outlet (Liter)<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.chain_lube_outlet" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('chain_lube_outlet', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control" v-show="type === 1">
                    <label class="label">
                        <span class="label-text">Bolt Lube (Liter)<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.bolt_lube" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('bolt_lube', Number((event.target as HTMLInputElement).value))"
                        @keyup="handleKey($event)" class="input input-bordered" />
                </div>
                <div class="form-control" v-show="type === 2">
                    <label class="label">
                        <span class="label-text">Total Sisi OS (Liter)<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.total_sisi_os" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('total_sisi_os', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control" v-show="type === 2">
                    <label class="label">
                        <span class="label-text">Total Sisi DS (Liter)<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.total_sisi_ds" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('total_sisi_ds', Number((event.target as HTMLInputElement).value))"
                        @keyup="handleKey($event)" class="input input-bordered" />
                </div>

            </div>
        </ion-content>
    </ion-modal>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
} from '@ionic/vue';
import { IChainLubeIntake, IChainLubeOuttake } from '@/interface';
interface Props {
    selectedIndex: number,
    monitoringForm: Partial<IChainLubeIntake & IChainLubeOuttake>,
    handleInput: (key: string, value: string | number) => void,
    handleSelect: (e: Event) => void,
    handleSave: () => Promise<unknown>,
    isOpen: boolean,
    onClose: () => void,
    pageTitle: string,
    type: number
}

const props = defineProps<Props>()
const isSubmitting = ref(false)
const monthOption = [
    {
        text: 'Januari',
        value: 1
    },
    {
        text: 'Februari',
        value: 2
    },
    {
        text: 'Maret',
        value: 3
    },
    {
        text: 'April',
        value: 4
    },
    {
        text: 'Mei',
        value: 5
    },
    {
        text: 'Juni',
        value: 6
    },
    {
        text: 'Juli',
        value: 7
    },
    {
        text: 'Agustus',
        value: 8
    },
    {
        text: 'September',
        value: 9
    },
    {
        text: 'Oktober',
        value: 10
    },
    {
        text: 'November',
        value: 11
    },
    {
        text: 'Desember',
        value: 12
    },
]
const cancel = () => {
    console.log('cancel')
    isSubmitting.value = false
    props.onClose()
}
const confirm = () => {
    isSubmitting.value = true
    props.handleSave().finally(() => {
        isSubmitting.value = false
    })
}

const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        confirm()
    }
}

document.addEventListener('ionBackButton', () => {
    cancel()
})
</script>