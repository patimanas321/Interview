// Given two strings str1, str2. Return length of longest common sub sequence

function longestCommonSubSequence(str1, str2, count = 0, memo = {}) {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }

    const key = str1.length + '|' + str2.length;

    if (key in memo) {
        return memo[key];
    }

    const str1FirstChar = str1[0];
    const str2FirstChar = str2[0];

    if (str1FirstChar === str2FirstChar) {
        memo[key] = 1 + longestCommonSubSequence(str1.slice(1), str2.slice(1), count, memo);
    } else {
        memo[key] = Math.max(
            longestCommonSubSequence(str1.slice(1), str2, count, memo),
            longestCommonSubSequence(str1, str2.slice(1), count, memo)
        );
    }

    return memo[key];
}

console.log(
    longestCommonSubSequence('abcdgh', 'abedfhr') // 4
)