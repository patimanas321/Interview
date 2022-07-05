let array = [];
if (condition1) {
    array.push(100);
}
array.push(200);
array.push(300);
if (condition2) {
    array.push(400);
}
array.push(500);

// Refactored
const value = 10;
let array = [
    ...(condition1 ? [100] : []),
    200,
    300,
    ...(condition2 ? [400] : []),
    500
];


//__________________________________
const names = ['John', 'Harry'];

// First 2 entries
const [first, second] = names;

// Print your name if entry not present
const [first, second = "manas"] = names;

// Print last name
const [...rest, second = "manas"] = names; // Not allowed!!!!!!!!

// Object destructuring________________________
const user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const {name: callSign} = user;
//_________________________________________
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
};
const {id, name, education: {degree}} = user;
console.log(degree); //prints: Masters

//__________________________________________
const user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const {id, name, education: {degree} = {degree: 'No Degree'}} = user;
console.log(degree); //prints: undefined

//Optional chaining__________________________________
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        school: {
            name: 'some school',
            addr: 'address'
        }
    }
};
// user?.education?.school?.name || 'No School'




