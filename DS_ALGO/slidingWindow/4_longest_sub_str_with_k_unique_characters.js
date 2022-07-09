function getUniqueCharacters(str, k) {
    let max = Number.MIN_VALUE;
    let start = 0, end = 0;
    const uniqueCharSet = new Set();

    while (end < str.length) {
        uniqueCharSet.add(str[end]);
        end ++;

        if (uniqueCharSet.size === k) {
            max = Math.max(max, end - start);
        } else if (uniqueCharSet.size > k) {
            uniqueCharSet.delete(str[start]);
            start ++;
        }
    }

    return max;
}

console.log(getUniqueCharacters('abcdefghij', 3)); // 3
console.log(getUniqueCharacters('abcdefghiijjkk', 3)); // 6
console.log(getUniqueCharacters('abccccdeeeeeeeeeeeefgh', 3)); // 17