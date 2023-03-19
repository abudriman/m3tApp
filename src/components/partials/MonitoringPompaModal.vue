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
                    <option value='0' disabled selected>Pilih bagian </option>
                    <option v-for="part in pompaPartData" :key="part.id" :value="part.id">{{ part.name }}</option>
                </select>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor Vertikal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.motor_v" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('motor_v', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor Horizontal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.motor_h" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('motor_h', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor Axial<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.motor_a" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('motor_a', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Coupling Vertikal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.coupling_v" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('coupling_v', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Coupling Horizontal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.coupling_h" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('coupling_h', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Vertikal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.impeler_v" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('impeler_v', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Horizontal<span class="text-red-500">*</span></span>
                    </label>
                    <input :value="monitoringForm.impeler_h" type="number" :disabled="isSubmitting"
                        @input="(event) => handleInput('impeler_h', Number((event.target as HTMLInputElement).value))"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Keterangan<span class="text-red-500">*</span></span>
                    </label>

                    <textarea :value="monitoringForm.keterangan" :disabled="isSubmitting"
                        @input="(event) => handleInput('keterangan', (event.target as HTMLTextAreaElement).value)"
                        className="textarea textarea-bordered h-24"></textarea>
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
const props = defineProps([
    'selectedIndex',
    'pompaPartData',
    'monitoringForm',
    'handleInput',
    'handleSelect',
    'handleSave',
    'isOpen',
    'onClose',
    'pageTitle'
])
const isSubmitting = ref(false)
const cancel = () => {
    isSubmitting.value = false
    props.onClose()
}
const confirm = () => {
    isSubmitting.value = true
    props.handleSave().finally(() => {
        isSubmitting.value = false
    })
}
</script>