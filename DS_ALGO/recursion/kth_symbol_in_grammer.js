/**
 * 
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
var kthGrammar = function(n, k) {
    // Base case
    if (n === 1 || k == 1) return 0;
    
    // Previous one is at current position / 2
    // On each n increase, word/result length doubles
    const previous = kthGrammar(n-1, Math.ceil(k/2));
    
    // If previous is 0, current is either 0 OR 1, because 0 will be written as [0, 1]
    let options = [0, 1];
    // If previous is 0, current is either 1 OR 0, because 1 will be written as [1, 0]
    if (previous === 1) {
        options = [1, 0];
    }
    
    // If k is even, pick second option from previous,
    // Else pick first option
    if (k % 2 === 0) {
        return options[1];
    } else {
        return options[0];
    }
};

console.log(kthGrammar(4, 8));  // 1