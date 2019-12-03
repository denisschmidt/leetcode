/*
Given a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

 */

// DFS
// Time O(N)
// Space O(N)
const rightSideView = function(root) {
  let nodeStack = [];
  let depthStack = [];
  let maxDepth = -1;
  let rightmostValueAtDepth = new Map();
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
      nodeStack.push(node.left);
      nodeStack.push(node.right);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }
  const arr = [];
  for (let i = 0; i <= maxDepth; i++) {
    arr.push(rightmostValueAtDepth.get(i));
  }
  return arr;
};

// BFS
// Time O(N)
// Space O(N)
const rightSideView2 = function(root) {
  let nodeQueue = [];
  let depthQueue = [];
  let maxDepth = -1;

  let rightmostValueAtDepth = new Map();
  nodeQueue.push(root);
  depthQueue.push(0);

  while (nodeQueue.length) {
    let node = nodeQueue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);
      rightmostValueAtDepth.set(depth, node.val);

      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  const res = [];
  for (let i = 0; i <= maxDepth; i++) {
    res.push(rightmostValueAtDepth.get(i));
  }
  return res;
};
