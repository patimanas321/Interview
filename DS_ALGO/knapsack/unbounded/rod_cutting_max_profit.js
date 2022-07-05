// Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n.
// Determine the locations where the cuts are to be made for maximum profit.

/**
 * Max profit
 * @param {Array<number>} prices 1 - n-1 prices
 */
function maxProfit(prices) {
    const DP = initializeDP(prices);
    
    for (let cutLength = 1; cutLength < prices.length + 1; cutLength++) {
        const price = prices[cutLength - 1];
        for (let rodLength = 1; rodLength < prices.length + 1; rodLength++) {
            if (cutLength > rodLength) {
                DP[cutLength][rodLength] = DP[cutLength - 1][rodLength];
            } else {
                const withCurrent = DP[cutLength][rodLength - cutLength];
                const withoutCurrent = DP[cutLength - 1][rodLength];

                if ((price + withCurrent.profit) > withoutCurrent.profit) {
                    DP[cutLength][rodLength] = {
                        profit: (price + withCurrent.profit),
                        cuts: [...withCurrent.cuts, cutLength - 1]
                    };
                } else {
                    DP[cutLength][rodLength] = withoutCurrent;
                }
            }
        }
    }

    return DP[prices.length][prices.length];
}

function initializeDP(array) {
    const DP = [];
    for (let i = 0; i < array.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < array.length + 1; j++) {
            if (i === 0 || j === 0) {
                DP[i][j] = {
                    profit: 0,
                    cuts: []
                };
            } else {
                DP[i][j] = null;
            }
        }
    }

    return DP;
}

console.log(JSON.stringify(
    maxProfit([1, 5, 8, 9, 10, 17, 17, 20])
)) // 22
