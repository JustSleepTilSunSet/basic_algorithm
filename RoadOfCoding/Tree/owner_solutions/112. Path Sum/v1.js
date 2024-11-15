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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = [];
    let tp = [];
    if(root != null){
    dfs = function (root,targetSum){
            let tpSum = targetSum - root.val;
            // (root.left == null&&root.right == null) 該題必須探到底才給過，單節點不形成路徑。
            if(tpSum == 0 && (root.left == null&&root.right == null)){
                tp.push(root.val);
                result = tp;
                return null;
            }
            if(root.left != null){
                tp.push(root.val);
                dfs(root.left,tpSum);
                tp.pop();
            }
            if(root.right != null){
                tp.push(root.val);
                dfs(root.right,tpSum);
                tp.pop();
            }
            return root;
        }
        dfs(root,targetSum);
    }
    return result.length > 0;
};