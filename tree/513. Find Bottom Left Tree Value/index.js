/*

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
  Input:
      2
     / \
    1   3
  Output:
    1

Example 2:
  Input:
          1
         / \
        2   3
       /   / \
      4   5   6
         /
        7
  Output:
    7

Note: You may assume the tree (i.e., the given root node) is not NULL.

*/

const findBottomLeftValue = function(root) {
  let queue = [root];
  let levels = [0];
  let prevLevel = null;
  let ans = root.val;

  while (queue.length) {
    let node = queue.shift();
    let level = levels.shift();

    if (node !== null) {
      if (level > prevLevel) {
        ans = node.val;
      }

      prevLevel = level;
      queue.push(node.left);
      queue.push(node.right);
      levels.push(level + 1);
      levels.push(level + 1);
    }
  }

  return ans;
};

const findBottomLeftValue_II = function(root) {
  let nodeStack = [];
  let depthStack = [];
  let rightmostValueAtDepth = new Map();
  let maxDepth = -1;

  nodeStack.push(root);
  depthStack.push(0);

  while (nodeStack.length) {
    let node = nodeStack.pop();
    let depth = depthStack.pop();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);

      if (!rightmostValueAtDepth.has(depth)) {
        rightmostValueAtDepth.set(depth, node.val);
      }

      nodeStack.push(node.right);
      nodeStack.push(node.left);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }

  return rightmostValueAtDepth.get(maxDepth);
};
