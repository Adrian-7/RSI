export declare class BollingerBands {
    private period;
    private stdDev;
    private sd;
    private sma;
    private fill;
    constructor(period?: number, stdDev?: number);
    nextValue(close: number): {
        lower: number;
        middle: number;
        upper: number;
    };
    momentValue(close: number): {
        lower: number;
        middle: number;
        upper: number;
    };
}
