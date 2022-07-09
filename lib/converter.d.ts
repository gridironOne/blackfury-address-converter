/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ECHV: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEchelonv: (ethAddress: string) => string;
export declare const echelonvToEth: (echelonAddress: string) => string;
export declare const ECH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEchelon: (ethAddress: string) => string;
export declare const echelonToEth: (echelonAddress: string) => string;
