function countAnagramOccurrences(str, anagram) {
    const anagramLetterCounter = {};
    let counter = 0;
    for (const char of anagram) {
        anagramLetterCounter[char] = (anagramLetterCounter[char] ?? 0) + 1;
    }
    const wordLetterCounter = {};
    for (let i = 0; i < str.length; i++) {
        wordLetterCounter[str[i]] = (wordLetterCounter[str[i]] ?? 0) + 1;

        if (i < anagram.length - 1) continue;
        wordLetterCounter[str[i - anagram.length]] = wordLetterCounter[str[i - anagram.length]] - 1;

        if (matchLetterCounters(anagramLetterCounter, wordLetterCounter)) {
            counter ++;
        }
    }

    return counter;
}

function matchLetterCounters(option1, option2) {
    let isValid = true;

    for (const key in option1) {
        if (option1[key] !== option2[key]) {
            isValid = false
        }
    }

    return isValid;
}

console.log(countAnagramOccurrences('aabaabaa', 'aaba')); // 4