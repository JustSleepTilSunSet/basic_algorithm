/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let index = 0;
    let result = [];
    let dfs = function (node){
      if(node==null){
          return;
      }
      result.push(node.val);
      for(let idx = 0;idx<node.children.length;idx++){
          dfs(node.children[idx]);
      }
    }
      dfs(root);
      
      return result;
  };