// given any string return all possible strings with spaces at any place

function permutationWithSpaces(str, prefix = '', res = []) {
    // Base case
    if (!str.length) {
        res.push(prefix);
        return res;
    }

    const firstChar = str[0];
    const rest = str.slice(1);

    if (prefix.length) {
        // include with space
        permutationWithSpaces(rest, prefix + '_' + firstChar, res);
    }
    // include without space
    permutationWithSpaces(rest, prefix + firstChar, res);

    return res;
}

console.log(JSON.stringify(
    permutationWithSpaces('manas')
))