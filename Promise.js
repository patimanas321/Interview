
const promise = Promise.resolve(10);
promise.then(data => console.log(++data));
promise.then(data => console.log(data));

/**
 * OUTPUT
 * 10
 * 11
 */

// EXPLAIN HOW THIS WORKS________________________
function display(data) {
    console.log(data);
}
const futureData = fetch('https://twitter.com/john/tweet/1');
futureData.then(display);
console.log('Hi John');

// Promise
// - value
// - state - 'pending'/'fulfilled'/'rejected'
// - onfulfillment [] - hidden property


// EXPLAIN HOW THIS WORKS________________________
console.log('Start Script');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});
console.log('End Script');

/**
 * OUTPUT
 * Start Script
 * End Script
 * Promise 1
 * Promise 2
 * setTimeout
 */