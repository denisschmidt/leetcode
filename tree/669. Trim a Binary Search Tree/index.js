/*
Given a binary search tree and the lowest and highest boundaries as L and R,
trim the tree so that all its elements lies in [L, R] (R >= L).

 You might need to change the root of the tree,
 so the result should return the new root of the trimmed binary search tree.

Time Complexity: O(N)O(N), where NN is the total number of nodes in the given tree.
We visit each node at most once.

Space Complexity: O(N)O(N).
Even though we don't explicitly use any additional memory, the call stack of our recursion could be as large as the number
of nodes in the worst case.


 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

'use strict'

const { TreeNode } = require('../../utils')

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (!root) return root
  if (root.val > R) return trimBST(root.left, L, R)
  if (root.val < L) return trimBST(root.right, L, R)
  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
}

const t = {
  val: 3,
  right: {
    val: 4,
    left: null,
    right: null
  },
  left: {
    val: 0,
    right: { val: 2, right: null, left: { val: 1, left: null, right: null } },
    left: null
  }
}

console.log(trimBST(t, 1, 3))




