/*
Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in its subtree.



Example 1:
  Input: [3,5,1,6,2,0,8,null,null,7,4]
  Output: [2,7,4]

Explanation:

 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

const subtreeWithAllDeepest = function(root) {
  let nodeStack = [];
  let depthStack = [];
  let maxDepth = -1;
  const map = new Map();
  const map2 = new Map();
  nodeStack.push(root);
  depthStack.push(0);

  while (nodeStack.length) {
    let node = nodeStack.pop();
    let depth = depthStack.pop();
    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);
      nodeStack.push(node.left);
      nodeStack.push(node.right);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);

      if (!map2.has(depth)) {
        map2.set(depth, [node]);
      } else {
        map2.set(depth, [...map2.get(depth), node]);
      }

      if (!map.has(depth)) {
        map.set(depth, [node.val]);
      } else {
        map.set(depth, [...map.get(depth), node.val]);
      }
    }
  }
  const last = map.get(maxDepth);
  if (last && last.length === 1) {
    return { val: last[0], left: null, right: null };
  } else if (last && last.length === 2) {
    const parent = map2.get(maxDepth - 1).filter(tree => tree.left && tree.right);
    if (!parent.length) {
      return root;
    }
    for (let i = 0; i < parent.length; i++) {
      if (parent[i].left.val === last[0] && parent[i].right.val === last[1]) {
        return parent[i];
      } else if (parent[i].left.val === last[1] && parent[i].right.val === last[0]) {
        return parent[i];
      } else {
        return tree;
      }
    }
  } else {
    return root;
  }
};

//const A = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
// const A = [0, 3, 1, 4, null, 2, null, null, 6, null, 5];
const A = [0, 1, 3, null, 2];
// const A = [1];
// const A = [0, 3, 1, 4, null, 2, null, null, 6, null, 5];

const res = subtreeWithAllDeepest(makeTreeNodes(A));
// console.log('---', res);

/*
        0
     1    3
       2
*/

// =====================================================================================================================

/*

Complexity Analysis
  Time Complexity: O(N), where N is the number of nodes in the tree.
  Space Complexity: O(N).

 */
const subtreeWithAllDeepest2 = function(root) {
  let maxDepth = Number.MIN_VALUE;
  const depth = new Map();
  depth.set(null, -1);

  const dfs = (node, parent) => {
    if (node !== null) {
      depth.set(node, depth.get(parent) + 1);
      dfs(node.left, node);
      dfs(node.right, node);
    }
  };

  const answer = node => {
    if (node === null || depth.get(node) === maxDepth) {
      return node;
    }
    let L = answer(node.left);
    let R = answer(node.right);

    if (L != null && R != null) return node;
    if (L != null) return L;
    if (R != null) return R;
    return null;
  };

  dfs(root, null);

  for (let d of depth.values()) {
    maxDepth = Math.max(maxDepth, d);
  }

  return answer(root);
};

const res2 = subtreeWithAllDeepest2(makeTreeNodes(A));
console.log('---', res2);

// =====================================================================================================================

/*
  The time complexity of above code is O(N^2) since a binary tree can degenerate to a linked list,
  the worst complexity to calculate depth is O(N) and so the overall time complexity is O(N^2).
 */

const depth = root => {
  if (root === null) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
};

//         0
//      1    3
//        2
const subtreeWithAllDeepest3 = root => {
  if (root == null) return null;
  let left = depth(root.left);
  let right = depth(root.right);

  if (left === right) return root;
  if (left > right) return subtreeWithAllDeepest3(root.left);
  return subtreeWithAllDeepest3(root.right);
};

const nodes = makeTreeNodes(A);

const res3 = subtreeWithAllDeepest3(nodes);
console.log('---', res3);
