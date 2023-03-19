<template>
    <refreshable-page pageTitle="TDO Track System">
        <div class="content">
            <p>Tinggi rendahnya temperatur film di TDO dipengaruhi oleh aliran udara yang menyebar ke seluruh bagian oleh
                ducting/nozzle boxes, blower, &amp; heat exchanger</p>
            <img src="@/assets/img/tdo-oven-system.jpg" alt="tdo oven system">
            <div class="flex flex-col pt-4">
                <ion-accordion-group>
                    <ion-accordion value="first">
                        <ion-item slot="header" color="light">
                            <ion-label>CHAIN & CLIP ASSEMBLY</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Klip berguna untuk menggenggam/menjepit film dari tdo inlet diantarkan melalui oven
                                    menuju tdo outlet searah mesin dan juga penarikan film searah tranversal.</p>
                                <p>Rantai berguna untuk mentransmisikan clip sesuai jalur jalannya film.</p>
                                <img src="@/assets/img/chain-assembly-1.jpg" alt="chain assembly">
                                <img src="@/assets/img/chain-assembly-2.jpg" alt="chain assembly">
                                <p class="font-bold text-lg">CLIP ASSEMBLY</p>
                                <img src="@/assets/img/clip-assembly-1.jpg" alt="clip assembly">
                                <img src="@/assets/img/clip-assembly-2.jpg" alt="clip assembly">
                                <p class="font-bold text-lg">CHAIN ASSEMBLY</p>
                                <img src="@/assets/img/chain-assembly-3.jpg" alt="chain assembly">
                                <img src="@/assets/img/chain-assembly-4.jpg" alt="chain assembly">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <ion-item slot="header" color="light">
                            <ion-label>CHAIN TENSION</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Chain tension berguna untuk mengencangkan rantai yang berputar pada TDO agar rantai dapat
                                    berjalan dengan baik. Jika rantai kendor maka rantai akan berjalan keluar dari jalur nya
                                    dan putaran akan berat dan macet.</p>

                                <p>Chain tension menggunakan system hydraulic & pneumatic untuk memberikan tegangan pada
                                    rantai dan mengatur besar kecilnya nilai pressure juga lama atau cepatnya aliran
                                    hydraulic.</p>
                                <img src="@/assets/img/chain-assembly-1.jpg" alt="chain assembly">
                                <img src="@/assets/img/chain-assembly-2.jpg" alt="chain assembly">
                                <img src="@/assets/img/chain-assembly-3.jpg" alt="chain assembly">
                                <img src="@/assets/img/chain-assembly-4.jpg" alt="chain assembly">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="third">
                        <ion-item slot="header" color="light">
                            <ion-label>CHAIN TRACK LUBRICATION</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Lubrication pada TDO berfungsi sebagai pelumas Jalur rantai dan clip agar memperpanjang
                                    umur juga mencegah macet dan aus pada sparepart rantai</p>
                                <p>Terdapat 2 Chain track lubrication system yang berbeda posisi yaitu chain lubrication TDO
                                    inlet & chain lubrication TDO outlet</p>
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="fourth">
                        <ion-item slot="header" color="light">
                            <ion-label>OIL CONSUMPTION CHAIN LUBRICATION</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <img src="@/assets/img/oil-consumption-1.jpg" alt="oil-consumption-1">
                                <img src="@/assets/img/oil-consumption-2.jpg" alt="oil-consumption-2">
                                <img src="@/assets/img/oil-consumption-3.jpg" alt="oil-consumption-3">
                                <img src="@/assets/img/oil-consumption-4.jpg" alt="oil-consumption-4">
                                <img src="@/assets/img/oil-consumption-5.jpg" alt="oil-consumption-5">
                            </div>
                        </div>
                    </ion-accordion>

                    <ion-accordion value="fifth">
                        <ion-item slot="header" color="light">
                            <ion-label>BOLT LUBRICATION</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <img src="@/assets/img/bolt-lubrication-1.jpg" alt="bolt-lubrication-1">
                                <img src="@/assets/img/bolt-lubrication-2.jpg" alt="bolt-lubrication-2">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="sixth">
                        <ion-item slot="header" color="light">
                            <ion-label>OIL DRAIN SYSTEM</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Buangan oli chain track lubrication maupun bolt lubrication tidak selamanya mengendap
                                    didalam sistem, oli tersebut akan terbuang melalui sistem drain yang tersebar di setiap
                                    sisi Track TDO.</p>
                                <img src="@/assets/img/oil-drain-system-1.jpg" alt="oil-drain-system-1">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="seventh">
                        <ion-item slot="header" color="light">
                            <ion-label>EDGE GUIDE</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Pada kedua sisi di TDO Inlet terdapat sebuah sistem yang berfungsi untuk memposisikan
                                    gigitan clip agar sesuai dengan posisi pinggir film yang bergerak. Sistem ini
                                    mengaplikasikan sensor udara untuk membaca posisi pinggir film kamudian aktuator nya
                                    menggunakan motor linier untuk menggerakan sprocket tempat rantai dan clip ber putar.
                                </p>
                                <img src="@/assets/img/edge-guide-1.jpg" alt="edge-guide-1">
                                <img src="@/assets/img/edge-guide-2.jpg" alt="edge-guide-2">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="eighth">
                        <ion-item slot="header" color="light">
                            <ion-label>COOLING TRACK SYSTEM</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Cooling track adalah sistem yang mendinginkan chain track yang panas akibat gesekan dan
                                    heating system oven. Penginginan menggunakan oli heat transfer yang yang sudah di atur
                                    temperaturnya oleh agregat pompa dan heat exchanger cooling water.</p>
                                <p>Temperatur oli didinginkan hingga berada 20 drajat dibawah temperatur chain track,
                                    kemudian di pompa menuju titik pendinginan pada chain track</p>
                                <img src="@/assets/img/cooling-track-system-1.jpg" alt="edge-guide-1">
                            </div>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="ninth">
                        <ion-item slot="header" color="light">
                            <ion-label>WIDTH ADJUSTMENT</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <div class="accord-item text-justify flex flex-col space-y-2 items-center">
                                <p>Pengatur Lebar pada TDO digunakan untuk mengatur jarak antara dua sisi clip yang
                                    berhadapan, juga menentukan lebarnya film, serta pada proses penarikannya searah
                                    tranversal.
                                </p>
                                <img src="@/assets/img/width-adjustment-1.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-2.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-3.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-4.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-5.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-6.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-7.jpg" alt="width adjustment">
                                <img src="@/assets/img/width-adjustment-8.jpg" alt="width adjustment">
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
import { useRouter } from 'vue-router';


</script>
  