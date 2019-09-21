/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example:



Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

Explanation: Given the above perfect binary tree (Figure A),
your function should populate each next pointer to point to its next right node, just like in Figure B.
 

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.

 */

// Time O(N)
// Space O(N)
const connect = function(root) {
  if (root === null) return null;
  let prevNode = null;
  let prevDepth = -1;
  let queue = [];
  let depthQueue = [];

  queue.push(root);
  depthQueue.push(0);

  while (queue.length) {
    let node = queue.shift();
    let depth = depthQueue.shift();

    if (node) {
      queue.push(node.right);
      queue.push(node.left);

      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);

      if (prevDepth === depth) {
        node.next = prevNode;
      } else {
        node.next = null;
      }

      prevNode = node;
      prevDepth = depth;
    }
  }

  return root;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
       1
     /   \
    2     3
   / \   / \
  4   5 6   7

Первое условие if (cur.left) cur.left.next = cur.right
Для левого узла делаем ссылку равную правому узлу

!!! ВАЖНО
Второе условие if (cur.right && cur.next) cur.right.next = cur.next.left;
Если у нас есть правое дерево и есть соседний узел то из этого соседнего узла берем левое поддерево
и устанавливаем его в next для текущего правого узла

Переходим на соседний узел
cur = cur.next;

 */

// Time O(N)
// Space O(1)
const connect2 = function(root) {
  if (root == null) return null;

  const ans = root;

  while (root) {
    let cur = root;

    while (cur) {
      if (cur.left) cur.left.next = cur.right;

      // сслыка для сосоедних узлов
      if (cur.right && cur.next) cur.right.next = cur.next.left;

      // переходим на соседний узел
      cur = cur.next;
    }

    // спускаемся ниже
    root = root.left;
  }

  return ans;
};
