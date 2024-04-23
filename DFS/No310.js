/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    let map = {};
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
    let total = 0;
    let max = 0;
    function dfs(cost, subGraph, mark) {
        let getKeys = Object.keys(subGraph);
        for (let key of getKeys) {
            if (mark.includes(key))
                continue;
            cost = subGraph[key];
            mark.push(key);
            total+=dfs(cost+subGraph[key], map[key], mark);
            // mark.pop(key);
            max = total>max? total:max;
        }
        return cost;
    }
    let min = 20001;
    let result = {};
    for (let key of Object.keys(map)) {
        dfs(0, map[key], []);
        console.log(key,' ',max);
        if(min >= max){
            min = max;
            if(!result[min]){
                result[min] = [key];
            }else{
                result[min].push(key);
            }
        }
        max = 0;
        total = 0;
    }
    return result[min];
};
console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6,[[3,0],[3,1],[3,2],[3,4],[5,4]]))//Test case fail.