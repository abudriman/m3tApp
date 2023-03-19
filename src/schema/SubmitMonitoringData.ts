export const SubmitMonitoringData = {
    id: { type: 'number', optional: true },
    motor_v: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Vertikal'
        }
    },
    motor_h: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Horizontal'
        }
    },
    motor_a: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Axial'
        }
    },
    coupling_v: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Vertikal'
        }
    },
    coupling_h: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Horizontal'
        }
    },
    impeler_v: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Vertikal'
        }
    },
    impeler_h: {
        type: 'number', messages: {
            required: 'Mohon isi nilai Motor Horizontal'
        }
    },
    part_id: {
        type: 'number', min: 1, messages: {
            numberMin: 'Mohon pilih bagian'
        }
    },
}
// {
//     id: number;
//     master_pompa_parts: PompaPart;
//     motor_v: number;
//     motor_h: number;
//     motor_a: number;
//     coupling_v: number;
//     coupling_h: number;
//     impeler_v: number;
//     impeler_h: number;
//     tanggal_penggantian: string;
//     keterangan: string;
//     updated_by: string;
// }