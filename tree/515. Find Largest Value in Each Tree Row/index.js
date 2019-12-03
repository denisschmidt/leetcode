/*
You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]

 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

// Time O(N)
// Space O(N)
const largestValues = root => {
  const queue = [root];
  const depthQueue = [0];
  const arr = [];

  while (queue.length) {
    let node = queue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      arr[depth] = typeof arr[depth] === 'number' ? Math.max(arr[depth], node.val) : node.val;
      queue.push(node.left);
      queue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  return arr;
};
