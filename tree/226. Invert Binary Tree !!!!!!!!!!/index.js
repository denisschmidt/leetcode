/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.


 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

const invertTree = function(root) {
  let q = [];
  q.push(root);

  while (q.length) {
    let node = q.shift();

    if (node) {
      let tmp = node.left;
      node.left = node.right;
      node.right = tmp;

      q.push(node.right);
      q.push(node.left);
    }
  }

  return root;
};

const res = invertTree(makeTreeNodes([4, 2, 7, 1, 3, 6, 9]));
console.log('----', res);
