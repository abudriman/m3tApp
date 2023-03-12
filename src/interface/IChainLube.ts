export interface IChainLubeType {
    id: number;
    name: string;
}

export interface IChainLubeTDO {
    id: number;
    name: string;
    type: number;
}

export interface IChainLubeIntake {
    id: number;
    chain_lube_inlet: number;
    chain_lube_outlet: number;
    bolt_lube: number;
    total_monthly: number;
    year: number;
    month: number;
    updated_by: string;
    chain_lube_id: number;
    chain_lube_tdo: IChainLubeTDO;
}

export interface IChainLubeOuttake {
    id: number;
    total_sisi_os: number;
    total_sisi_ds: number;
    year: number;
    month: number;
    updated_by: string;
    chain_lube_id: number;
    chain_lube_tdo: IChainLubeTDO;
}