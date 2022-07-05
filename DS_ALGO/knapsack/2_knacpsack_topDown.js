/**
 * 
 * @param {Array([Number, Number])} items List of items as [Value, Weight]
 * @param {Number} capacity Capacity of Bag
 * @returns {Array([Number, Array(Number)])} [MaxProfit, [Index of elements in max profit]]
 */
function knapsackProblem(items, capacity) {
    const DP = initializeDP(items, capacity);

    for (let n = 1; n < items.length + 1; n++) {
        const [itemVal, itemWeight] = items[n - 1];
        for (let w = 1; w < capacity + 1; w++) {
            if (w < itemWeight) {
                DP[n][w] = DP[n - 1][w];
            } else {
                const [leftVal, leftItems] = DP[n - 1][w - itemWeight];
                const [rightVal, rightItems] = DP[n - 1][w];

                if ((itemVal + leftVal) > rightVal) {
                    DP[n][w] = [
                        itemVal + leftVal,
                        [...leftItems, n - 1]
                    ];
                } else {
                    DP[n][w] = [
                        rightVal,
                        rightItems
                    ];
                }
            }
        }
    }

    return DP[items.length][capacity];
}

function initializeDP(items, capacity) {
    const DP = new Array(items.length + 1);
    for (let n = 0; n < items.length + 1; n++) {
        DP[n] = new Array(capacity + 1);
        for (let w = 0; w < capacity + 1; w++) {
            if (n === 0 || w === 0) {
                DP[n][w] = [0, []];
            }
        }
    }

    return DP;
}

console.log(JSON.stringify(knapsackProblem(
    [[1, 2], [4, 3], [5, 6], [6, 7]],
    10
)));