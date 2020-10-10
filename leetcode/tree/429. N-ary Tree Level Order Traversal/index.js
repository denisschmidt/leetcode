/*
Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:


We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
 

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.
 */

// BFS
// Time O(N)
// Space O(N)
const levelOrder = root => {
  const queue = [];
  const depth = [];
  const ans = [];
  const map = new Map();
  let max = -1;

  queue.push(root);
  depth.push(0);

  while (queue.length) {
    let node = queue.shift();
    let d = depth.shift();
    if (node !== null) {
      max = Math.max(max, d);

      if (map.has(d)) {
        map.set(d, [...map.get(d), node.val]);
      } else {
        map.set(d, [node.val]);
      }

      node.push(node.left);
      node.push(node.right);
      depth.push(d + 1);
      depth.push(d + 1);
    }
  }

  for (let i = 0; i <= maxDepth; i++) {
    ans.push(map.get(i));
  }
  return ans;
};
