function equalSumPartitioning(numbs, parts) {
    const totalSum = numbs.reduce((prev, curr) => prev + curr, 0);
    if (totalSum % parts > 0) return [];

    const targetSum = totalSum / parts;
    const DP = initializeDP(numbs, targetSum);

    for (let numIndex = 1; numIndex < numbs.length + 1; numIndex++) {
        const num = numbs[numIndex - 1];
        for (let sum = 1; sum < targetSum + 1; sum++) {
            if (num > sum) {
                DP[numIndex][sum] = DP[numIndex - 1][sum];
            } else {
                const [option1Sum, option1Content] = DP[numIndex - 1][sum];
                const [option2Sum, option2Content] = DP[numIndex - 1][sum - num];

                // IMPORTANT
                if (option1Sum <= option2Sum + num) {
                    DP[numIndex][sum] = [option2Sum + num, [...option2Content, numIndex - 1]];
                } else {
                    DP[numIndex][sum] = [option1Sum, option1Content];
                }
            }
        }
    }

    const res = [];
    for (let numIndex = 1; numIndex < numbs.length + 1; numIndex++) {
        const [sum, numbers] = DP[numIndex][targetSum];
        if (sum === targetSum) {
            res.push(numbers);
        }
    }

    return res;
}

function initializeDP(numbs, sum) {
    const DP = [];
    for (let i = 0; i < numbs.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (i===0 || j===0) {
                DP[i][j] = [0, []];
            } else {
                DP[i][j] = null;
            }
        }
    }

    return DP;
}

console.log(
    JSON.stringify(
        equalSumPartitioning([1, 2, 3, 4, 5], 3)
    )
);
// [
//     [1,2],
//     [0,3],
//     [4]
// ]