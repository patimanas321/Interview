function longestCommonSubString(str1, str2) {
    const DP = initializeDP(str1, str2);
    // Max length can be anywhere in the string, Hence can be placed anywhere in the grid. Keep track of max.
    let maxSubstrLength = 0;

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            const str1Char = str1[i - 1];
            const str2Char = str2[j - 1];

            if (str1Char === str2Char) {
                const length = DP[i - 1][j - 1] + 1;
                DP[i][j] = length;
                maxSubstrLength = Math.max(maxSubstrLength, length);
            } else {
                DP[i][j] = 0; // Reset counter
            }
        }
    }

    return maxSubstrLength;
}

function initializeDP(str1, str2) {
    const DP = [];
    for (let i = 0; i < str1.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < str2.length + 1; j++) {
            DP[i][j] = 0;
        }
    }

    return DP;
}

console.log(
    longestCommonSubString('abcdgh', 'abedfhr') // 4
);