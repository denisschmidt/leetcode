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

const { TreeNode } = require('../../algorithms/treeNode')

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {Boolean}
 */

const leafSimilar = function(root1, root2) {
  let a1 = []
  let a2 = []

  const fn = (node, arr) => {
    if (!node) return null
    fn(node.left, arr)
    fn(node.right, arr)
    if (!node.left && !node.right) arr.push(node.val)
    return arr
  }
  a1 = fn(root1, a1)
  a2 = fn(root2, a2)
  for(let i=0;i<a1.length;i++)
    if (a1[i] !== a2[i]) return false
  return true
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
