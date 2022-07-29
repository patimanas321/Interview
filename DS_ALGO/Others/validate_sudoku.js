/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        if (!validateRow(board, i)) return false;
        if (!validateCol(board, i)) return false;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!validateSubGrid(board, i * 3, j * 3)) return false;
        }
    }

    return true;
};

var validateRow = (board, i) => {
    const row = [];
    for (const cell of board[i]) {
        if (cell === '.') continue;

        const no = Number(cell);
        if (no > 9 || no < 1) {
            return false;
        }
        row.push(no);
    }
    // Check for repetitions
    if (row.length !== new Set(row).size) {
        return false;
    }
    return true;
};

var validateCol = (board, i) => {
    const col = [];
    for (let j = 0; j < 9; j++) {
        const cell = board[j][i];
        if (cell === '.') continue;

        const no = Number(cell);
        if (no > 9 || no < 1) {
            return false;
        }
        col.push(no);
    }

    // Check for repetitions
    if (col.length !== new Set(col).size) {
        return false;
    }
    return true;
};

var validateSubGrid = (board, i, j) => {
    const endRow = i+3;
    const endCol = j+3;
    const list = [];

    for (let row = i; row < endRow; row++) {
        for (let col = j; col < endCol; col++) {
            const cell = board[row][col];
            if (cell === '.') continue;

            const no = Number(cell);
            if (no > 9 || no < 1) {
                return false;
            }
            list.push(no);
        }
    }
    // Check for repetitions
    if (list.length !== new Set(list).size) {
        return false;
    }
    return true;
}

console.log(
    isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
)