/**
 * Divide given array in such a way that both partitions have same sum
 * @param {*} numbs 
 */
function equalSumPartition(numbs) {
    const totalSum = numbs.reduce((prev, curr) => prev + curr, 0);

    // Sum should be even to partition equally
    if (totalSum % 2 !== 0) {
        return null;
    }

    const targetSum = totalSum / 2;

    const DP = initializeDP(numbs, targetSum);

    for (let numIndex = 1; numIndex < numbs.length + 1; numIndex++) {
        const num = numbs[numIndex - 1];
        for (let sum = 1; sum < targetSum + 1; sum++) {
            if (num > sum) {
                DP[numIndex][sum] = DP[numIndex - 1][sum];
            } else {
                const [leftVal, leftItems] = DP[numIndex - 1][sum - num];
                const [rightVal, rightItems] = DP[numIndex - 1][sum];

                if ((num + leftVal) > rightVal) {
                    DP[numIndex][sum] = [(num + leftVal), [numIndex - 1, ...leftItems]];
                } else {
                    DP[numIndex][sum] = [rightVal, rightItems];
                }
            }
        }
        const [maxRowSum, maxRowSumItems] = DP[numIndex][targetSum];
        if (maxRowSum === targetSum) {
            return [maxRowSumItems, numbs.map((_, index) => maxRowSumItems.includes(index) ? null : index).filter(num => num !== null)];
        }
    }

    return null;
}

function initializeDP(array, target) {
    const DP = [];
    for (let i = 0; i < array.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < target + 1; j++) {
            DP[i][j] = (i === 0 || j === 0) ? [0, []] : null;
        }
    }

    return DP;
};

console.log(JSON.stringify(
    equalSumPartition([1, 5, 11, 5])
));
// [[2], [0, 1, 3]]