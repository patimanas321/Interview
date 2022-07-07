function minInsertionsToMakePalindrome(str1) {
    const str2 = str1.split('').reverse(); // We can also read the same string from behind as str2
    const DP = initializeDP(str1, str2);

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            const str1Char = str1[i - 1];
            const str2Char = str2[j - 1]; // str1[str1.length - j];

            if (str1Char === str2Char) {
                DP[i][j] = DP[i - 1][j - 1] + 1;
            } else {
                DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
            }
        }
    }
    return DP[str1.length][str2.length];
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

console.log(minInsertionsToMakePalindrome('cbbd')); // 2
