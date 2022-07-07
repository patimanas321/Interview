function subArrayOfSizeK(array, k) {
    let sum = 0;
    let i = 0;
    while (i < k) {
        sum += array[i];
        i++;
    }
    let largest = sum;
    while(i < array.length) {
        sum += array[i];
        sum -= array[i-k];
        largest = Math.max(largest, sum);
        i++;
    }

    return largest;
}

console.log(subArrayOfSizeK([5, 4, 3, 2, 1], 3));