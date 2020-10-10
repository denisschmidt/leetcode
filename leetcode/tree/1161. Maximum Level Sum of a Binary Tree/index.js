/*

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

Example 1:
  Input: [1,7,0,7,-8,null,null]
  Output: 2
  Explanation: 
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.
 

Note:
  The number of nodes in the given tree is between 1 and 10^4.
  -10^5 <= node.val <= 10^5

*/

// Time O(N)
// Space O(N)
const maxLevelSum = root => {
  let queue = [root];
  let map = new Map();
  let maxSum = 0;
  let minLevel = 1;
  let level = 1;

  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;

    for (let k = 0; k < size; k++) {
      let node = queue.shift();
      sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (maxSum < sum) {
      maxSum = sum;
      minLevel = level;
    }

    level++;
  }

  return minLevel;
};
