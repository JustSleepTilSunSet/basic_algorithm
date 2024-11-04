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
var zigzagLevelOrder = function(root) {
    let queue = [];
    let result = [];
    let round = 0;
    if(root == null){
        return result;
    }
    queue.push(root);
    while(queue.length!=0){
        let size = queue.length;
        let tmp = [];
        if(round%2==0){
            // console.log("右起至左")
            for(let index = 0; index<size;index++){
                let first = queue.pop();
                tmp.unshift(first.val);
                if(first.right){
                    queue.unshift(first.right);
                }
                if(first.left){
                    queue.unshift(first.left);
                }
            }
            result.push(tmp);
        }
        else{
            // 左起至右
            // console.log("左起至右")
            for(let index = 0; index<size;index++){
                let first = queue.shift();
                tmp.push(first.val);
                if(first.left){
                    queue.push(first.left);
                }
                if(first.right){
                    queue.push(first.right);
                }
            }
            result.push(tmp.reverse());
        }
        round++;
        tmp = [];
    }
    // console.log(result);
    return result;
};