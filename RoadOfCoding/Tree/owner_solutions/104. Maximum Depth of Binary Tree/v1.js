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
var maxDepth = function(root) {
    let totalHeight = 0;
    let layerCountMax = 0;
    let currHeight = 1;
    let queue =[];
    if(root==null){
     return 0;
    }
    queue.push(root);
    while(queue.length!=0){
     let head = queue.shift();
     layerCountMax++
     if(layerCountMax==Math.pow(2,currHeight-1)){
         totalHeight++;
         layerCount = 0;
         currHeight++;
     }
     if(head.left!=null){
         queue.push(head.left);
     }
     if(head.right!=null){
         queue.push(head.right);
     }
    } 
    return totalHeight;
 };