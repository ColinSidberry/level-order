// TreeNode class definition
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrder(root) {
    const result = [];

    function traverse(node, level) {
        if (node === null) return;

        if (result.length === level) {
            result.push([]);
        }

        result[level].push(node.val);

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);
    return result;
}

// Sample execution
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelOrder(root)); // Output: [[1], [2, 3], [4, 5, 6, 7]]
