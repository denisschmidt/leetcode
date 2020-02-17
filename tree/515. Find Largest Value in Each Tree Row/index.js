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

// Time O(N)
// Space O(N)
const largestValues = function(root) {
  if (root === null) return [];
  let queue = [root];
  let levels = [0];

  let prevLevel = null;
  let result = [];
  let max = -Number.MAX_VALUE;

  while (queue.length) {
    let node = queue.shift();
    let level = levels.shift();

    if (node !== null) {
      if (level > prevLevel) {
        result.push(max);
        max = -Number.MAX_VALUE;
      }

      max = Math.max(max, node.val);
      prevLevel = level;

      queue.push(node.left);
      queue.push(node.right);
      levels.push(level + 1);
      levels.push(level + 1);
    }
  }

  result.push(max);

  return result;
};
