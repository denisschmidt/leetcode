/*
Given a binary tree, we install cameras on the nodes of the tree.

Each camera at a node can monitor its parent, itself, and its immediate children.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.

Example 1:
  Input: [0,0,null,0,0]
  Output: 1
  Explanation: One camera is enough to monitor all nodes if placed as shown.

Example 2:
  Input: [0,0,null,0,null,0,null,null,0]
  Output: 2
  Explanation:
    At least two cameras are needed to monitor all nodes of the tree.
    The above image shows one of the valid configurations of camera placement.

Note:
  The number of nodes in the given tree will be in the range [1, 1000].
  Every node has value 0.

 */

/*
Вместо того, чтобы пытаться покрыть каждый узел сверху вниз, 
давайте попробуем покрыть его снизу вверх - подумав о том, чтобы сначала поместить камеру с самыми глубокими узлами 
и продвигаться вверх по дереву.

Если у узла есть дочерние узлы, и у него есть родительский элемент, 
тогда строго лучше поместить камеру в родительский узел этого узла.

       1
     /  \ 
    2    3
     \    \
      4    5
[1,2,3,null,4,null,5]

Возвращаемое значение DFS() имеет следующие значения. 
  1) 0: в этом узле нет камеры, и камера не контролируется ни одним из его дочерних узлов, 
    что означает, что ни у одного из дочерних узлов нет камеры. 

  2) 1: в этом узле нет камеры; однако этот узел контролируется по крайней мере одним из его дочерних элементов, 
    что означает, что по крайней мере у одного из его дочерних элементов есть камера. 
  
  3) 2: есть камера в этом узле.
*/

// Bottom-up recursion
// Time O(N)
// Space O(H) где H - высота данного дерева.
const minCameraCover = root => {
  let cnt = 0;
  let NOT_MONITOR = 0;
  let MONITOR_BY_OTHER = 1;
  let CAMERA_HERE = 2;

  const status = dfs(root);

  return status === NOT_MONITOR ? ++cnt : cnt;

  function dfs(node) {
    if (!node) {
      return MONITOR_BY_OTHER;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    // если хотя бы 1 дочерний элемент не отслеживается, нам нужно поместить камеру в текущий узел
    if (left === NOT_MONITOR || right === NOT_MONITOR) {
      cnt++;
      return CAMERA_HERE;
    }

    // если хотя бы у одного ребенка есть камера, текущий узел отслеживается. Таким образом, нам не нужно размещать камеру здесь
    if (left === CAMERA_HERE || right === CAMERA_HERE) {
      return MONITOR_BY_OTHER;
    }

    // если оба ребенка находятся под наблюдением, но у них нет камеры, нам не нужно размещать камеру здесь. Мы помещаем камеру в родительский узел на более высоком уровне.
    return NOT_MONITOR;
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');
const res = minCameraCover(makeTreeNodes([1, 2, 3, null, 4, null, 5]));
console.log(res);

// Bottom-up recursion
// Time O(N)
// Space O(H) где H - высота данного дерева.
const minCameraCover2 = root => {
  let cnt = 0;
  let set = new Set();
  set.add(null);

  dfs(root, null);

  return cnt;

  function dfs(node, parent) {
    if (!node) return;

    dfs(node.left, node);
    dfs(node.right, node);

    if ((parent === null && !set.has(node)) || !set.has(node.left) || !set.has(node.right)) {
      cnt++;
      set.add(node);
      set.add(parent);
      set.add(node.left);
      set.add(node.right);
    }
  }
};
