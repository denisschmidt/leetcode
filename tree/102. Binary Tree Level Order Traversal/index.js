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

// DFS
// Time O(N)
// Space O(N)
const levelOrder = root => {
  if (root === null) return [];
  const ans = [];
  const map = new Map();
  map.set(0, [root.val]);

  const dfs = (node, depth) => {
    if (!node || !node.children) return;

    let n = node.children.length;

    for (let i = 0; i < n; i++) {
      let item = node.children[i];

      if (map.has(depth)) {
        map.set(depth, [...map.get(depth), item.val]);
      } else {
        map.set(depth, [item.val]);
      }

      if (item.children.length > 0) {
        dfs(item, depth + 1);
      }
    }
  };

  dfs(root, 1);

  for (let [, val] of map) {
    ans.push(val);
  }

  return ans;
};
