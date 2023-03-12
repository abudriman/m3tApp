<template >
    <RefreshablePage :page-title="`Langkah Kerja`">
        <ion-accordion-group>
            <ion-accordion value="first">
                <ion-item slot="header" color="light">
                    <ion-label>PENGGANTIAN ROLL STRECHING
                    </ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <div class="accord-item">
                        <p>Langkah kerja ganti roll streching</p>
                        <p>-tutup valve rotary</p>
                        <p>-bongkar cardant shaft</p>
                        <p>-lepas coupling cardant</p>
                        <p>-bongkar selang rotary lalu drain oli</p>
                        <p>-bongkar rotary joint</p>
                        <p>-lepas selang regrease</p>
                        <p>-lepas baut ke frame</p>
                        <p>-lepas niproll</p>
                        <p>-lepas cardant draw gap</p>
                        <p>-lepas Pneumatic dan bracket</p>
                        <p>-pasang pelindung roll dan span belt</p>
                        <p>-angkat roll pindahin ke bawah</p>
                        <p>-lepas housing bearing</p>
                        <p>-lepas bearing</p>
                        <p>-bersihkan shaft dan housing</p>
                        <p>-beri grease bearing</p>
                        <p>-pasang bearing ke housing</p>
                        <p>-panaskan bearing</p>
                        <p>-pasang bearing ke shaft</p>
                        <p>-pasang pelindung roll baru dan span belt</p>
                        <p>-angkat roll baru pasang ke mdo</p>
                        <p>-pasang cardant shaft draw gap</p>
                        <p>-pasang pneumatic dan bracket</p>
                        <p>-pasang baut ke frame</p>
                        <p>-pasang selang regrease</p>
                        <p>-pasang rotary joint</p>
                        <p>-buka valve rotary joint</p>
                        <p>-pasang coupling cardant shaft</p>
                        <p>-pasang cardant shaft</p>
                    </div>
                </div>
            </ion-accordion>
            <ion-accordion value="second">
                <ion-item slot="header" color="light">
                    <ion-label>SERVICE POMPA MDO
                    </ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <div class="accord-item">
                        <p>-persiapkan tools</p>
                        <p>-persiapkan sparepart (mechseal dan bearing)</p>
                        <p>-lepas coupling dari motor</p>
                        <p>-lepas impeller</p>
                        <p>-bongkar pompa dari rangka /lentera-drain oli dari rumah bearing</p>
                        <p>-lepas cover ki pas pompa</p>
                        <p>-lepas baut flange dengan kunci L4</p>
                        <p>-pisahkan as rotor dengan body nya</p>
                        <p>-lepas gland packing</p>
                        <p>-lepas snapring dn bearing</p>
                        <p>-lepas ring dan snapring mechseal</p>
                        <p>-lepas mechseal</p>
                        <p>-lepas kipas pompa</p>
                        <p>-cleaning semua bagian pompa</p>
                        <p>-pasang kipas pada as rotor</p>
                        <p>-pasang mechseal pada flange</p>
                        <p>-pasang flange pada as</p>
                        <p>-pasang mechseal dan flange pada as rotor</p>
                        <p>-pasang ring dan snapring mechseal</p>
                        <p>-pasang bearing dan snapring</p>
                        <p>-pasang as rotor dengan body</p>
                        <p>-pasti kan packing terpasang dan tambahkan sealant</p>
                        <p>-kencangkan baut L4</p>
                        <p>-pasang cover ki pas</p>
                        <p>-pasang gland packing</p>
                        <p>-pasang body pompa dengan rangka/lentera</p>
                        <p>-pasang impeller kencangkan baut 30</p>
                        <p>-pasang coupling pompa pada motor</p>
                        <p>-Isi oli pada rumah bearing</p>
                    </div>
                </div>
            </ion-accordion>
            <ion-accordion value="third">
                <ion-item slot="header" color="light">
                    <ion-label>SERVICE NIPROLL
                    </ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <div class="accord-item">
                        <p>Bongkar Nipp roll</p>
                        <p>- siapkan rolls</p>
                        <p>- bongkar cover bearing</p>
                        <p>- lepas snapfing dan cover grease</p>
                        <p>- impact/palu Sisi yang ada snaping as</p>
                        <p>- pisahkan as dengan Nipp roll</p>
                        <p>- lepas bealing pada Nipp roll</p>
                        <p>- ckaning bearing,cover bearing, as dan housing nipp roll</p>
                        <p>- ukur diameter rol Bila ada dimeter di bawah 145 mm pisahkan untuk diRubberrize</p>
                        <p>- diameter di atas 10 kirim ke ws bubut untuk digrinding</p>
                        <p><br></p>
                        <p>Rakit Nipp roll</p>
                        <p>- siapkan rolls</p>
                        <p>- cleaning bearing menggunakan cairan metal clean interflon</p>
                        <p>- grease bearing</p>
                        <p>- pasang bearing pada satu Sisi Nipp roll</p>
                        <p>- pasang cover grease dan snapring</p>
                        <p>- pasang as pada Nipp roll</p>
                    <p>- pastikan pemasangan bearing pada housing tidak miring</p>
                    <p>- impact/palu as Nipp roll</p>
                    <p>- pasang cover grease dan snapring</p>
                    <p>- pasang cover bearing</p>
                    <p>- pastikan ujung as bearing tidak ada cacat</p>
                    <p>- lakukan pengukuran</p>
                    <p>* Dial/ eksentrisitas</p>
                    <p>* Diameter</p>
                    <p>* hardness</p>
                    <p>* Tanggal pengukuran</p>
                    <p>- tempel hasl pengukumn pada Nipp roll yang sudah diukur</p>
                    <p>- tempatkan Nipp roll pada rak loading</p>
                </div>
            </div>
        </ion-accordion>
    </ion-accordion-group>
</RefreshablePage></template>
<script lang="ts" setup>
import { RefreshablePage } from '@/components';
import { IonAccordion, IonItem, useIonRouter } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>
