Promise.simpleAll = function (array) {
    return new Promise((resolve, reject) => {
        const res = [];
        let resolvedCounter = 0;
        for (let i = 0; i < array.length; i++) {
            const promise = array[i];

            promise.then((data) => {
                res[i] = data;
                resolvedCounter++;

                if (resolvedCounter === array.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
            });
        }
    });
};

Promise.simpleAll([
    Promise.resolve(10),
    new Promise((resolve) => {
        setTimeout(resolve, 1000, 20);
    }),
    Promise.resolve(30),
    new Promise((resolve) => {
        setTimeout(resolve, 500, 40);
    }),
    Promise.resolve(50)
]).then(res => console.log(JSON.stringify(res)));

