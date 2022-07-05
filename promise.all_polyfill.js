function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
    
        promises.forEach((promise, index) => {
            // Allow non promise values
            if (!promise.then) {
                results[index] = promise;
                resolvedCount ++;
              
                return true;
            }
  
            promise.then((value) => {
                results[index] = value;
                resolvedCount ++;

                if (resolvedCount === promises.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
};

myPromiseAll([
    Promise.resolve(10),
    Promise.resolve({ abc: 123 }),
    30
]).then((results) => console.log(results))
.catch(error => console.log(error));