function longestRepeatingSubSequence(str1) {
    const DP = initializeDP(str1);

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            const str1Char = str1[i - 1];
            const str2Char = str1[j - 1];

            // If i == j It appears only once in the string
            // Hence can not be used
            if (str1Char === str2Char && i !== j) {
                DP[i][j] = DP[i - 1][j - 1] + str1Char;
            } else {
                const option1 = DP[i - 1][j];
                const option2 = DP[i][j - 1];

                if (option1.length > option2.length) {
                    DP[i][j] = option1;
                } else {
                    DP[i][j] = option2;
                }
            }
        }
    }

    return DP[str1.length][str1.length];
}

function initializeDP(str1) {
    const DP = [];
    for (let i = 0; i < str1.length + 1; i++) {
        DP[i] = [];
        for (let j = 0; j < str1.length + 1; j++) {
            DP[i][j] = '';
        }
    }

    return DP;
}

console.log(
    longestRepeatingSubSequence('aabebcdd') // abd
);