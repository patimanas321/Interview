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
                // OR replaced with + from previous implementation
                DP[numberIndex][sum] = DP[numberIndex - 1][sum - num] + DP[numberIndex - 1][sum];
            }
        }
    }

    return DP[numbs.length][target];
}

// False replaced with 0 and True replaced with 1 from previous implementation
const initializeDP = (numbs, target) => {
    const DP = [];
    for (let i = 0; i < numbs.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < target + 1; j++) {
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
};

console.log(subsetSum([2, 3, 5, 6, 8, 10], 10)); // 3