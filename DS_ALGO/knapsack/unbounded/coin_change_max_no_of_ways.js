function numberOfWaysToMakeChange(n, denoms) {
    const DP = initializeDP(n, denoms);

    for (let coinIndex = 1; coinIndex < denoms.length + 1; coinIndex++) {
        const coin = denoms[coinIndex - 1];
        for (let target = 1; target < n + 1; target++) {
            if (coin > target) {
                DP[coinIndex][target] = DP[coinIndex - 1][target];
            } else {
                DP[coinIndex][target] = DP[coinIndex][target - coin] + DP[coinIndex - 1][target];
            }
        }
    }

    return DP[denoms.length][n];
}

function initializeDP(n, denoms) {
    const DP = [];
    for (let i = 0; i < denoms.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < n + 1; j++) {
            if (i === 0 && j === 0) {
                DP[i][j] = 1;
            } else if (i === 0) {
                DP[i][j] = 0;
            } else if (j === 0) {
                DP[i][j] = 1;
            } else {
                DP[i][j] = null;
            }
        }
    }

    return DP;
}

console.log(
    numberOfWaysToMakeChange(7, [2, 3, 4, 7])
); // 3
