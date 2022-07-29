var longestConsecutive = function(nums) {
    const visited = {};
    let numSet = new Set(nums);
    let ans = 0;

    for (const num of nums) {
        if (visited[num]) continue;
        // Can be a start of sequence
        if (!numSet.has(num - 1)) {
            let start = num;
            let counter = 0;
            visited[start] = true;
            while (numSet.has(start)) {
                counter ++;
                start++;
            }

            ans = Math.max(ans, counter);
        }
    }

    return ans;
};

console.log(longestConsecutive([100,4,200,1,3,2]));