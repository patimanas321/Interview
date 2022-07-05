function getNoOfSubsetsWithGivenDiff(array, diff) {
    const arraySum = array.reduce((prev, curr) => prev + curr, 0);
    // We know partition one sum will be below.
    const partitionOneSum = (arraySum + diff) / 2;

    const DP = initializeDP(array, partitionOneSum);

    for (let numIndex = 1; numIndex < array.length + 1; numIndex++) {
        const num = array[numIndex - 1];
        for (let sum = 1; sum < partitionOneSum + 1; sum++) {
            if (num > sum) {
                DP[numIndex][sum] = DP[numIndex - 1][sum];
            } else {
                DP[numIndex][sum] = DP[numIndex - 1][sum] + DP[numIndex - 1][sum - num];
            }
        }
    }
    return DP[array.length][partitionOneSum];
}

function initializeDP(array, sum) {
    const DP = [];
    for (let i = 0; i < array.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (i === 0 && j === 0) {
                DP[0][0] = 1;
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

console.log(getNoOfSubsetsWithGivenDiff([1, 1, 2, 3], 1)); // 3
