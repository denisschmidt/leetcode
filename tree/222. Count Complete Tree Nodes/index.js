/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6

 */

const computeDepth = node => {
  let count = 0;

  while (node.left !== null) {
    node = node.left;
    count++;
  }

  return count;
};

const isExist = (idx, depth, node) => {
  let left = 0;
  let right = Math.pow(2, depth) - 1;
  let pivot;

  for (let i = 0; i < depth; i++) {
    pivot = Math.floor(left + (right - left) / 2);

    if (idx <= pivot) {
      node = node.left;
      right = pivot;
    } else {
      node = node.right;
      left = pivot + 1;
    }
  }

  return node !== null;
};

// Time O(d^2) = O(log^2N) где d - глубина дерева
// Space O(1)
const countNodes = function(root) {
  // если дерево пустое
  if (root === null) return 0;

  // получает глубину
  let depth = computeDepth(root);

  // если дерево содержит 1 ноду
  if (depth === 0) return 1;

  // Узлы последнего уровня нумеруются от 0 до 2^ d - 1
  // Выполнить бинарный поиск, чтобы проверить, сколько существует узлов.

  let left = 1;
  let right = Math.pow(2, depth) - 1;
  let pivot;

  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    if (isExist(pivot, depth, root)) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return Math.pow(2, depth) - 1 + left;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const countNodes2 = function(root) {
  const queue = [];
  let count = 0;

  queue.push(root);

  while (queue.length) {
    let node = queue.shift();

    if (node !== null) {
      count++;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return count;
};
