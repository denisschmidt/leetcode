// DFS
// Time O(N)
// Space O(N)
const kthSmallest = (root, k) => {
  let stack = [];

  while (stack.length || root != null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k--;

    if (k == 0) {
      return root.val;
    }

    root = root.right;
  }

  return null;
};
