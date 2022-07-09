Promise.simpleAny = (array) => {
    return new Promise((resolve, reject) => {
        let isResolved = false;
        let counter = 0;

        const incrementCounter = () => {
            counter++;

            if (!isResolved && counter === array.length) {
                reject(new Error('Aggregate Error'));
            }
        };

        for (let i = 0; i < array.length; i++) {
            const promise = array[i];

            promise.then((data) => {
                if (!isResolved) {
                    resolve(data);
                }
                incrementCounter();
            }).catch(() => {
                incrementCounter();
            });
        }
    });
};

Promise.simpleAny([
    new Promise((resolve) => {
        setTimeout(resolve, 1000, 20);
    }),
    new Promise((resolve, reject) => {
        setTimeout(reject, 500, new Error('error two'));
    }),
]).then(res => {
    console.log(JSON.stringify(res))
});