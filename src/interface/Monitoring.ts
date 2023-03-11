import PompaPart from "./PompaPart";

export default interface Monitoring {
    id: number;
    master_pompa_parts: PompaPart;
    motor_v: number;
    motor_h: number;
    motor_a: number;
    coupling_v: number;
    coupling_h: number;
    impeler_v: number;
    impeler_h: number;
    tanggal_penggantian: string;
    keterangan: string;
    updated_by: string;
}