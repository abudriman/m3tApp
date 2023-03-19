<template>
    <refreshable-page pageTitle="TDO Oven System">
        <div class="content">
            <p>Tinggi rendahnya temperatur film di TDO dipengaruhi oleh aliran udara yang menyebar ke seluruh bagian oleh
                ducting/nozzle boxes, blower, &amp; heat exchanger</p>
            <img src="@/assets/img/tdo-oven-system.jpg" alt="tdo oven system">
            <div class="flex flex-col pt-4">
                <ion-accordion-group>
                    <ion-accordion value="first">
                        <ion-item slot="header" color="light">
                            <ion-label>HEAT EXCHANGER</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Heat exchanger tipe radiator yang dilengkapi dengan blower dan support dari High
                                    temperature oil berfungsi untuk memanaskan TDO. Posisinya tersebar dari zone Preheating,
                                    Drawing, Sampai Annealing.</p>
                                <p> Untuk Spec HE Preheating 120 KW, sedangkan untuk zone drawing dan annealing spec nya
                                    bervariasi</p>
                                <img src="@/assets/img/heat-exchanger-1.jpg" alt="heat exchanger 1">
                                <img src="@/assets/img/heat-exchanger-2.jpg" alt="heat exchanger 2">
                                <img src="@/assets/img/heat-exchanger-3.jpg" alt="heat exchanger 3">

                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <ion-item slot="header" color="light">
                            <ion-label>AIRING SYSTEM</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Airing system pada TDO terbagi menjadi 2 arah aliran, yaitu exhaust hot air dan supply
                                    fresh air.</p>
                                <ul class="list-disc list-outside space-y-2">
                                    <li>
                                        <p>Exhaust hot air</p>
                                        <p>berfungsi mengeluarkan udara panas didalam tdo yang mengandung uap oli untuk
                                            mencegah kondensat pada film</p>
                                    </li>
                                    <li>
                                        <p>Fresh air supply</p>
                                        <p>Berfungsi menggantikan volume udara panas yang terbuang pada exhaust</p>
                                    </li>
                                    <li>
                                        <p>Exhaust hot air system</p>
                                        <p>Ducting exhaust terbentang di atap TDO dari zone drawing hingga annealing
                                            terhubung ke blower exhaust yang mengalirkannya ke luar</p>
                                        <img src="@/assets/img/air-system-1.jpg" alt="air system 1">
                                    </li>
                                    <li>
                                        <p>Fresh air supply system</p>
                                        <p>Ducting exhaust terbentang di lantai TDO dari zone drawing hingga annealing
                                            terhubung ke blower supply yang mengalirkannya fresh air ke dalam TDO. Sebelum
                                            masuk ke TDO, udara dipanaskan terlebih dahulu dengan Heat exchanger 500kW.</p>
                                        <img src="@/assets/img/air-system-2.jpg" alt="air system 2">
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="third">
                        <ion-item slot="header" color="light">
                            <ion-label>NETRAL ZONE</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Pada netral zone, udara panas dari oven dihisap pada bagian atas dan bawah untuk mencegah
                                    kondensasi sebelum memasuki cooling zone/air shower.</p>
                                <img src="@/assets/img/netral-zone-1.jpg" alt="netral zone 1">
                                <img src="@/assets/img/netral-zone-2.jpg" alt="netral zone 2">
                                <img src="@/assets/img/netral-zone-3.jpg" alt="netral zone 3">
                            </div>
                        </div>
                    </ion-accordion>

                    <ion-accordion value="fourth">
                        <ion-item slot="header" color="light">
                            <ion-label>AIR SHOWER</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <P>Sistem Air Shower berguna untuk mendinginkan film menjadi temperature ruangan dengan
                                    angin dari ducting & centrifugal fan pada bagian bawah dan atas film yang frekuensi nya
                                    bisa dicontrol dengan inverter sehingga pergerakan film bisa stabil.</P>
                                <p>Besar kecilnya hembusan angin mempengaruhi kondisi visual pada film dan mencegah
                                    penyusutan dimensi.
                                </p>
                                <img src="@/assets/img/air-shower-1.jpg" alt="air shower 1">
                            </div>
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
            </div>
        </div>
    </refreshable-page>
</template>

  
<script lang="ts" setup>
import {
    RefreshablePage,
} from '@/components'
import { IonLabel, IonItem, IonAccordion, IonAccordionGroup } from '@ionic/vue';


</script>
  