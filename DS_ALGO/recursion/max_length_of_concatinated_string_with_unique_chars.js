/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let maxLength = 0;
    
    const traverse = (words, prefix = {length: 0, tracker: {}}) => {
        if (words.length === 0) {
            maxLength = Math.max(maxLength, prefix.length);
            return;
        }
        
        const word = words[0];
        if (!hasOverlappingChars(word, prefix.tracker)) {
            const tracker = {...prefix.tracker};
            for(let i=0; i < word.length; i++) {
                tracker[word[i]] = true;
            }
            traverse(words.slice(1), {
                length: prefix.length + word.length,
                tracker
            });
        }
        traverse(words.slice(1), prefix);
    };
    
    const hasOverlappingChars = (word, tracker) => {
        for(let i=0; i < word.length; i++) {
            if (tracker[word[i]]) {
                return true;
            }
        }
        return false;
    };
    
    traverse(arr);
    return maxLength;
};


console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6