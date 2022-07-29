function minNumberOfCoinsForChange(denoms, n) {
    const ways = new Array(n + 1).fill(Number.MAX_VALUE);
    ways[0] = 0;

    for (let coin of denoms) {
        for (let i = 1; i < ways.length; i++) {
            if (i >= coin) {
                ways[i] = Math.min((ways[i - coin] + 1), ways[i]);
            }
        }
    }

    return ways[n] === Number.MAX_VALUE ? -1 : ways[n];
}

console.log(minNumberOfCoinsForChange([10, 1, 5], 7));
