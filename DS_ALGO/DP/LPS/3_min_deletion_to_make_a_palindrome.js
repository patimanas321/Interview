// Minimum number of deletion in a string to make it a palindrome
// ans = Length of string - length of largest palindromic sub sequence

function minNoOfDelToMakeItPalindrome(str) {
    const lpsLength = longestPalindromicSubsequence(str);

    return str.length - lpsLength;
}

function longestPalindromicSubsequence(str) {
    const DP = initializeDP(str);

    for (let i = 1; i < str.length + 1; i++) {
        for (let j = 1; j < str.length + 1; j++) {
            const str1Char = str[i - 1];
            const str2Char = str[str.length - j];

            if (str1Char === str2Char) {
                DP[i][j] = DP[i - 1][j - 1] + 1;
            } else {
                DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
            }
        }
    }
    return DP[str.length][str.length];
}

function initializeDP(str1) {
    const DP = [];
    for (let i = 0; i < str1.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < str1.length + 1; j++) {
            DP[i][j] = 0;
        }
    }

    return DP;
}

console.log(minNoOfDelToMakeItPalindrome('abcdcba')); // 0
console.log(minNoOfDelToMakeItPalindrome('azbwcdxcbca')); // 4
