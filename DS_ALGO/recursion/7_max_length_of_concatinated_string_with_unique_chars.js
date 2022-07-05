// You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
// Return the maximum possible length of s.
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let maxLength = 0;
    
    const traverse = (words, prefix = '') => {
        if (words.length === 0) {
            maxLength = Math.max(maxLength, prefix.length);
            return;
        }
        
        const word = words[0];
        if (!hasOverlappingChars(word, prefix)) {
            traverse(words.slice(1), prefix + word);
        }
        traverse(words.slice(1), prefix);
    };
    
    const hasOverlappingChars = (word, tracker) => {
        const concatenated = word + tracker;
        const concatenatedSet = new Set(concatenated.split(''));

        return concatenatedSet.size !== concatenated.length;
    };
    
    traverse(arr);
    return maxLength;
};

console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6