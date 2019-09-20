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
 

Note:
Bonus points if you could solve it both recursively and iteratively.

 */

// Разбиваем дерево на левое поддерево и правое поддерево, чтобы проверить, является ли дерево симметричным,
// нам просто нужно проверить, симметричны ли левое и правое поддерево.

// Time O(N) Поскольку мы проходим по всему входному дереву один раз, общее время выполнения O(N)
// Space O(N) Количество рекурсивных вызовов ограничено высотой дерева. В худшем случае дерево является линейным, а высота в O(n).
// Следовательно, сложность пространства из-за рекурсивных вызовов в стеке в худшем случае составляет O(n).

const isSymmetric1 = function(root) {
  if (root === null) return false;
  return isMirror(root, root);

  function isMirror(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;

    // ВАЖНО выход из рекурсии: две node должны быть одинаковыми
    if (node1.val !== node2.val) return false;

    return isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DFS
// Time O(N * K)
// Space O(N)
const isSymmetric2 = function(root) {
  const stack = [];
  const depth = [];
  const map = new Map();
  let maxDepth = -1;

  depth.push(0);
  stack.push(root);

  while (stack.length) {
    let d = depth.pop();
    let node = stack.pop();
    let val = node ? node.val : null;

    if (node !== null) {
      maxDepth = Math.max(maxDepth, d);
      stack.push(node.left);
      stack.push(node.right);
      depth.push(d + 1);
      depth.push(d + 1);
    }

    if (map.has(d)) {
      map.set(d, [...map.get(d), val]);
    } else {
      map.set(d, [val]);
    }
  }

  for (let i = 1; i <= maxDepth; i++) {
    let arr = map.get(i);
    let l = 0;
    let r = arr.length - 1;

    if (arr.length % 2 !== 0) {
      return false;
    }
    while (l < r) {
      if (arr[l] !== arr[r]) {
        return false;
      }
      l++;
      r--;
    }
  }

  return true;
};
