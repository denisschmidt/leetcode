/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// BFS
// Time O(N)
// Space O(N)
const levelOrder = root => {
  if (root === null) return [];

  let map = new Map();
  let maxDepth = -Number.MAX_VALUE;

  const queueNode = [];
  const queueDepth = [];
  const ans = [];

  queueNode.push(root);
  queueDepth.push(0);

  while (queueNode.length) {
    let node = queueNode.shift();
    let depth = queueDepth.shift();

    if (node !== null) {
      maxDepth = Math.max(depth, maxDepth);

      if (!map.has(depth)) {
        map.set(depth, [node.val]);
      } else {
        map.set(depth, [...map.get(depth), node.val]);
      }

      queueNode.push(node.left);
      queueNode.push(node.right);
      queueDepth.push(depth + 1);
      queueDepth.push(depth + 1);
    }
  }

  for (let i = 0; i <= maxDepth; i++) {
    ans.push(map.get(i));
  }

  return ans;
};
