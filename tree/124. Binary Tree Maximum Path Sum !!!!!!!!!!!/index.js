/*
 Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from
some starting node to any node in the tree along the parent-child connections.

The path must contain at least one node and does not need to go through the root.

Example 1:
  Input: [1,2,3]

       1
      / \
     2   3
Output: 6

Example 2:
  Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7
Output: 42
 */

const { makeTreeNodes, TreeNode } = require('../../algorithms/treeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const dfs = function(root) {
  let maxValue = -Number.MAX_VALUE;

  const maxPathDown = node => {
    if (node === null) return 0;

    let left = Math.max(0, maxPathDown(node.left));
    let right = Math.max(0, maxPathDown(node.right));

    maxValue = Math.max(maxValue, left + right + node.val);
    return Math.max(left, right) + node.val;
  };

  maxPathDown(root);
  return maxValue;
};

const input = [-10, 9, 20, null, null, 15, 7];
const res = dfs(makeTreeNodes(input));
console.log('---', res);

/*
   -10
   / \
  9  20
    /  \
   15   7
 */
