/*

Given a binary tree, return all duplicate subtrees.
For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:

      2
     /
    4
and

    4
Therefore, you need to return above trees' root in the form of a list.

 */

// Time O(N^2)
// Space O(N^2)
// Конкатенация строк - это операция O(N).
// Таким образом, шаг, node.val + "," + x + "," + y.
// Может показаться атомарной операцией, но на самом деле это занимает время пропорционально длине объединенной строки.
// Таким образом, в основном на каждом узле, когда вы делаете этот шаг, вы снова тратите O(N) время. Вот почему N * N
const findDuplicateSubtrees = root => {
  let map = {};
  let ans = [];
  dfs(root);

  return ans;

  // обход left-right-root
  function postorder(node) {
    if (!node) return '#';

    let left = postorder(node.left);
    let right = postorder(node.right);

    const path = node.val + ',' + left + ',' + right;
    map[path] = ~~map[path] + 1;

    if (map[path] === 2) {
      ans.push(node);
    }

    return path;
  }
};

// Time O(N^2)
// N - количество узлов в дереве.
// Мы посещаем каждый узел один раз, но каждое создание пути может потребовать O(N) работы.
//
// Space O(N^2)
const findDuplicateSubtrees2 = root => {
  let ans = [];
  let map = {};

  dfs(root);

  return ans;

  function dfs(root) {
    if (!root) return '#';

    let path = root.val + ',' + dfs(root.left) + ',' + dfs(root.right);
    map[path] = ~~map[path] + 1;

    if (map[path] === 2) {
      ans.push(root);
    }

    return path;
  }
};
