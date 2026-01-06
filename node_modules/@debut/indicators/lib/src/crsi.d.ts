/**
 * Connors RSI (CRSI) uses the above formula to generate a value between 0 and 100.
 * This is primarily used to identify overbought and oversold levels.
 * Connor's original definition of these levels is that a value over 90
 * should be considered overbought and a value under 10 should be considered oversold.
 * On occasion, signals occur during slight corrections during a trend. For example,
 * when the market is in an uptrend, Connors RSI might generate short term sell signals.
 * When the market is in a downtrend, Connors RSI might generate short term buy signals.
 * Original core here: https://tradingview.com/script/vWAPUAl9-Stochastic-Connors-RSI/
 */
export declare class cRSI {
    private period;
    private rsi;
    private updownRsi;
    private prevClose;
    private updownPeriod;
    private updownValue;
    private roc;
    private percentRank;
    constructor(period?: number, updownRsiPeriod?: number, percentRankPeriod?: number);
    nextValue(value: number): number;
    momentValue(value: number): number;
    private getUpdownPeriod;
}
