function getStockSpan(array) {
    const stack = [];
    const res = [];

    const getPrevGreater = (index) => {
        while (stack.length > 0 && array[index] >= array[stack[stack.length - 1]]) {
            stack.pop();
        }

        return stack[stack.length -1] ?? -1;
    };

    for (let index = 0; index < array.length; index++) {
        res.push(getPrevGreater(index));
        stack.push(index);
    }

    return res.map((el, index) => index - el);
}

console.log(getStockSpan([100, 80, 60, 70, 60, 75, 85])) // [1, 1, 1, 2, 1, 4, 6]