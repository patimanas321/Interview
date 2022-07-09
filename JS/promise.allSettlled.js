Promise.simpleAllSettled = (array) => {
    return new Promise((resolve) => {
        const res = [];
        let counter = 0;

        const incrementCounter = () => {
            counter ++;

            if (counter === array.length) {
                resolve(res);
            }
        };

        for (let i = 0; i < array.length; i++) {
            const promise = array[i];
            
            promise.then((data) => {
                res[i] = {
                    status: 'fulfilled',
                    value: data
                };
                incrementCounter();
            }).catch((err) => {
                res[i] = {
                    status: 'rejected',
                    reason: err
                };
                incrementCounter();
            })
        }
    });
};

Promise.simpleAllSettled([
    Promise.resolve(10),
    new Promise((resolve) => {
        setTimeout(resolve, 1000, 20);
    }),
    Promise.reject(new Error('error one')),
    new Promise((resolve, reject) => {
        setTimeout(reject, 500, new Error('error two'));
    }),
    Promise.resolve(50)
]).then(res => {
    console.log(JSON.stringify(res))
});

