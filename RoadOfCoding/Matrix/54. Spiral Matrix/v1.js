/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // 1. Set a empty map.
    let records = [];
    let result = [];
    for (let index = 0; index < matrix; index++) {
        records.push(Array(matrix).fill(0, 0, matrix));
        result.push(Array(matrix).fill(0, 0, matrix));
    }

    // 2. Visited.
    let sequence = 1;
    function visited(row, col){
        if(col==matrix || row == matrix || col <0 || row < 0){
            return;
        }
        if(records[row][col]==1){
            // console.log("here");
            records[row][col]= 1;
            return;
        }
        records[row][col]= 1;
        result[row][col] = sequence;
        sequence++;
        // 右邊走到底。
        visited(row,++col);
        visited(++row,col);
        visited(row,--col);
        visited(--row,col);
    }
    visited(0,0);
    console.log(JSON.stringify(records));
    console.log(JSON.stringify(result));
    return result;
};
spiralOrder(5);
spiralOrder(6);