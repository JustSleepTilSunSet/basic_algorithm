/**
 * Daily challenge:
 * https://leetcode.com/problems/minimum-height-trees/?envType=daily-question&envId=2024-04-22
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    // 邊點的特徵就是都是, degree(v) = 1
    let map = {};
    if (n == 1)
        return [0];
    if (edges.length == 1)
        return edges[0];
    for (let eIdx = 0; eIdx < edges.length; eIdx++) {
        let edge = edges[eIdx];
        if (map[edge[0]] == undefined) {
            map[edge[0]] = {};
        }
        if (map[edge[1]] == undefined) {
            map[edge[1]] = {};
        }
        map[edge[0]][edge[1]] = 1;
        map[edge[1]][edge[0]] = 1;
    }
    let connections = [];
    let max = 0;
    function dfs(key, cost) {
        //全走訪
        if (connections.length == n) {
            return max;
        }
        for (let sub of Object.keys(map[key])) {
            if (connections.includes(sub)) {
                continue;
            }
            connections.push(sub);
            if (cost + map[key][sub] > max) {
                max = cost + map[key][sub];
            }
            dfs(sub, cost + map[key][sub]);
        }
        return cost;
    }
    let result = {};
    let bestIdx = 20001;
    for (let nIdx = 0; nIdx < n; nIdx++) {
        if (Object.keys(map[nIdx]).length == 1)//邊點不用問
            continue;
        connections = [nIdx + ""];
        dfs(nIdx, 0);
        if (bestIdx > max) {
            bestIdx = max;
        }
        if (!result[max]) {
            result[max] = [nIdx];
        } else {
            result[max].push(nIdx);
        }
        max = 0;
    }
    // console.log(result);
    return result[bestIdx];

};
// console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
// console.log(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]))//Test case fail.
console.log(findMinHeightTrees(63, [[0, 1], [1, 2], [0, 3], [2, 4], [0, 5], [4, 6], [1, 7], [2, 8], [3, 9], [4, 10], [1, 11], [3, 12], [2, 13], [1, 14], [8, 15], [9, 16], [6, 17], [8, 18], [4, 19], [13, 20], [19, 21], [8, 22], [19, 23], [23, 24], [14, 25], [10, 26], [3, 27], [21, 28], [22, 29], [6, 30], [26, 31], [16, 32], [15, 33], [17, 34], [3, 35], [14, 36], [29, 37], [26, 38], [34, 39], [39, 40], [14, 41], [20, 42], [6, 43], [30, 44], [9, 45], [11, 46], [18, 47], [3, 48], [3, 49], [27, 50], [12, 51], [14, 52], [22, 53], [30, 54], [6, 55], [14, 56], [12, 57], [2, 58], [55, 59], [24, 60], [13, 61], [40, 62]]));
// Time Exceeds
