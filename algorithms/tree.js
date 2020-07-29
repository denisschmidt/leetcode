// Binary Tree Traversal

// Задачи на leetcode #94 #144 #145

// Cуществуют разные способы посещения всех узлов или поиска значения в двоичном дереве.

// Узел является листом тогда и только тогда, когда у него 0 дочерних элементов.

/* 

  Важное своиство для BST для нахождения дочерних элементов.

  Если мы знаем index текущего узла.

  left - index * 2 + 1
  right - index * 2 + 2
  parent - (index - 1) / 2

*/

// In Order Traversal

// ВАЖНО!!!!

// Только если у нас только BST дерево то мы можем использовать подобный обход для получения значений в порядке возрастания

// Посещаем узлы в порядке left-root-right

// Визуализация обхода In Order
// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solution/

/*
         10
       /    \
      5      30
    /       /  \
   4       15   40
 /
3

[3, 4, 5, 10, 15, 30, 40]

 */

// Time O(N) - где N - количество узлов в дереве. Мы перебираем каждый узел один раз.
// Space O(H) - где H - высота дерева. Это пространство, стеком вызовов при вызове dfs.
const inorderTraversal = root => {
  let stack = [];
  let node = root;
  let ans = [];

  while (stack.length || node !== null) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    ans.push(node.val);
    node = node.right;
  }

  return ans;
};

const inorderTraversal2 = root => {
  const nums = [];
  helper(root);
  return nums;

  function helper(node) {
    if (node === null) return;

    helper(node.left);
    nums.push(node.val);
    helper(node.right);
  }
};

// Pre Order Traversal

// Посещаем узлы в порядке root-left-right

/*

         10
       /    \
      5      30
    /       /  \
   4       15   40
 /
3

[10, 5, 4, 3, 30, 15, 40]

 */

// Time O(N)
// Space O(N)
const preorderTraversal = root => {
  const stack = [];
  const ans = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    if (node !== null) {
      ans.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return ans;
};

const preorderTraversal2 = root => {
  const ans = [];
  helper(root, ans);
  return ans;

  function helper(node, ans) {
    if (node === null) return;

    ans.push(node.val); // visit the root
    helper(node.left, ans); // traverse left subtree
    helper(node.right, ans); // traverse right subtree
  }
};

// Post-order Traversal

// Посещаем узлы в порядке left-right-root

/*

         10
       /    \
      5      30
    /       /  \
   4       15   40
 /
3

[3, 4, 5, 15, 40, 30, 10]

145 Задача

 */

// Time O(N)
// Space O(N)
const postorderTraversal = root => {
  if (root === null) {
    return [];
  }

  const stack1 = [];
  const stack2 = [];

  stack1.push(root);

  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node.val);

    if (node.left) {
      stack1.push(node.left);
    }

    if (node.right) {
      stack1.push(node.right);
    }
  }

  return stack2.reverse();
};

// Bottom - Up recursive solution
const postorderTraversal2 = root => {
  const ans = [];
  helper(root);
  return ans;

  function helper(node) {
    if (node === null) return;

    helper(node.left); // traverse left subtree
    helper(node.right); // traverse right subtree
    ans.push(node.val); // visit the root
  }
};

function balanceBST(nums, start, end) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);

  let node = new TreeNode(nums[mid]);

  node.left = balanceBST(nums, start, mid - 1);
  node.right = balanceBST(nums, mid + 1, end);

  return node;
}

const swapTreeNodes = root => {
  return dfs(root);

  function dfs(root) {
    if (root == null) return null;

    let left = dfs(root.left);

    let node = new TreeNode(root.val);
    node.right = left;

    let right = dfs(root.right);

    node.left = right;

    return node;
  }
};
