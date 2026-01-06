/**
 * The CCI, or Commodity Channel Index, was developed by Donald Lambert,
 * a technical analyst who originally published the indicator in Commodities magazine (now Futures)
 * in 1980.1 Despite its name, the CCI can be used in any market and is not just for commodities
 */
export declare class CCI {
    private md;
    private sma;
    constructor(period?: number);
    nextValue(high: number, low: number, close: number): number;
    momentValue(high: number, low: number, close: number): number;
}
