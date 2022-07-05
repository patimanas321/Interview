/**
 * Is there any subset in array which sums up to target
 * @param {Array<number>} numbs 
 * @param {number} target 
 * @returns True OR False
 */
function subsetSum(numbs, target) {
    const DP = initializeDP(numbs, target);

    for (let numberIndex = 1; numberIndex < numbs.length + 1; numberIndex++) {
        const num = numbs[numberIndex - 1];

        for (let sum = 0; sum < target + 1; sum++) {
            if (num > sum) {
                DP[numberIndex][sum] = DP[numberIndex - 1][sum];
            } else {
                DP[numberIndex][sum] = DP[numberIndex - 1][sum - num] || DP[numberIndex - 1][sum];
            }
        }
    }

    return DP[numbs.length][target];
}

const initializeDP = (numbs, target) => {
    const DP = [];
    for (let i = 0; i < numbs.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < target + 1; j++) {
            if (i === 0 && j === 0) {
                DP[i][j] = true;
            } else if (i === 0) {
                DP[i][j] = false;
            } else if (j === 0) {
                DP[i][j] = true;
            } else {
                DP[i][j] = null;
            }
        }
    }
    return DP;
};

console.log(subsetSum([2, 3, 7, 8, 10], 11)); // true