// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subsets = function (nums, prefix = [], res = []) {
    if (nums.length === 0) {
        // No more elements
        res.push(prefix);
    } else {
        const [firstEl, ...rest] = nums;
        
        // Do not include element
        subsets(rest, prefix, res);
        // Include element
        subsets(rest, [firstEl, ...prefix], res);
    }

    return res;
};

console.log(JSON.stringify(
    subsets([1,2,3])
));