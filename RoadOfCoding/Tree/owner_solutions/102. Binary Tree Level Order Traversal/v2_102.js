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
    
    if(root==null){
        return result;
    }
    layer.push(root);
    while(layer.length!=0){
        let layerSize = layer.length;
        let temp = [];
        for(let index = 0; index < layerSize; index++ ){
            let top = layer.shift();
            temp.push(top.val);
            if(top.left!=null){
                layer.push(top.left);
            }
            if(top.right!=null){
                layer.push(top.right);
            }
        }
        result.push(temp);
        
    }
    return result;
};