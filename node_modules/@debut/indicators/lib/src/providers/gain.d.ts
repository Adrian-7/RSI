export declare class AvgChangeProvider {
    private avgGain;
    private avgLoss;
    private prev;
    constructor(period: number);
    nextValue(value: number): {
        upAvg: any;
        downAvg: any;
    };
    momentValue(value: number): {
        upAvg: number;
        downAvg: number;
    };
}
