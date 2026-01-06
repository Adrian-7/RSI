export declare class Move {
    private period;
    private changes;
    private prevPrice;
    private value;
    /**
     * Конструктор
     * @param period - целочисленное значение от 1 до  12
     * @param period - период
     */
    constructor(period: number);
    nextValue(close: number): number;
    calculate(change: number): number;
}
