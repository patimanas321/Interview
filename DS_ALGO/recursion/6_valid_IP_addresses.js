function getValidIPAddresses(str, prefix = [], res = []) {
    if (str.length === 0) {
        if (prefix.length === 4) {
            res.push(prefix.join('.'));
        }
        return res;
    }

    const options = getPossibleOptions(str, prefix);
    options.forEach(option => {
        getValidIPAddresses(
            str.substring(option.length),
            [...prefix, option],
            res
        );
    });

    return res;
}

function getPossibleOptions(str, prefix) {
    return [1, 2, 3]
        .map(opt => {
            const option = str.substring(0, opt);
            return isValidOption(str, option, opt, prefix) && option
        })
        .filter(Boolean);
}

function isValidOption(str, option, targetLength, prefix) {
    // should not be prefixed with 0
    if (Number(option).toString().length !== targetLength) {
        return false;
    }

    // Should not be greater than 255
    if (Number(option) > 255) {
        return false;
    }

    const remainingStr = str.replace(option, '');
    const remainingSlots = 4 - prefix.length - 1;
    // should not have more then 3 characters left for each slot
    return (remainingStr.length - (remainingSlots * 3)) <= 0;
}

console.log(JSON.stringify(
    getValidIPAddresses('1921680')
));
// [
//     "1.9.216.80",
//     "1.92.16.80",
//     "1.92.168.0",
//     "19.2.16.80",
//     "19.2.168.0",
//     "19.21.6.80",
//     "19.21.68.0",
//     "19.216.8.0",
//     "192.1.6.80",
//     "192.1.68.0",
//     "192.16.8.0"
// ]
