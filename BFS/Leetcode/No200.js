/**
 * 2024-04-19 Daily challenge.
 * https://leetcode.com/problems/number-of-islands/
 * 200. Number of Islands
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let countIsLand = 0;
    for (let hIdx = 0; hIdx < grid.length; hIdx++) {
        for (let vIdx = 0; vIdx < grid[hIdx].length; vIdx++) {
            let list = [];
            if (grid[hIdx][vIdx] == "0") {
                continue;
            }
            list.push([hIdx, vIdx]);
            grid[hIdx][vIdx] = "0";
            while (list.length != 0) {
                let currnetPosition = list.pop();
                let veritcal = currnetPosition[0];
                let horizontal = currnetPosition[1];
                let up = "0";
                let down = "0";
                let right = "0";
                let left = "0";
                if(grid[veritcal + 1]){
                    up = grid[veritcal + 1][horizontal] ? grid[veritcal + 1][horizontal] : "0";
                }
                if(grid[veritcal - 1]){
                    down = grid[veritcal - 1][horizontal] ? grid[veritcal - 1][horizontal] : "0";
                }
                right = grid[veritcal][horizontal + 1] ? grid[veritcal][horizontal + 1] : "0";
                left = grid[veritcal][horizontal - 1] ? grid[veritcal][horizontal - 1] : "0";
                if (up != "0") {
                    list.push([veritcal + 1, horizontal]);
                    grid[veritcal + 1][horizontal] = "0";
                }
                if (down != "0") {
                    list.push([veritcal - 1, horizontal]);
                    grid[veritcal - 1][horizontal] = "0";
                }
                if (right != "0") {
                    list.push([veritcal, horizontal + 1]);
                    grid[veritcal][horizontal + 1] = "0";
                }
                if (left != "0") {
                    list.push([veritcal, horizontal - 1]);
                    grid[veritcal][horizontal - 1] = "0";
                }
            }
            countIsLand++;
        }
    }
    return countIsLand;
};