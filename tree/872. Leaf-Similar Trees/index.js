/*
Consider all the leaves of a binary tree.
From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { TreeNode } = require('../../utils')

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const leafSimilar = function(root1, root2, arr = []) {
  if (!root1) return null
  leafSimilar(root1.left, arr )
  leafSimilar(root1.right, arr)
  if (!root1.left && !root1.right) {
    console.log(root1)
    arr.push(root1.val)
  }
  return arr
}

const t1 = {
  val: 3,
  right: {
    val: 1,
    right: { val: 8, right: null, left: null },
    left: { val: 9, right: null, left: null }
  },
  left: {
    val: 5,
    right: { val: 2, right: { val: 4, right: null, left: null }, left: { val: 7, right: null, left: null } },
    left: { val: 6, right: null, left: null }
  }
}

const t2 = {
  val: 3,
  right: {
    val: 1,
    right: { val: 8, right: null, left: null },
    left: { val: 9, right: null, left: null }
  },
  left: {
    val: 5,
    right: { val: 2, right: { val: 4, right: null, left: null }, left: { val: 7, right: null, left: null } },
    left: { val: 6, right: null, left: null }
  }
}


const res = leafSimilar(t1, t2)

console.log(res)
