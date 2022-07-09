class MyPromise {
    constructor(executor) {
        this.data = null;
        this.status = 'PENDING';
        this.onFulfilled = [];
        this.onRejected = [];

        const onResolve = (data) => {
            this.data = data;
            this.status = 'FULFILLED';
            this.runCallbacks();
        };

        const onReject = (error) => {
            this.data = error;
            this.status = 'REJECTED';
            this.runCallbacks();
        };

        executor(onResolve, onReject);
    }

    runCallbacks() {
        if (this.status === 'FULFILLED') {
            for (const cb of this.onFulfilled) {
                cb(this.data);
            }
            this.onFulfilled = [];
        }

        if (this.status === 'REJECTED') {
            for (const cb of this.onRejected) {
                cb(this.data);
            }
            this.onRejected = [];
        }
    }

    then(callback) {
        // return new promise
        return new MyPromise((resolve, reject) => {
            // Push a new function into onFulfilled []
            // This accepts data when fulfilled and resolves the new new promise with callback's return value
            this.onFulfilled.push((data) => resolve(callback(data)));
            // Push a reject into onRejected []
            this.onRejected.push(reject)
            this.runCallbacks();
        });
    }

    catch(callback) {
        return new MyPromise((resolve) => {
            this.onRejected.push((error) => {
                resolve(callback(error))
            });
            this.runCallbacks();
        });
    }
}

new MyPromise((resolve) => resolve(100))
    .then((data) => data * 2 )
    .then((data) => data + 50 )
    .then((data) => console.log(data))
    .catch((error) => console.log(error)); // 250

new MyPromise((_, reject) => reject(new Error('Something went wrong!!!')))
    .then((data) => console.log('I am not called'))
    .then((data) => console.log('I am not called'))
    .catch((error) => {
        console.log(error);

        return 100
    })
    .then((data) => console.log(data)); // 100