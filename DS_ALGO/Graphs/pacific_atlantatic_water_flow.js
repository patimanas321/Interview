var pacificAtlantic = function (heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;

    const pac = {};
    const atl = {};

    const DFS = (i, j, visit, prevHeight) => {
        const cell = heights[i]?.[j];
        if (cell === undefined || cell < prevHeight || visit[i + '-' + j]) return;

        visit[i + '-' + j] = true;

        DFS(i + 1, j, visit, cell);
        DFS(i - 1, j, visit, cell);
        DFS(i, j + 1, visit, cell);
        DFS(i, j - 1, visit, cell);
    };

    for (let i = 0; i < ROWS; i++) {
        DFS(i, 0, pac, 0);
        DFS(i, COLS - 1, atl, 0);
    }

    for (let i = 0; i < COLS; i++) {
        DFS(0, i, pac, 0);
        DFS(ROWS - 1, i, atl, 0);
    }

    const res = [];
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const key = i + '-' + j;
            if (pac[key] && atl[key]) {
                res.push([i, j]);
            }
        }
    }

    return res;
};

console.log(
    pacificAtlantic([
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4]
    ])
)