/*
Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:
  Input: [1,2,3,4,5,6]
  Output: true
  Explanation:
    Every level before the last is full (ie. levels with node-values {1} and {2, 3}),
    and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:
  Input: [1,2,3,4,5,null,7]
  Output: false
  Explanation: The node with value 7 isn't as far left as possible.
 
Note: The tree will have between 1 and 100 nodes.

 */

// BFS
// Time O(N)
// Space O(N)
const isCompleteTree = root => {
  const nodes = [];

  nodes.push(new Node(root, 1));

  let i = 0;

  while (i < nodes.length) {
    let obj = nodes[i];

    if (obj.node !== null) {
      nodes.push(new Node(obj.node.left, obj.depth * 2));
      nodes.push(new Node(obj.node.right, obj.depth * 2 + 1));
    }
    i++;
  }

  /*
    Когда дерево полностью заполнено на последней глубине d она имеет 2^(d-1) узлов 
    Если все узлы на последнем уровне выравниваются по левому краю, 
    Тогда их позиции имеют следующий формат 0, 1, ... без пробелов.

    Теперь нужно проверить, что последний код правильный, так как последний код является наибольшим значением.
   */
  return nodes[i - 1].depth === nodes.length;
};

class Node {
  constructor(node, depth) {
    this.node = node;
    this.depth = depth;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const isCompleteTree2 = root => {
  const stack = [root];
  const depthStack = [1];
  const map = new Map();
  let maxDepth = getDepth(root);

  while (stack.length) {
    const node = stack.pop();
    const depth = depthStack.pop();

    if (node !== null) {
      stack.push(node.right);
      stack.push(node.left);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }

    if (depth !== maxDepth && node !== null) {
      addToMap(depth, node.val);
    } else if (depth === maxDepth) {
      const val = node ? node.val : null;
      addToMap(depth, val);
    }
  }

  for (let i = 2; i < maxDepth; i++) {
    if (Math.pow(2, i - 1) !== map.get(i).length) {
      return false;
    }
  }

  let prev = map.get(maxDepth)[0];
  for (let v of map.get(maxDepth)) {
    if (prev === null && v) {
      return false;
    }
    prev = v;
  }

  return true;

  function getDepth(node) {
    if (node === null) return 0;
    return Math.max(getDepth(node.left) + 1, getDepth(node.right) + 1);
  }

  function addToMap(depth, node) {
    if (!map.has(depth)) {
      map.set(depth, [node]);
    } else {
      const arr = map.get(depth);
      arr.push(node);
      map.set(depth, arr);
    }
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');
const res = isCompleteTree(makeTreeNodes([1, 2, 3, 4, 5, null, 7]));
console.log(res);
