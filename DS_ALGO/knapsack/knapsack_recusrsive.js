/**
 * 
 * @param {Array([Number, Number])} items List of items as [Value, Weight]
 * @param {Number} capacity Capacity of Bag
 * @returns {Array([Number, Array(Number)])} [MaxProfit, [Index of elements in max profit]]
 */
function knapsackProblem(items, capacity, index = 0, memo = {}) {
    const key = `${capacity}-${index}`;

    if (key in memo) return memo[key];

    if (capacity === 0 || index === items.length) {
        return [0, []];
    }

    const [itemVal, itemWeight] = items[index];

    if (capacity < itemWeight) {
        return knapsackProblem(items, capacity, index + 1, memo);
    }

    const [leftVal, leftItems] = knapsackProblem(items, capacity - itemWeight, index + 1, memo);
    const [rightVal, rightItems] = knapsackProblem(items, capacity, index + 1, memo);

    if ((itemVal + leftVal) > rightVal) {
        memo[key] = [
            itemVal + leftVal,
            [index, ...leftItems]
        ];
    } else {
        memo[key] = [
            rightVal,
            rightItems
        ];
    }

    return memo[key];
}

console.log(JSON.stringify(knapsackProblem(
    [[1, 2], [4, 3], [5, 6], [6, 7]],
    10
)));