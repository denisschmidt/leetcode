/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled,
and all nodes in the last level are as far left as possible.
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

// Time O(d^2) = O(logN * logN) где d - глубина дерева а d = log N
// Space O(1)

// По сути, мы делаем здесь бинарный поиск в бинарном поиске, и общая временная сложность
// O (d ^ 2) = O (log N * log N) = O (log ^ 2 N) лучше, чем линейная O (N ).
const countNodes = function(root) {
  // если дерево пустое
  if (root === null) return 0;

  // получает глубину
  let depth = computeDepth(root);

  // если дерево содержит 1 ноду
  if (depth === 0) return 1;

  // Узлы последнего уровня нумеруются от 0 до 2^d - 1
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

// Time O(logN*logN)

// Поддерево полного двоичного дерева также является полным двоичным деревом.
const countNodes3 = function(root) {
  if (!root) return 0;

  let hl = 0;
  let hr = 0;

  let l = root,
    r = root;

  while (l) {
    hl++;
    l = l.left;
  }

  while (r) {
    hr++;
    r = r.right;
  }

  if (hl === hr) return Math.pow(hl, 2) - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(LogN)

// Стек имеет размер глубины дерева, и, следовательно, сложность O(d).
// У нас есть полное дерево и, следовательно, его глубина d = log N.
// Следовательно, сложность пространства равна O (log N).
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
