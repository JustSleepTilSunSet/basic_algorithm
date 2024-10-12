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
var levelOrder = function(root) {
    let result = [];
    let layer = [];
    let temp = [];
    if(root==null){
        return result;
    }
    layer.push(root);
    let layerDegree = 1; // 現在深度
    let currentCount = 0;
    while(layer.length!=0){
        let top = layer.shift();
        temp.push(top.val);
        currentCount ++;
        // console.log(top.val);
        // console.log(currentCount);
        if(currentCount == Math.pow(2,layerDegree - 1)){
            // console.log('done');
            result.push(temp);
            temp = [];
            currentCount = 0;
            layerDegree ++;
        }
        if(top.left!=null){
            layer.push(top.left);
        }
        if(top.right!=null){
            layer.push(top.right);
        }
    }
    return result;
};