const rob = function (root) {
  const dfs = root => {
    if (root == null) {
      return [0, 0];
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let res = [0, 0];

    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];

    return res;
  };

  let ans = dfs(root, 0);

  return Math.max(ans[0], ans[1]);
};
