const treeCases = [15, 17, 16, 5, 6, 7, 17, 18, 20, 3, 2, 4];

class Node {
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
        this.height = 0;
    }
}

function R(root) {
    let newRoot = root.left;
    let T2 = newRoot.right;
    newRoot.right = root;
    root.left = T2;
    newRoot.height = Math.max(newRoot.left ? newRoot.left.height : 0, newRoot.right ? newRoot.right.height : 0) + 1;
    root.height = Math.max(root.left ? root.left.height : 0, root.right ? root.right.height : 0) + 1;
    return newRoot;
}

function L(root) {
    let newRoot = root.right;
    let T2 = newRoot.left;
    newRoot.left = root;
    root.right = T2;
    newRoot.height = Math.max(newRoot.left ? newRoot.height : 0, newRoot.right ? newRoot.height : 0) + 1;
    root.height = Math.max(root.left ? root.left.height : 0, root.right ? root.right.height : 0) + 1;
    return newRoot;
}

function UnbalanceInsertNode(root, nextNode) {
    if (root === undefined) {
        nextNode.height = 1;
        return nextNode;
    }
    if (root.data > nextNode.data) {
        root.left = AVLinsertNode(root.left, nextNode);
    }
    else if (root.data < nextNode.data) {
        root.right = AVLinsertNode(root.right, nextNode);
    }
    return root;
}

function AVLinsertNode(root, nextNode) {
    if (root === undefined) {
        nextNode.height = 1; //新節點算1的高度。
        return nextNode;
    }
    if (root.data > nextNode.data) {
        root.left = AVLinsertNode(root.left, nextNode);
    }
    else if (root.data < nextNode.data) {
        root.right = AVLinsertNode(root.right, nextNode);
    }
    let leftHeight = root.left ? root.left.height : 0;
    let rightHeight = root.right ? root.right.height : 0;
    root.height = 1 + Math.max(leftHeight, rightHeight);
    let balanceFactor = root ? leftHeight - rightHeight : 0;
    console.log(root.data, ',', balanceFactor);
    if (balanceFactor < -1 && nextNode.data > root.right.data) {
        root = L(root);
    }
    if (balanceFactor > 1 && nextNode.data < root.left.data) {
        root = R(root);
    }
    if (balanceFactor > 1 && nextNode.data > root.left.data) {
        root.left = L(root.left);
        root = R(root);
    }
    if (balanceFactor < -1 && nextNode.data < root.right.data) {
        root.right = R(root.right);
        root = L(root);
    }
    return root;
}

let root = new Node(treeCases[0]);
root = AVLinsertNode(root, new Node(treeCases[1]));
root = AVLinsertNode(root, new Node(treeCases[2]));
root = AVLinsertNode(root, new Node(treeCases[3]));
root = AVLinsertNode(root, new Node(treeCases[4]));
root = AVLinsertNode(root, new Node(treeCases[5]));
root = AVLinsertNode(root, new Node(treeCases[6]));
root = AVLinsertNode(root, new Node(treeCases[7]));
root = AVLinsertNode(root, new Node(treeCases[8]));
console.log(root);
