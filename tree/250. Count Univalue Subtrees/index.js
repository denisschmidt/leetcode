/*
Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example:

  Input:  root = [5,1,5,5,5,null,5]

      5
     / \
    1   5
   / \   \
  5   5   5

  Output: 4
 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

// Time O(N)
// Space O(N)
const countUnivalSubtrees = root => {
  let cnt = 0;
  helper(root, 0);
  return cnt;

  function helper(root, sum) {
    if (root === null) {
      return true;
    }

    if (!helper(root.left, root.val) | !helper(root.right, root.val)) {
      return false;
    }

    cnt++;

    return root.val === sum;
  }
};

// Time O(N)
// Space O(N)
const countUnivalSubtrees2 = root => {
  if (root === null) return 0;
  let cnt = 0;
  helper(root);
  return cnt;

  function helper(node) {
    if (node.left === null && node.right === null) {
      cnt++;
      return true;
    }

    let isValid = true;

    if (node.left) {
      isValid = helper(node.left) && isValid && node.left.val === node.val;
    }

    if (node.right) {
      isValid = helper(node.right) && isValid && node.right.val === node.val;
    }

    if (isValid === false) {
      return false;
    }

    cnt++;

    return true;
  }
};
