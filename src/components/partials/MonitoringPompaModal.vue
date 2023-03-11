<template >
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box">
            <!-- <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                free!</p> -->
            <div class="flex flex-col">
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
            </div>
            <div class="modal-action flex">
                <label for="my-modal" class="btn btn-outline">Cancel</label>
                <label for="my-modal" class="btn" @click="handleSave">Save</label>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue';
defineProps(['selectedIndex', 'handleSelect', 'pompaPartData', 'monitoringForm', 'handleSave'])
</script>