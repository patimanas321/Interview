/**
 * @param {string} s
 * @return {number}
 */
 var minMovesToMakePalindrome = function(s, swapCounter = 0) {
    const arr = typeof s === 'string' ? s.split('') : s;
    if (arr.length === 0) return swapCounter;
    
    while(arr[0] !== arr[arr.length-1]) {
        let indexOfOtherChar = arr.lastIndexOf(arr[0]);
        
        swap(arr, indexOfOtherChar);
        swapCounter ++;
    }

    return minMovesToMakePalindrome(arr.slice(1, arr.length - 1), swapCounter);
};

var swap = (string, index) => {
    const temp = string[index];
    string[index] = string[index + 1];
    string[index + 1] = temp;
};

console.log(minMovesToMakePalindrome('aabb'));