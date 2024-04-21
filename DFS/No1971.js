/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 * 1971. Find if Path Exists in Graph
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let isFound = false;
    let mark = [];
    // Against n =1, edges = []
    if (n == 1)
        return true;
    function dfs(source) {
        // Against markable node.
        if(mark.includes(source)){
            return false;
        }
 
        // To mark currnet node.
        mark.push(source);

        // To search relational node.
        let relationNode = [];
        for (let eIdx = 0; eIdx < edges.length; eIdx++) {
            if (edges[eIdx].includes(source) ) {
                let othersIdx = edges[eIdx].findIndex((v) => v != source);
                let others = edges[eIdx][othersIdx];
                if (others == destination) {
                    isFound = true;
                    return true;
                }
                relationNode.push(others);
            }
        }

        // dfs with relational node.
        for(let rIdx = 0;rIdx<relationNode.length;rIdx++){
            if(isFound)
                break;
            dfs(relationNode[rIdx]);
        }

        return false;
    }

    dfs(source);
    return isFound;
};
console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9));
