const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
};

class MyPromise {
    #thenCbs = [];
    #catchCbs = [];
    #state = STATE.PENDING;
    #value;

    constructor(executer) {
        const onResolve = (value) => {
            if (this.#state !== STATE.PENDING) return;
    
            this.#value = value;
            this.#state = STATE.FULFILLED;
            this.#runCallbacks();
        };

        const onReject = (error) => {
            if (this.#state !== STATE.PENDING) return;
    
            if (this.#catchCbs.length === 0) {
                throw new UncaughtPromiseError(error);
            }
    
            this.#value = error;
            this.#state = STATE.REJECTED;
            this.#runCallbacks();
        };

        try {
            executer(onResolve, onReject);
        } catch (error) {
            onReject(error);
        }
    }

    #runCallbacks() {
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => callback(this.#value));
            this.#thenCbs = [];
        }

        if (this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => callback(this.#value));
            this.#catchCbs = [];
        }
    }

    then(thenCallback, catchCallback) {
        // Chaining support
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push((result) => {
                if (thenCallback) {
                    try {
                        resolve(thenCallback(result));
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    resolve(result);
                }
            });
            this.#catchCbs.push((result) => {
                if (catchCallback) {
                    try {
                        resolve(catchCallback(result));
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    reject(result);
                }
            });

            this.#runCallbacks();
        });
    }

    catch(callback) {
        return this.then(null, callback);
    }

    finally(callback) {
        return this.then(
            result => {
                callback();
                return result;
            },
            result => {
                callback();
                throw result;
            }
        )
    }

    static resolve(value) {
        return new Promise(resolve => {
            resolve(value)
        })
    }

    static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                    .then(value => {
                        completedPromises++
                        results[i] = value
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
                    .catch(reject)
            }
        })
    }

    static allSettled(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise(resolve => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                    .then(value => {
                        results[i] = { status: STATE.FULFILLED, value }
                    })
                    .catch(reason => {
                        results[i] = { status: STATE.REJECTED, reason }
                    })
                    .finally(() => {
                        completedPromises++
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
            }
        })
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve).catch(reject)
            })
        })
    }

    static any(promises) {
        const errors = []
        let rejectedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise.then(resolve).catch(value => {
                    rejectedPromises++
                    errors[i] = value
                    if (rejectedPromises === promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"))
                    }
                })
            }
        })
    }
}

class UncaughtPromiseError extends Error {
    constructor(error) {
        super(error)

        this.stack = `(in promise) ${error.stack}`
    }
}

module.exports = MyPromise;

const promise = new MyPromise((resolve, reject) => {
    resolve(10);
});

const then = (value) => {
    console.log(value);
    return value * 2;
};
promise
    .then(then)
    .then(then)
    .then(then)
    .then(then)
    .then(then);
