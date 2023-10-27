const testCases = [15, 6, 18, 3, 7, 17, 20, 2, 4];
class TreeNode {
    constructor(key, value) {
        this.key = key;//index in array.
        this.value = value;//value in array.
        this.left = undefined;
        this.right = undefined;
    }
}

function toInsert(root, next) {
    if (root.value > next.value) {
        if (root.left === undefined) {
            root.left = next;
        }
        else {
            return toInsert(root.left, next);
        }
    }
    else if (root.value < next.value) {
        if (root.right === undefined) {
            root.right = next;
        }
        else {
            return toInsert(root.right, next);
        }
    }
}

/**
 * Search a target value from the tree.
 * @param {Integer} target 
 */
function toSearch(searchedNode, target) {
    if (typeof searchedNode != 'undefined') {
        if (target == searchedNode.value) {
            console.log(`Target ${target} == ${searchedNode.value} found at position ${searchedNode.key} from the array.`);
            return searchedNode.key;
        } else if (target > searchedNode.value) {
            return toSearch(searchedNode.right, target);
        } else if (target < searchedNode.value) {
            return toSearch(searchedNode.left, target);
        }
    }
    console.log(`Target value not found from the tree.`);
    return -1;// for not found.
}

/**
 * Delete a node from the tree.
 */
function toDeleteByValue(current, value) {
    console.log(`Specified element not exist.`);
    return -1;// for not found.
}

let root = new TreeNode(0, testCases.shift());
for (let [key, value] of Object.entries(testCases)) {
    let next = new TreeNode(Number(key) + Number(1), value);// bcuz, index 0 is root of tree.
    toInsert(root, next);
}

console.log(toSearch(root, 3000));
console.log(toSearch(root, 20));