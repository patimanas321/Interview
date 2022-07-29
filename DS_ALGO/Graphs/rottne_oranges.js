var orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const queue = [];

    let freshOrangeCount = 1;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < ROWS; j++) {
            const cell = grid[i][j];

            if (cell === 2) {
                queue.push([i, j]);
            }
            freshOrangeCount++;
        }
    }

    let timeCounter = -1;
    while (queue.length) {
        timeCounter++;
        const countInCurrentPass = queue.length;
        for (let i = 0; i < countInCurrentPass; i++) {
            const [elR, elC] = queue.shift();
            grid[elR][elC] = 2;
            freshOrangeCount--;

            if (grid[elR + 1]?.[elC] === 1) {
                queue.push([elR + 1, elC]);
            }

            if (grid[elR - 1]?.[elC] === 1) {
                queue.push([elR - 1, elC]);
            }

            if (grid[elR]?.[elC + 1] === 1) {
                queue.push([elR, elC + 1]);
            }

            if (grid[elR]?.[elC - 1] === 1) {
                queue.push([elR, elC - 1]);
            }
        }
    }

    return freshOrangeCount === 0 ? timeCounter : -1;
};

console.log(
    orangesRotting(
        [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
    )
)