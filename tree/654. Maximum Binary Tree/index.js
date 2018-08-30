  /*
Given an integer array with no duplicates. 
A maximum tree building on this array is defined as follow:

1) The root is the maximum number in the array.
2) The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3) The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.
    6
  /   \
  3     5
  \    / 
    2  0   
      \
      1

*/
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

'use strict'

const { TreeNode } = require('../../utils')

var constructMaximumBinaryTree = function(nums) {
  if(!nums.length) {
    return null
  }

  let max = 0
  let maxIndex = 0

  nums.forEach((num, index) => {
    if (max < num) {
      max = num
      maxIndex = index
    }
  })
  
  const node = new TreeNode(max)
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
  
  return node 
};

