const userFunctions = {
    incrementScore: function () {
        this.score ++;
    },
    getScore: function () {
        return this.score;
    }
};

const UserCreator1 = function (name, score) {
    const user = Object.create(userFunctions);

    user.name = name;
    user.score = score;

    return user;
};

const user1 = UserCreator1('Manas', 10);

const UserCreator2 = function (name, score) {
    this.name = name;
    this.score = score;
};

UserCreator2.prototype = userFunctions;
const user2 = new UserCreator2('Manas', 10);


class UserCreator3 {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    incrementScore () {
        this.score ++;
    }

    getScore () {
        return this.score;
    }
};

const user3 = new UserCreator3('Manas', 10);

console.log(user1, user2, user3);

