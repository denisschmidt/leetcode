/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from
some starting node to any node in the tree along the parent-child connections.

The path must contain at least one node and does not need to go through the root.

Example 1:
  Input: [1,2,3]

       1
      / \
     2   3
  Output: 6

Example 2:
  Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7
  Output: 42

 */

// Time: O(N)
// Space: Мы должны сохранить рекурсивный стек размером с высоту дерева, который равен O (log N) для двоичного дерева.
const maxPathSum = root => {
  let ans = -Number.MAX_VALUE;

  helper(root);
  return ans;
  // left-right-root обход postorderer
  // bottom-top рекурсия

  // На каждом узле нам необходимо принять решение: если сумма левого пути, большего, правого пути
  // Мы выбираем левый путь и добавляем значение текущего узла, эта рекурсия проходит вплоть до корневого узла.
  function helper(node) {
    if (!node) {
      return 0;
    }
    let left = Math.max(0, helper(node.left));
    let right = Math.max(0, helper(node.right));

    ans = Math.max(ans, left + right + node.val);

    return Math.max(left, right) + node.val;
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');
const input = [-10, null, null];
const res = maxPathSum(makeTreeNodes(input));
console.log('---', res);

/*
   -10
   / \
  9  20
    /  \
   15   7

   node.val  left  right
1)     9      0      0
2)     15     0      0
3)     7      0      0
4)     20     15     7
5)    -10     9      35
ans = 42
 */
