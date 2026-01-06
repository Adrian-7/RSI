export declare class StandardDeviation {
    private period;
    private values;
    constructor(period: number);
    nextValue(value: number, mean?: number): number;
    momentValue(value: number, mean?: number): number;
    calculate(values: number[], value: number, mean?: number): void;
}
