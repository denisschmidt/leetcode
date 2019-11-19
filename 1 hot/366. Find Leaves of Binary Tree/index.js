/*
Given a binary tree, collect a tree's nodes as if you were doing this:
Collect and remove all leaves, repeat until the tree is empty.

Example:

Input: [1,2,3,4,5]

          1
         / \
        2   3
       / \
      4   5

Output: [[4,5,3],[2],[1]]


Explanation:

1. Removing the leaves [4,5,3] would result in this tree:

          1
         /
        2


2. Now removing the leaf [2] would result in this tree:

          1


3. Now removing the leaf [1] would result in the empty tree:

          []
 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

// Buttom-up approach
const findLeaves = root => {
  const result = [];
  helper(root);
  return result;

  function helper(node) {
    if (!node) {
      return -1;
    }

    const height = 1 + Math.max(helper(node.left), helper(node.right));

    if (!result[height]) {
      result[height] = [];
    }

    result[height].push(node.val);

    return height;
  }
};

const res = findLeaves(makeTreeNodes([1, 2, 3, 4, 5]));
console.log(res);
