// ***   Encapsulation   ***
const user1 = {
    name: 'John',
    score: 1,
    increment: () => {
        user1.score++;
    }
}

// Prototype
function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function() {
    this.score++;
};
const user2 = new UserCreator('John', 1);

// Class with new keyword
class UserCreator1 {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment () {
        this.score++;
    }
}

const user2 = new UserCreator('John', 1);


// JS Internal functions
user2.hasOwnProperty();
