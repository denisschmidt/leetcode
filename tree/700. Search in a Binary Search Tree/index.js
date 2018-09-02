/*

Given the root node of a binary search tree (BST) and a value. 

You need to find the node in the BST that the node's value equals the given value. 

Return the subtree rooted with that node. 
If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

You should return this subtree:

      2     
     / \   
    1   3

In the example above, if we want to search the value 5, 
since there is no node with value 5, we should return NULL.


*/


'use strict'

const { TreeNode } = require('../../utils')


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  const tree = new TreeNode()

  const search = (node) => {
    if (!node) {
      return null
    }

    if(node.val === val) {
      tree.val = node.val
      tree.left = node.left
      tree.right = node.right
    }

    search(node.left)
    search(node.right)
    return tree
  }

  const node = search(root)

  if (!node.val) {
    return []
  }

  return node
}

const t1 = {
  val: 4,
  right: { 
    val: 7, 
    right: null, 
    left: null 
  },
  left: { 
    val: 2,
    right: { val: 3, right: null, left: null },
    left: { val: 1, right: null, left: null } 
  } 
}

console.log(searchBST(t1, 2))
