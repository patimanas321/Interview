// MINIMUM SUBSET SUM DIFFERENCE

/**
 * @param {number[]} numbs
 * @return {number}
 */
 const minimumDifference = (numbs) => {
    const range = numbs.reduce((prev, current) => prev + current, 0);
    
    const allPossibleSubsetSums = getAllPossibleSubsetSums(numbs, range);
    const firstHalf = allPossibleSubsetSums.slice(0, Math.floor(range / 2)).filter(Boolean);

    return Math.abs(range - (2 * firstHalf[firstHalf.length - 1]));
};

const initializeDP = (numbs, range) => {
    const DP = new Array(numbs.length + 1);
    for (let i = 0; i < numbs.length + 1; i++) {
        DP[i] = new Array(range + 1);
        for (let j = 0; j < range + 1; j++) {
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

const getAllPossibleSubsetSums = (numbs, range) => {
    const DP = initializeDP(numbs, range);

    for (let numbsIndex = 1; numbsIndex < numbs.length + 1; numbsIndex++) {
        const num = numbs[numbsIndex];
        for (let sum = 1; sum < range + 1; sum++) {
            if (num <= sum) {
                DP[numbsIndex][sum] = DP[numbsIndex -1][sum - num] || DP[numbsIndex -1][sum];
            } else {
                DP[numbsIndex][sum] = DP[numbsIndex -1][sum];
            }
        }
    }
    return DP[numbs.length].map((isPossible, index) => isPossible ? index : 0);
};

console.log(minimumDifference([2,-1,0,4,-2,-9]));