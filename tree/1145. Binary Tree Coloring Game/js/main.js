// Time O(N)
// Space O(N)
const btreeGameWinningMove = (root, n, x) => {
  let LEFT = 0;
  let RIGHT = 0;

  dfs(root);

  let TOP = n - (LEFT + RIGHT) - 1;

  return TOP > LEFT + RIGHT + 1 || LEFT > RIGHT + TOP + 1 || RIGHT > LEFT + TOP + 1;

  function dfs(node) {
    if (node == null) {
      return 0;
    }

    if (isLeaf(node)) {
      return 1;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    if (node.val == x) {
      LEFT = l;
      RIGHT = r;
      return;
    }

    return l + r + 1;
  }

  function isLeaf(node) {
    return node.left == null && node.right == null;
  }
};
