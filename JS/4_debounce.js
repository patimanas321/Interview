function debounce (callback, delay, isImmediate = false) {
    let timerId = null;

    return function(...args) {
        const shouldImmediatelyCall = isImmediate && timerId === null;

        if (shouldImmediatelyCall) {
            callback.apply(this, args);
        }
        
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            if (!isImmediate) {
                callback.apply(this, args);
            }
            timerId = null;
        }, delay);
    };
};

const debounced = debounce((arg) => console.log(arg), 1000);

debounced('abcd');
setTimeout(debounced, 300, 'efgh');
setTimeout(debounced, 1100, 'ijkl');