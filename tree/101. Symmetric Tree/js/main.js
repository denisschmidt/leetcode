/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note: Bonus points if you could solve it both recursively and iteratively.

*/

// Разбиваем дерево на левое поддерево и правое поддерево, чтобы проверить, является ли дерево симметричным,
// Нам просто нужно проверить, симметричны ли левое и правое поддерево.

// Time O(N)
// Space O(N) Количество рекурсивных вызовов ограничено высотой дерева. В худшем случае дерево является линейным, а высота в O(N).
// Следовательно, сложность пространства из-за рекурсивных вызовов в стеке в худшем случае составляет O(n).

const isSymmetric = root => {
  if (root == null) return true;

  return dfs(root, root);

  function dfs(node1, node2) {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) return false;

    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
  }
};

// Time O(N)
// Space O(N)
const isSymmetric_II = root => {
  let stack = [];

  stack.push(root);
  stack.push(root);

  while (stack.length) {
    let n1 = stack.pop();
    let n2 = stack.pop();

    if (n1 == null && n2 == null) continue;
    if (n1 == null || n2 == null) return false;
    if (n1.val != n2.val) return false;

    stack.push(n1.left);
    stack.push(n2.right);
    stack.push(n1.right);
    stack.push(n2.left);
  }
  return true;
};
