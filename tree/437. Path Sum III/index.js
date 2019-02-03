/*
You are given a binary tree in which each node contains an integer value.

Find the number of paths that currSum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], currSum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that currSum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11


 */

const { makeTreeNodes, TreeNode } = require('../../algorithms/treeNode');

//  The time complexity is O(n)
// Recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const pathSum = function(root, target) {
  let cnt = 0;
  let preSum = new Map();
  preSum.set(0, 1);

  function findSum(node, currSum, preSum) {
    if (node === null) return;

    currSum += node.val;

    if (preSum.has(currSum - target)) {
      cnt += preSum.get(currSum - target);
    }

    if (!preSum.has(currSum)) {
      preSum.set(currSum, 1);
    } else {
      preSum.set(currSum, preSum.get(currSum) + 1);
    }

    findSum(node.left, currSum, preSum);
    findSum(node.right, currSum, preSum);
    preSum.set(currSum, preSum.get(currSum) - 1);
  }

  findSum(root, 0, preSum);
  return cnt;
};

const res = pathSum(makeTreeNodes([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8);
console.log('===', res);
