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

// Time O(N)
// Space O(N)
const levelOrder = root => {
  if (root === null) {
    return [];
  }

  let ans = [];
  let map = new Map();

  map.set(0, [root.val]);

  function dfs(node, depth) {
    if (!node || !node.children) {
      return;
    }

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
  }

  dfs(root, 1);

  for (let [, val] of map) {
    ans.push(val);
  }

  return ans;
};
