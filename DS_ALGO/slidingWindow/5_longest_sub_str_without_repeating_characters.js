function getLongestSubStr(str) {
    let start = 0, end = 0;
    let max = '';
    let charCounter = new Set();

    while (end < str.length) {
        const endChar = str[end];
        
        charCounter.add(endChar);
        // repeating character found
        if (charCounter.size !== (end - start + 1)) {
            while (str[start] !== endChar) {
                charCounter.delete(str[start]);
                start ++;
            }
            start ++;
        }

        const newString = str.slice(start, end + 1);
        if (newString.length > max.length) {
            max = newString;
        }
        end ++;
    }

    return max;
}

console.log(getLongestSubStr('clementisacap')) // mentisac

