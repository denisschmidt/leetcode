/*
Given an integer array with no duplicates.
A maximum tree building on this array is defined as follow:

1) The root is the maximum number in the array.
2) The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3) The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.
    6
  /   \
  3     5
  \    /
    2  0
      \
      1

*/

const { TreeNode } = require('../../algorithms/treeNode');

// Time O(N)
// Space O(N)
const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) {
    return null;
  }

  let max = 0;
  let maxIndex = 0;

  nums.forEach((num, index) => {
    if (max < num) {
      max = num;
      maxIndex = index;
    }
  });

  const node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return node;
};

// Time O(N)
// Space O(N)
const constructMaximumBinaryTree_II = function(nums) {
  let dummy = new TreeNode(null);

  helper(dummy, nums);

  return dummy;

  function helper(node, array) {
    if (array.length == 0) {
      return;
    }

    let max = 0;
    let maxIndex = -1;

    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
        maxIndex = i;
      }
    }

    let left = array.slice(0, maxIndex);
    let right = array.slice(maxIndex + 1);

    if (left.length === 1) {
      node.left = new TreeNode(left[0]);
      left = [];
    } else if (left.length > 1) {
      node.left = new TreeNode(null);
    }

    if (right.length === 1) {
      node.right = new TreeNode(right[0]);
      right = [];
    } else if (right.length > 1) {
      node.right = new TreeNode(null);
    }

    node.val = max;

    helper(node.left, left);
    helper(node.right, right);
  }
};
