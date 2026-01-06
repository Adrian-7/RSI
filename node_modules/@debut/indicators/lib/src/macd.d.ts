export declare class MACD {
    private periodEmaFast;
    private periodEmaSlow;
    private periodSignal;
    private emaFastIndicator;
    private emaSlowIndicator;
    private emaSignalIndicator;
    constructor(periodEmaFast?: number, periodEmaSlow?: number, periodSignal?: number);
    nextValue(value: number): {
        macd: number;
        emaFast: number;
        emaSlow: number;
        signal: number;
        histogram: number;
    };
    momentValue(value: number): {
        macd: number;
        emaFast: number;
        emaSlow: number;
        signal: number;
        histogram: number;
    };
}
