/*
You are given a binary tree in which each node contains an integer value.

Find the number of paths that currSum to a given value.

The path does not need to start or end at the root or a leaf,
but it must go downwards (traveling only from parent nodes to child nodes).

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
  let map = new Map();
  map.set(0, 1);

  function findSum(node, currSum, map) {
    if (node === null) return;

    currSum += node.val;

    if (map.has(currSum - target)) {
      cnt += map.get(currSum - target);
    }

    if (!map.has(currSum)) {
      map.set(currSum, 1);
    } else {
      map.set(currSum, map.get(currSum) + 1);
    }

    findSum(node.left, currSum, map);
    findSum(node.right, currSum, map);
    map.set(currSum, map.get(currSum) - 1);
  }

  findSum(root, 0, map);
  return cnt;
};

const res = pathSum(makeTreeNodes([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8);
console.log('===', res);
