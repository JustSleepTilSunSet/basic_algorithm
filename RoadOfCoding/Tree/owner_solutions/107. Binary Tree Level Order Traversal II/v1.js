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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let queue = [];
    let result = [];
    if(root == null)
        return [];
    queue.push(root);
    while(queue.length!=0){
        let len = queue.length;
        let layer = [];
        for(let index = 0; index<len;index++){
            let head = queue.shift();
            layer.push(head.val);
            if(head.left!=null){
                queue.push(head.left);
            }
            if(head.right!=null){
                queue.push(head.right);
            }
        }
        result.unshift(layer);
    }
    return result;
};