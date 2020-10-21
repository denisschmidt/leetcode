// Time: O(N)
// Space: Мы должны сохранить рекурсивный стек размером с высоту дерева, который равен O (log N) для двоичного дерева.
const maxPathSum = root => {
  let ans = -Number.MAX_VALUE;

  // Bottom-top рекурсия

  dfs(root);

  return ans;

  // На каждом узле нам необходимо принять решение: если сумма левого пути, большего, правого пути
  // Мы выбираем левый путь и добавляем значение текущего узла, эта рекурсия проходит вплоть до корневого узла.
  function dfs(node) {
    if (node == null) {
      return 0;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    ans = Math.max(ans, l + node.val, r + node.val, l + r + node.val, node.val);

    return Math.max(l + node.val, r + node.val, 0);
  }
};
