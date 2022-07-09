function largestSubArray(array, targetSum) {
    let max = Number.MIN_VALUE;
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < array.length) {
        sum += array[end];
        end ++;

        if (sum > targetSum) {
            sum -= array[start];
            start ++;
        }

        if (sum === targetSum) {
            max = Math.max(max, end - start);
        }
    }

    return max;
}

console.log(largestSubArray([3, 2, 1, 1, 2, 4, 5], 9));  // 5
console.log(largestSubArray([4, 1, 1, 1, 2, 3, 5], 5));  // 4