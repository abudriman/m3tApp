export const SubmitChainOuttakeData = {
    total_sisi_os: {
        type: 'number', messages: {
            required: 'Mohon isi Total sisi OS'
        }
    },
    total_sisi_ds: {
        type: 'number', messages: {
            required: 'Mohon isi Total sisi DS'
        }
    },
    month: {
        type: 'number', min: 1, messages: {
            required: 'Mohon pilih bulan',
            numberMin: 'Mohon pilih bulan',
        }
    },
}