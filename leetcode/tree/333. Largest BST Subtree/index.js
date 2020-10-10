/*

Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), 
where largest means subtree with largest number of nodes in it.

Note: A subtree must include all of its descendants.

Example:
  Input: [10,5,15,1,8,null,7]

    10 
    / \ 
    5  15 
  / \   \ 
  1   8   7

  Output: 3
  Explanation: The Largest BST Subtree in this case is the highlighted one.
              The return value is the subtree's size, which is 3.

Follow up: Can you figure out ways to solve it with O(n) time complexity?

*/

// Time O(N)
// Space O(N)
const largestBSTSubtree = root => {
  if (root === null) return 0;

  return helper(root).size;

  function helper(node) {
    if (node === null) {
      return new MinMax();
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let m = new MinMax();

    if (left.isBST == false || right.isBST == false || left.max >= node.val || right.min <= node.val) {
      m.isBST = false;
      m.size = Math.max(left.size, right.size);
      return m;
    }

    m.isBST = true;
    m.size = left.size + right.size + 1;

    // если node.left равен нулю, установить root.val как min
    // или установить в min значение из левого минимума
    m.min = node.left !== null ? left.min : node.val;

    // если root.right равен нулю установить root.val как max
    // или установить в max значение из правого максимума
    m.max = node.right !== null ? right.max : node.val;

    return m;
  }
};

class MinMax {
  constructor(min, max, isBST, size) {
    this.min = min || Number.MAX_VALUE;
    this.max = max || -Number.MAX_VALUE;
    this.isBST = isBST || true;
    this.size = size || 0;
  }
}
