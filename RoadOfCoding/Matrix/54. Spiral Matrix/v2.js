/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // 1. Set a empty map.
    let records = [];
    let result = [];
    let tb = [];
    for (let index = 0; index < matrix; index++) {
        records.push(Array(matrix).fill(0, 0, matrix));
    }
    let t = 1;
    for (let index = 0; index < matrix; index++) {
        let m = [];
        for (let index = 0; index < matrix; index++) {
            m.push(t);
            t++;
        }
        tb.push(m);
    }

    // 2. Visited.
    function visited(row, col) {
        if (col == matrix || row == matrix || col < 0 || row < 0) {
            return;
        }
        if (records[row][col] == -101) {
            return;
        }
        records[row][col] = -101;
        result.push(tb[row][col]);
        console.log(`${row},${col}`);
        if (col < matrix) {
            visited(row, ++col);
        }
        if (row < matrix) {
            visited(++row, col);
        }
        if (col < 0) {
            visited(row, --col);
        }
        if (row < 0) {
            visited(--row, col);
        }
        return;
    }
    visited(0, 0);
    // console.log(JSON.stringify(result));
    console.log(JSON.stringify(tb,null,2));
    return
};
spiralOrder(3);