/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Example:

  BSTIterator iterator = new BSTIterator(root);
  iterator.next();    // return 3
  iterator.next();    // return 7
  iterator.hasNext(); // return true
  iterator.next();    // return 9
  iterator.hasNext(); // return true
  iterator.next();    // return 15
  iterator.hasNext(); // return true
  iterator.next();    // return 20
  iterator.hasNext(); // return false
 

Note:
  next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
  You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  let stack = [];
  let node = root;
  let arr = [];

  while (stack.length || node !== null) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    arr.push(node.val);
    node = node.right;
  }

  this.arr = arr.reverse();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.arr.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
const l = makeTreeNodes([7, 3, 15, null, null, 9, 20]);

BSTIterator(l);
