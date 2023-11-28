const treeCases = [15, 6, 18, 3, 7, 17, 20, 2, 4];

class Node {
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
        this.height = 0;
    }
}

function insertNode(root, nextNode) {
    if (root === undefined) {
        return nextNode;
    }

    if (root.data > nextNode.data) {
        root.left = insertNode(root.left, nextNode);
    }
    else if (root.data < nextNode.data) {
        root.right = insertNode(root.right, nextNode);
    }
    let leftHeight = root.left ? root.left.height : 0;
    let rightHeight = root.right ? root.right.height : 0;
    root.height = 1 + Math.max(leftHeight, rightHeight);
    return root;
}

let root = new Node(treeCases[0]);
insertNode(root, new Node(treeCases[1]));
insertNode(root,new Node(treeCases[2]));
insertNode(root,new Node(treeCases[3]));
insertNode(root,new Node(treeCases[4]));
insertNode(root,new Node(treeCases[5]));
insertNode(root,new Node(treeCases[6]));
insertNode(root,new Node(treeCases[7]));
insertNode(root,new Node(treeCases[8]));
console.log(root);