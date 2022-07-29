/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = [1];
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length) continue;
        prefix = prefix * nums[i];
        res[i + 1] = prefix;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + 1 < 0) continue;
        postfix = postfix * nums[i];
        res[i - 1] = res[i - 1] * postfix;
    }
    return res;
};
console.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])))