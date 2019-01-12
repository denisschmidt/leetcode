/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7

Note: The merging process must start from the root nodes of both trees.


Input:

TreeNode {
  val: 1,
  right: TreeNode { val: 2, right: null, left: null },
  left:
   TreeNode {
     val: 3,
     right: null,
     left: TreeNode { val: 5, right: null, left: null } } }


Complexity Analysis:

Time complexity : O(n)
A total of n nodes need to be traversed.
Here, n represents the minimum number of nodes from the two given trees.

Auxiliary Space : O(n)
The depth of the recursion tree can go upto n in case of a skewed tree.
In average case, depth will be O(logn).

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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  const merge = (node1, node2) => {
    if(!node1) {
      return node2;
    }
    if (!node2) {
      return node1;
    }
    node1.val += node2.val;
    node1.left = merge(node1.left, node2.left);
    node1.right = merge(node1.right, node2.right);
    return node1;
  }
  return merge(t1, t2);
};


const t1 = {
  val: 1,
  right: {
    val: 2,
    right: null,
    left: null
  },
  left: {
    val: 3,
    right: null,
    left:{ val: 5, right: null, left: null }
  }
}

const t2 = {
  val: 2,
  right: {
    val: 3,
    right: { val: 7, right: null, left: null },
    left: null
  },
  left: {
    val: 1,
    right: { val: 4, right: null, left: null },
    left: null
  }
}

console.log(mergeTrees(t1, t2))
