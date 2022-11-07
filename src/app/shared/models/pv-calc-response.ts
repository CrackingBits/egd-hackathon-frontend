export interface PvCalcAppResultOutputsTotalsFixed {


    E_d: number;

    E_m: number;

    E_y: number;

    SD_m: number;

    SD_y: number;

    l_aoi: number;

    l_spec: number;

    l_tg: number;

    l_total: number;
}

export interface PvCalcAppResultOutputsTotals {

    fixed: PvCalcAppResultOutputsTotalsFixed;
}

export interface PvCalcAppResultOutputs {

    totals: PvCalcAppResultOutputsTotals
}

export interface PvCalcResponse {
    outputs: PvCalcAppResultOutputs;
}