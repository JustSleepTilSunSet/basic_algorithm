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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let result = true;
    if(root == null){
        return true;
    }
    function dfs(node){
        if(node == null){
            return 0;
        }
        let LD =dfs(node.left);
        let RD =dfs(node.right);
        if(Math.abs(LD - RD) > 1 && result){
            result = false;
        }
        let k = Math.max(LD,RD) + 1;
        // console.log(`[${node.val}]`);
        // console.log(k);
        return k;
    }
    dfs(root,0);
    // console.log(result);
    return result;
};