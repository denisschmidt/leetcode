/*

Given a binary tree, return the sum of values of its deepest leaves.
 
Example 1:
  Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
  Output: 15
 

Constraints:
  The number of nodes in the tree is between 1 and 10^4.
  The value of nodes is between 1 and 100.

*/

// Time O(N)
// Space O(N)
const deepestLeavesSum = function(root) {
  let stack = [root];
  let depth = [0];
  let map = new Map();
  let maxDepth = 0;

  while (stack.length) {
    let node = stack.pop();
    let d = depth.pop();

    if (node !== null) {
      if (!map.has(d)) {
        map.set(d, []);
      }

      map.get(d).push(node.val);

      maxDepth = Math.max(maxDepth, d);

      stack.push(node.right);
      stack.push(node.left);

      depth.push(d + 1);
      depth.push(d + 1);
    }
  }

  let result = 0;

  for (let val of map.get(maxDepth).values()) {
    result += val;
  }

  return result;
};
