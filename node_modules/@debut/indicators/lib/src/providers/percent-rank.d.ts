/**
 * Returns the percentile of a value. Returns the same values as the Excel PERCENTRANK and PERCENTRANK.INC functions.
 */
export declare class PercentRank {
    private period;
    private values;
    private fill;
    constructor(period: number);
    nextValue(value: number): number;
    momentValue(value: number): number;
    private calc;
}
