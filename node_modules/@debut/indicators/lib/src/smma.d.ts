/**
 * SMMA (Smoothed Moving Average) is another popular and widely used moving average indicator.
 * As all the other moving average indicators, to achieve the goals, the indicator filters
 * out the market fluctuations (noises) by averaging the price values of the periods, over which it is calculated.
 */
export declare class SMMA {
    private period;
    private sum;
    private avg;
    private filled;
    private fill;
    constructor(period: number);
    nextValue(value: number): any;
    momentValue(value: number): number;
}
