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
// N - количество узлов в дереве.
// Мы посещаем каждый узел один раз, но каждое создание пути может потребовать O(N) работы.
//
// Space O(N^2)
const findDuplicateSubtrees = root => {
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

const findDuplicateSubtrees2 = root => {
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
