/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxDepth = 0;
    function dfs(node, depth) {
        if (node == null) {
            return depth;
        }
        depth++;
        let leftDepth = dfs(node.left, depth);
        let rightDepth = dfs(node.right, depth);
        let tpMaxDepth = leftDepth>rightDepth?leftDepth:rightDepth;
        if(tpMaxDepth>maxDepth)
            maxDepth = tpMaxDepth;
    }
    dfs(root, 0);
    return maxDepth;
};