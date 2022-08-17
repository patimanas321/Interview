Array.prototype.myMap = function (callback) {
    let res = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
        res[i] = callback(this[i], i, this);
    }

    return res;
}
console.log(
    [1, 2, 3, 4].myMap((value, index, array) => {
        return value * 2;
    })
);

Array.prototype.myReduce = function(callback, initialValue) {
    let res = initialValue;
    let i = 0;
    if (initialValue === undefined) {
        res = this[0];
        i++;
    }

    for (i; i < this.length; i++) {
        res = callback(res, this[i], i, this);
    }

    return res;
};
console.log(
    [1, 2, 3, 4].myReduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue)
);

Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }

    return true;
};
console.log([1, 2, 3, 4].myEvery((val) => val % 2 === 0));

Array.prototype.myFilter = function(callback) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        if (callback(el, i, this)) {
            res.push(el);
        }
    }

    return res;
}
console.log([1, 2, 3, 4].myFilter((val) => val % 2 === 0));

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        
        if (callback(el, i, this)) {
            return el;
        }
    }
}
console.log([1, 2, 3, 4].myFind((val) => val % 3 === 0));

Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        
        if (callback(el, i, this)) {
            return i;
        }
    }

    return -1;
}
console.log([1, 2, 3, 4].myFindIndex((val) => val % 3 === 0));

Array.prototype.myValues = function* () {
    for (let i = 0; i < this.length; i++) {
        yield this[i];
    }
}

const iterator = ['a', 'b', 'c', 'd', 'e'].myValues();
console.log(iterator.next());               // Object { value: "a", done: false }
console.log(iterator.next().value);         // "b"
console.log(iterator.next()["value"]);      // "c"
console.log(iterator.next());               // Object { value: "d", done: false }
console.log(iterator.next());               // Object { value: "e", done: false }
console.log(iterator.next());               // Object { value: undefined, done: true }
console.log(iterator.next().value);         // undefined
