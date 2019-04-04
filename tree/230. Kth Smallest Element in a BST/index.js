/*

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.


Example 1:

  Input: root = [3,1,4,null,2], k = 1
     3
    / \
   1   4
    \
     2
  Output: 1

Example 2:

  Input: root = [5,3,6,2,4,null,null,1], k = 3
         5
        / \
       3   6
      / \
     2   4
    /
   1
  Output: 3

Follow up:
  What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
   How would you optimize the kthSmallest routine?


 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

// DFS :
// time complexity: O(N * M)

const kthSmallest = function(root, k) {
  let nodeStack = [];
  let ans = [];

  nodeStack.push(root);

  while (nodeStack.length) {
    let node = nodeStack.pop();

    if (node !== null) {
      ans.push(node.val);
      if (node.right) {
        nodeStack.push(node.right);
      }

      if (node.left) {
        nodeStack.push(node.left);
      }
    }
  }
  ans.sort((a, b) => a - b);

  return ans[k - 1];
};

kthSmallest(makeTreeNodes([3, 1, 4, null, 2]), 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DFS in-order iterative:
//time complexity: O(N) best

//      3
//     / \
//    1   4
//     \
//      2

const kthSmallest2 = (root, k) => {
  const nodeStack = [];
  let node = root;
  let count = 0;

  while (nodeStack.length || node !== null) {
    while (node !== null) {
      nodeStack.push(node);
      node = node.left;
    }
    console.log('---', nodeStack);
    node = nodeStack.pop();
    if (++count === k) {
      return node.val;
    }
    node = node.right;
  }

  return Number.MIN_VALUE;
};

const res = kthSmallest2(makeTreeNodes([3, 1, 4, null, 2]), 1);
console.log('---', res);
