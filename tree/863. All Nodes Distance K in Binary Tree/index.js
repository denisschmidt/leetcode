/*
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  

The answer can be returned in any order.

 
Example 1:
  Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
  Output: [7,4,1]

  Explanation: 
  The nodes that are a distance 2 from the target node (with value 5)
  have values 7, 4, and 1.

Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
 
Note:
  The given tree is non-empty.
  Each node in the tree has unique values 0 <= node.val <= 500.
  The target node is a node in the tree.
  0 <= K <= 1000.
*/

// Time O(N)
// Space O(N)
const distanceK = (root, target, k) => {
  let parentMap = new Map();
  let queue = [target];

  let visited = new Set();
  visited.add(target.val);

  dfs(root, null);

  while (queue.length && k > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      parentMap.get(node.val).forEach(neighbor => {
        if (!visited.has(neighbor.val)) {
          queue.push(neighbor);
          visited.add(neighbor.val);
        }
      });
    }
    k--;
  }

  return queue.map(q => q.val);

  function dfs(node, parent) {
    if (node === null) {
      return;
    }

    if (!parentMap.has(node.val)) {
      parentMap.set(node.val, []);
    }

    if (node.left !== null) {
      parentMap.get(node.val).push(node.left);
    }

    if (node.right !== null) {
      parentMap.get(node.val).push(node.right);
    }

    if (parent !== null) {
      parentMap.get(node.val).push(parent);
    }

    dfs(node.left, node);
    dfs(node.right, node);
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');

let n = makeTreeNodes([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

let b = distanceK(n, { val: 5 }, 2);

console.log(b);
