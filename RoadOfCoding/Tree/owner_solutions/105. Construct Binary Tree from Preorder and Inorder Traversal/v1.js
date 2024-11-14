/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0 || inorder.length == 0){
        return null;
    }
    let rootVal = (preorder.shift());
    let root = new TreeNode(rootVal);
    let rootIndex = inorder.findIndex((value)=> value == rootVal);

    root.left = buildTree(preorder, inorder.slice(0,rootIndex));
    root.right = buildTree(preorder, inorder.slice(rootIndex+1,inorder.length));
    return root;
};