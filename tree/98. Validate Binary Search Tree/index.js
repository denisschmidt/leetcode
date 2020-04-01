/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example 1:
      2
    / \
   1   3

  Input: [2,1,3]
  Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

  Input: [5,1,4,null,null,3,6]
  Output: false

Explanation: The root node's value is 5 but its right child's value is 4.

*/

// Inorder Traversal
// Time O(N)
// Space O(N)
const isValidBST = function(root) {
  let stack = [];
  let node = root;
  let inorder = -Number.MAX_VALUE;

  while (stack.length || node !== null) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (inorder >= node.val) return false;

    inorder = node.val;
    node = node.right;
  }

  return true;
};

// Time O(N)
// Space O(N)
const isValidBST_II = root => {
  if (root === null) return true;

  return helper(root).isBST;

  function helper(node) {
    if (node === null) {
      return new MinMax();
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let m = new MinMax();

    if (!left.isBST || !right.isBST || left.max >= node.val || node.val >= right.min) {
      m.isBST = false;
      return m;
    }

    m.isBST = true;

    m.min = node.left !== null ? left.min : node.val;
    m.max = node.right !== null ? right.max : node.val;

    return m;
  }
};

class MinMax {
  constructor(min, max, isBST) {
    this.min = min || Number.MAX_VALUE;
    this.max = max || -Number.MAX_VALUE;
    this.isBST = isBST || true;
  }
}

// Time O(N)
// Space O(N)
const isValidBST_III = root => {
  return helper(root, null, null);

  function helper(node, lower, upper) {
    if (node === null) return true;

    let val = node.val;

    if (lower !== null && val <= lower) return false;
    if (upper !== null && val >= upper) return false;

    if (!helper(node.right, val, upper)) return false;

    if (!helper(node.left, lower, val)) return false;

    return true;
  }
};
