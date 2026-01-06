/**
 * Heikin-Ashi Candlesticks are an offshoot from Japanese candlesticks.
 * Heikin-Ashi Candlesticks use the open-close data from the prior period
 * and the open-high-low-close data from the current period to create a combo candlestick.
 * The resulting candlestick filters out some noise in an effort to better capture the trend.
 * In Japanese, Heikin means “average” and Ashi means “pace” (EUDict.com).
 * Taken together, Heikin-Ashi represents the average pace of prices.
 * Heikin-Ashi Candlesticks are not used like normal candlesticks.
 * Dozens of bullish or bearish reversal patterns consisting of 1-3 candlesticks are not to be found.
 * Instead, these candlesticks can be used to identify trending periods,
 * potential reversal points and classic technical analysis patterns.
 */
export declare class HeikenAshi {
    private prevOpen;
    private prevClose;
    /**
     * Get next value for closed candle hlc
     * affect all next calculations
     */
    nextValue(o: number, h: number, l: number, c: number): {
        o: number;
        h: number;
        l: number;
        c: number;
    };
    /**
     * Get next value for non closed (tick) candle hlc
     * does not affect any next calculations
     */
    momentValue(o: number, h: number, l: number, c: number): {
        o: number;
        h: number;
        l: number;
        c: number;
    };
    /**
     * Heiken ashi formula
     */
    calculate(o: number, h: number, l: number, c: number): {
        o: number;
        h: number;
        l: number;
        c: number;
    };
}
