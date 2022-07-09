Promise.simpleRace = (array) => {
    return new Promise((resolve, reject) => {
        let isSettled = false;
        for (let i = 0; i < array.length; i++) {
            const promise = array[i];
            
            promise.then(data => {
                if (!isSettled) resolve(data);
            }).catch(error => {
                if (!isSettled) reject(error);
            });
        }
    });
};

Promise.simpleRace([
    new Promise((resolve) => {
        setTimeout(resolve, 1000, 20);
    }),
    new Promise((resolve, reject) => {
        setTimeout(reject, 500, new Error('error two'));
    }),
]).then(res => {
    console.log(JSON.stringify(res))
});