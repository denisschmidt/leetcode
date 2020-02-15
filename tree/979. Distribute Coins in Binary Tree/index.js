/*
Given the root of a binary tree with N nodes, each node in the tree has node.val coins, and there are N coins total.

In one move, we may choose two adjacent nodes and move one coin from one node to another.  
(The move may be from parent to child, or from child to parent.)

Return the number of moves required to make every node have exactly one coin.


Example 1:
  Input: [3,0,0]
  Output: 2
  Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

Example 2:
  Input: [0,3,0]
  Output: 3
  Explanation: 
    From the left child of the root, we move two coins to the root [taking two moves].  
    Then, we move one coin from the root of the tree to the right child.

Example 3:
  Input: [1,0,2]
  Output: 2

Example 4:
  Input: [1,0,0,null,3]
  Output: 4
 

Note:
  1<= N <= 100
  0 <= node.val <= N
*/

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
