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