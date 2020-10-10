//  BST could be constructed from preorder or postorder traversal only.

// Serialization could be easily implemented with both strategies
// But for optimal deserialization better to choose the postorder traversal because member/global/static variables are not allowed here.

// Time O(N)
// Space O(N)

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  if (root == null) return [];

  let res = [];

  dfs(root);

  return res;

  function dfs(node) {
    if (node == null) {
      return;
    }

    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {Array} data
 * @return {TreeNode}
 */
const deserialize = data => {
  if (data.length == 0) return null;

  let INF = Number.MAX_VALUE;

  return dfs(-INF, INF);

  // Post-order Traversal
  // left-right-root
  function dfs(lower, upper) {
    if (data.length == 0 || data[data.length - 1] < lower || data[data.length - 1] > upper) {
      return null;
    }

    let val = data.pop();
    let node = new TreeNode(val);

    node.right = dfs(val, upper);
    node.left = dfs(lower, val);

    return node;
  }
};
