var numIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const tracker = {};
    let counter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const key = i + '-' + j;

            if (grid[i][j] === '1' && !tracker[key]) {
                counter++;
                BFS(grid, i, j, tracker);
            }
        }
    }

    return counter;
};

var BFS = (grid, i, j, tracker) => {
    const queue = [[i, j]];

    while (queue.length) {
        const el = queue.shift();
        tracker[el[0] + '-' + el[1]] = true;

        const neiboughers = [[-1, 0], [0, -1], [0, 1], [1, 0]];

        for (let neibougher of neiboughers) {
            const [cellI, cellJ] = [el[0] + neibougher[0], el[1] + neibougher[1]];
            if (tracker[cellI + '-' + cellJ]) {
                continue;
            }
            const cell = grid[cellI]?.[cellJ];

            if (cell === '1') {
                queue.push([cellI, cellJ]);
            }
        }
    }
}

console.log(
    numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ])
);