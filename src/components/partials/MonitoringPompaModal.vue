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
                <select v-bind:value="selectedIndex" @change="handleSelect($event)" class="select select-bordered w-full ">
                    <option value='0' disabled selected>Pilih bagian </option>
                    <option v-for="part in pompaPartData" :key="part.id" :value="part.id">{{ part.name }}</option>
                </select>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor V</span>
                    </label>
                    <input :value="monitoringForm.motor_v" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor Horizontal</span>
                    </label>
                    <input :value="monitoringForm.motor_h" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Motor Axial</span>
                    </label>
                    <input :value="monitoringForm.motor_a" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Coupling Vertikal</span>
                    </label>
                    <input :value="monitoringForm.coupling_v" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Coupling Horizontal</span>
                    </label>
                    <input :value="monitoringForm.coupling_h" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Vertikal</span>
                    </label>
                    <input :value="monitoringForm.impeler_v" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Horizontal</span>
                    </label>
                    <input :value="monitoringForm.impeler_h" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Horizontal</span>
                    </label>
                    <input :value="monitoringForm.impeler_h" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Horizontal</span>
                    </label>
                    <input :value="monitoringForm.impeler_h" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Impeler Horizontal</span>
                    </label>
                    <input :value="monitoringForm.impeler_h" type="number" class="input input-bordered" />
                </div>
            </div>
        </ion-content>
    </ion-modal>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
</template>
<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
} from '@ionic/vue';
import { OverlayEventDetail } from '@ionic/core';
const props = defineProps(['selectedIndex', 'handleSelect', 'pompaPartData', 'monitoringForm', 'handleSave', 'isOpen', 'onClose', 'pageTitle'])
const cancel = () => {
    props.onClose()
}
const confirm = () => {
    props.handleSave()
}
</script>