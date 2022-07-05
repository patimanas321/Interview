//  _________________
// |     |     |     |
// |  1  |  2  |  3  |
// |     | abc | def |
//  ----- ----- -----
// |     |     |     |
// |  4  |  5  |  6  |
// | ghi | jkl | mno |
//  ----- ----- -----
// |     |     |     |
// |  7  |  8  |  9  |
// | pqrs| tuv | wxyz|
//  ----- ----- -----
//       |     |
//       |  0  |
//       |     |
//        -----

function phoneNumberMnemonics(phoneNumber, prefix = '', res = []) {
    if (phoneNumber.length === 0) {
        res.push(prefix);
        return res;
    }

    const [firstNum, ...rest] = phoneNumber;
    const possibleChars = getCharacters(firstNum);
    for (let char of possibleChars) {
        phoneNumberMnemonics(rest, `${prefix}${char}`, res);
    }

    return res;
}

function getCharacters(num) {
    switch (num) {
        case '0':
            return ['0'];
        case '1':
            return ['1'];
        case '2':
            return ['a', 'b', 'c'];
        case '3':
            return ['d', 'e', 'f'];
        case '4':
            return ['g', 'h', 'i'];
        case '5':
            return ['j', 'k', 'l'];
        case '6':
            return ['m', 'n', 'o'];
        case '7':
            return ['p', 'q', 'r', 's'];
        case '8':
            return ['t', 'u', 'v'];
        case '9':
            return ['w', 'x', 'y', 'z'];
    }
}

console.log(JSON.stringify(
    phoneNumberMnemonics('1905')
));
// ["1w0j","1w0k","1w0l","1x0j","1x0k","1x0l","1y0j","1y0k","1y0l","1z0j","1z0k","1z0l"]