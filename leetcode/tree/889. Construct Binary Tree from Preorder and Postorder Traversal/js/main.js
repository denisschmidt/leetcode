// Time O(N^2)
// Space O(N)
const constructFromPrePost = (pre, post) => {
  let root = new TreeNode(pre[0]);
  let size = pre.length;
  let visited = Array(size).fill(false);

  visited[root.val] = true;

  helper([root]);

  return root;

  function helper(parent) {
    if (!parent.length) {
      return;
    }

    let children = [];

    for (let root of parent) {
      let left = null;
      let right = null;

      for (let i = 0; i < size; i++) {
        if (pre[i] == root.val && i < size) {
          left = pre[i + 1];
        }

        if (post[i] == root.val && i > 0) {
          right = post[i - 1];
        }
      }

      if (!visited[left] && left != null && left != undefined) {
        let node = new TreeNode(left);
        root.left = node;
        children.push(node);
        visited[left] = true;
      }

      if (!visited[right] && right != null && right != undefined) {
        let node = new TreeNode(right);
        root.right = node;
        children.push(node);
        visited[right] = true;
      }
    }

    helper(children);
  }
};
