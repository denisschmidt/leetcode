/*

We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Time Complexity: O(N)O(N), where NN is the number of nodes in the tree.
We process each node once.

Space Complexity: O(H)O(H), where HH is the height of the tree.
This represents the size of the implicit call stack in our recursion.

Алгоритм, если нам нужен самый нижний узел для проверки и потом по стеку след и след

 */

const { TreeNode } = require('../../algorithms/treeNode')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(node1) {
  if (!node1) return null
  node1.left = pruneTree(node1.left)
  node1.right = pruneTree(node1.right)
  if (!node1.left && !node1.right && node1.val === 0) return null
  return node1
}

const t1 = {
  val: 0,
  right: {
    val: 0,
    right: { val: 11, right: null, left: null },
    left: { val: 1, right: null, left: null } },
  left: null
}

pruneTree(t1)
