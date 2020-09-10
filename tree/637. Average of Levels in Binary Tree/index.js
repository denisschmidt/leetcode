/*
  Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
  Example 1:

  Input:
    3
   / \
  9  20
    /  \
   15   7
  Output: [3, 14.5, 11]
  Explanation: The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
  Hence return [3, 14.5, 11].

  DFS realization

* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const { TreeNode } = require('../../algorithms/treeNode');

const averageOfLevels = function (root, depth = 0, counts = []) {
  if (!root) return null;
  counts[depth] = counts[depth] || { sum: 0, nodes: 0 };
  counts[depth].sum += root.val;
  counts[depth].nodes++;
  averageOfLevels(root.left, depth + 1, counts);
  averageOfLevels(root.right, depth + 1, counts);
  return depth || counts.map(item => item.sum / item.nodes);
};

const t1 = {
  val: 3,
  right: {
    val: 5,
    right: { val: 6, right: null, left: null },
    left: { val: 4, right: null, left: null },
  },
  left: {
    val: 1,
    right: { val: 2, right: null, left: null },
    left: { val: 0, right: null, left: null },
  },
};

console.log(averageOfLevels(t1));
