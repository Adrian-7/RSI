export declare type WaveData = {
    consolidate: number;
    power: number;
    streak: number;
    diff: number;
    startPrice: number;
    prevPeak: number;
};
export declare class Wave {
    private up;
    private down;
    /**
     * Конструктор
     */
    constructor();
    nextValue(open: number, close: number, high: number, low: number): {
        consolidate: number;
        power: number;
        streak: number;
        diff: number;
        startPrice: number;
        prevPeak: number;
    };
}
