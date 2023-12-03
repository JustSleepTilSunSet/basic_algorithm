/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = [4, 2, 7, 1, 3];
let val = 5;

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    } else if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    }
    return root;

};


/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root.val < val) {
        if (!root.right) {
            root.right = new TreeNode(val);
            return;
        }
        insertIntoBST(root.right, val);
    } else {
        if (!root.left) {
            root.left = new TreeNode(val);
            return;
        }
        insertIntoBST(root.left, val);
    }

};