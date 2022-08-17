Function.prototype.myCall = function (thisContext, ...args) {
    // create Symbol
    const symbol = Symbol();

    // store current function (this) in thisContext
    thisContext[symbol] = this;
    // execute the function
    const res = thisContext[symbol](...args);
    // delete function from thisContext
    delete thisContext[symbol];

    return res;
};

// Apply accepts array of args
Function.prototype.myApply = function (thisContext, args = []) {
    return this.myCall(thisContext, ...args);
}

// Bind can take two sets of arguments
Function.prototype.myBind = function (thisContext, ...args) {
    return (...newArgs) => this.myCall(thisContext, ...args, ...newArgs);
}


const original = {
    name: 'Manas',
    getName: function (message) {
        return `${message} ${this.name}`;
    }
};

const newObj = {
    name: 'Manas Updated'
};

console.log(original.getName('hi'));                        // hi Manas
console.log(original.getName.myCall(newObj, 'hi'));         // hi Manas Updated
console.log(original.getName.myApply(newObj, ['hi']));      // hi Manas Updated
console.log(original.getName.myBind(newObj)('hello'));      // hello Manas Updated
