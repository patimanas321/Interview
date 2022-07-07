// Given an array of matrix dimensions, determine minimum cost of multiplication

function matrixChainMultiplication(array) {
    if (array.length === 1) return 0;
    
    const min = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        const temp = 
            matrixChainMultiplication(array.slice(1)) +
            matrixChainMultiplication(array.slice(2)) +
            array
        res.push(multiplyMatrices(left, right));
    }

    res.sort((a, b) => a[1] > b[1]);
    return res[0][1];
}

matrixChainMultiplication([10, 20, 30, 40, 50]);