export const SubmitChainIntakeData = {
    chain_lube_inlet: {
        type: 'number', messages: {
            required: 'Mohon isi Chain lube inlet'
        }
    },
    chain_lube_outlet: {
        type: 'number', messages: {
            required: 'Mohon isi Chain lube outlet'
        }
    },
    bolt_lube: {
        type: 'number', messages: {
            required: 'Mohon isi Bolt lube'
        }
    },
    month: {
        type: 'number', min: 1, messages: {
            required: 'Mohon pilih bulan',
            numberMin: 'Mohon pilih bulan',
        }
    },
}