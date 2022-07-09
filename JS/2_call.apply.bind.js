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