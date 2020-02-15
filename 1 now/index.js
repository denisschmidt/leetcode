/*
  PostOrder обход возвращаем баланс монет. 
  
  Например, если мы получаем «+3» от левого потомка, это означает, что у левого поддерева есть 3 дополнительные монеты.
  Если мы получим «-1» от правого ребенка, нам нужно переместить 1 монету. 
  
  Таким образом, мы увеличиваем количество ходов на 4 (3 хода влево + 1 ход вправо).
  
  Затем мы возвращаем окончательный баланс: left + right + node.val - 1 одну монету для себя

*/

// Time O(N)
// Space O(N)
const distributeCoins = function(root) {
  let cnt = 0;

  dfs(root);

  return cnt;

  function dfs(node) {
    if (node === null) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    cnt += Math.abs(left) + Math.abs(right);

    return left + right + node.val - 1;
  }
};

/*
  Мы можем изменить значения узлов дерева, мы можем сохранить баланс в узлах 
  И использовать возвращаемое значение для накопления количества ходов. 
  
  Таким образом, мы можем избавиться от вспомогательного метода

*/

// Time O(N)
// Space O(N)
const distributeCoins_II = function(root, parent = null) {
  if (root === null) return 0;

  let sum = distributeCoins_II(root.left, root) + distributeCoins_II(root.right, root);

  if (parent) {
    parent.val += root.val - 1;
  }

  return sum + Math.abs(root.val - 1);
};
