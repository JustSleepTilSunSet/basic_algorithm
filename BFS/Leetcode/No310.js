/**
 * Daily challenge:
 * https://leetcode.com/problems/minimum-height-trees/?envType=daily-question&envId=2024-04-22
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    // 邊點的特徵就是都是, degree(v) = 1
    let degrees = new Array(n).fill(0);
    let connections = {};
    if (n == 1)
        return [0];
    if (edges.length == 1)
        return edges[0];
    for (let eIdx = 0; eIdx < edges.length; eIdx++) {
        let edge = edges[eIdx];
        if (connections[edge[0]] == undefined) {
            connections[edge[0]] = [];
        }
        if (connections[edge[1]] == undefined) {
            connections[edge[1]] = [];
        }
        degrees[edge[0]]++;
        degrees[edge[1]]++;
        connections[edge[0]].push(edge[1]);
        connections[edge[1]].push(edge[0]);
    }
    let queue = [];
    for (let idx = 0; idx < n; idx++) {
        if (degrees[idx] == 1) {
            queue.push(idx);
        }
    }
    console.log(degrees);
    console.log(connections);
    let remaining = n;
    while (remaining > 2) {// By 定義
        let countCurrNodes = queue.length;
        remaining = remaining - countCurrNodes; // 邊點刪除
        //請注意: 這裡的邊點刪除一次是全砍
        for (let i = 0; i < countCurrNodes; i++) {
            let curr = queue.shift();
            // console.log(curr);
            let relation = connections[curr].shift();
            // console.log(relation);
            // let removeIndex = connections[relation].findIndex((v) => v == curr);
            // console.log(connections[relation]);
            connections[relation] = connections[relation].filter(v=>v!=curr);
            // connections[relation].shift();
            // console.log(connections[relation]);
            degrees[relation]--;
            if (degrees[relation] === 1) {
                queue.push(relation);
            }
        }
    }
    return queue;
};
console.log(findMinHeightTrees(11,[[0,1],[0,2],[2,3],[0,4],[2,5],[5,6],[3,7],[6,8],[8,9],[9,10]]))
