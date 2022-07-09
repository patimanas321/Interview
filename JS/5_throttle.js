function throttle(callback, delay) {
    let timerId = null;
    let lastCalledTime = 0;

    const throttled = function (...args) {
        const timeElapsed = Date.now() - lastCalledTime;
        const timeRemaining = delay - timeElapsed;

        if (timeRemaining <= 0) {
            callback.apply(this, args);
            lastCalledTime = Date.now();
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback.apply(this, args);
                lastCalledTime = Date.now();
                timerId = null;
            }, timeRemaining);
        }
    };

    throttled.cancel = () => clearTimeout(timerId);

    return throttled;
}
