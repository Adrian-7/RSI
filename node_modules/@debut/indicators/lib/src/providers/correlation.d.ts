export declare class Correlation {
    period: number;
    private pricesX;
    private pricesY;
    private filled;
    private SMAx;
    private SMAy;
    private SMAxValue;
    private SMAyValue;
    constructor(period: number);
    nextValue(priceX: number, priceY: number): number;
}
