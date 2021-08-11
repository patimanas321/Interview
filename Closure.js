// Explain___________________________________________________
function outer() {
    let counter = 0;
    function incrementCounter() {
        counter ++;
        console.log(counter);
    }

    return incrementCounter;
}

const myFunction = outer();
myFunction();
myFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();

/**
 * OUTPUT
 * 1
 * 2
 * 1
 * 2
 */
