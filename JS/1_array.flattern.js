// RECURSIVELY solution
Array.prototype.simpleFlat = function () {
    const res = [];
    const flatten = (array) => {
        for (const el of array) {
            if (Array.isArray(el)) {
                res.concat(flatten(el));
            } else {
                res.push(el);
            }
        }

        return res;
    };

    return flatten(this);
};







console.log([
    [
        1,
        [
            [[[[[[2]]]]]],
            [
                [[3]],
                [
                    4,
                    [[],[],[], [[5]]],
                    [6, 7, 8]
                ]
            ]
        ]
    ]
].simpleFlat());