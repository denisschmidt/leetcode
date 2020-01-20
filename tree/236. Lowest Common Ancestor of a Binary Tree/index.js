/*
236. Lowest Common Ancestor of a Binary Tree !!!!!!!!!!!!

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


Example 1:

  Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
  Output: 3
  Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:

  Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
  Output: 5
  Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Note:
  All of the nodes' values will be unique.
  p and q are different and both values will exist in the binary tree.

 */

// https://www.youtube.com/watch?v=13m9ZCB8gjw
// Time O(N)
// Space O(N)
// Дошел до дна и потом поднимаешься наверх по стеку
const lowestCommonAncestor = (root, p, q) => {
  if (root === null) return null;
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor3(root.left, p, q);
  let right = lowestCommonAncestor3(root.right, p, q);

  // если у нас есть левая и правая половина вернем root ноду
  if (left && right) return root;

  // возвращаем ноду которая не null
  return left !== null ? left : right;
};

// DFS + HashMap
// Time O(N)
// Space O(N)
const lowestCommonAncestor_II = (root, p, q) => {
  const stack = [];

  // итерируемся по дереву и
  // сохраняем родительские узлы с мапе
  const parent = new Map();

  parent.set(root, null);
  stack.push(root);

  while (!parent.has(p) || !parent.has(q)) {
    let node = stack.pop();

    if (node.left) {
      parent.set(node.left, node);
      stack.push(node.left);
    }

    if (node.right) {
      parent.set(node.right, node);
      stack.push(node.right);
    }
  }

  const ancestors = new Set();

  // получения всех предков для узла p
  while (p !== null) {
    ancestors.add(p);
    p = parent.get(p);
  }

  // Двигаемся вверх
  // Если предок присутствует в наборе предков для p,
  // Это означает, что это первый общий предок между p и q (при движении вверх),
  // И, следовательно, это узел LCA.
  while (!ancestors.has(q)) {
    q = parent.get(q);
  }

  return q;
};

// Time O(N), где N - количество узлов в двоичном дереве.
// В худшем случае мы могли бы посетить все узлы двоичного дерева.

// Space O(N)
// Это связано с тем, что максимальный объем пространства, используемого стеком рекурсии, составляет N,
// поскольку высота перекошенного двоичного дерева может быть N.

// Дошел до дна и потом поднимаешься наверх по стеку
const lowestCommonAncestor_III = (root, p, q) => {
  let ans = {};

  const find = (currentNode, p, q) => {
    if (currentNode === null) return false;

    // Левая рекурсия. Если рекурсия left возвращает true, установите left = 1 else 0
    let left = find(currentNode.left, p, q) ? 1 : 0;

    let right = find(currentNode.right, p, q) ? 1 : 0;

    let mid = currentNode === p || currentNode === q ? 1 : 0;

    // Если любые два из флагов влево, вправо или в середине становятся Истиной
    if (mid + left + right >= 2) {
      ans = currentNode;
    }

    // Возвращаем true, если любое из трех значений равно True.
    return mid + left + right > 0;
  };

  find(root, p, q);

  return ans;
};
