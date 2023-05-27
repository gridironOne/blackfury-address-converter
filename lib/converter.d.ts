/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const BLACKV: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToBlackfuryv: (ethAddress: string) => string;
export declare const blackvToEth: (blackAddress: string) => string;
export declare const BLACK: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToBlackfury: (ethAddress: string) => string;
export declare const blackfuryToEth: (blackAddress: string) => string;
