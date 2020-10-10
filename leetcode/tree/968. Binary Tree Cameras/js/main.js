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
  if (root == null) return 0;

  let CAMERA_ON = 1;
  let CAMERA_OFF = 0;
  let CAMERA_SEEN = 2;
  let res = 0;

  let rootCamera = dfs(root);

  return rootCamera == CAMERA_OFF ? ++res : res;

  function dfs(node) {
    if (node == null) {
      return CAMERA_SEEN;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    // Если хотя бы 1 дочерний элемент не отслеживается, нам нужно поместить камеру в текущий узел
    if (l == CAMERA_OFF || r == CAMERA_OFF) {
      res++;
      return CAMERA_ON;
    }

    // Если хотя бы у одного ребенка есть камера, текущий узел отслеживается.
    // Таким образом, нам не нужно размещать камеру здесь
    if (l == CAMERA_ON || r == CAMERA_ON) {
      return CAMERA_SEEN;
    }

    // Если оба ребенка находятся под наблюдением, но у них нет камеры, нам не нужно размещать камеру здесь.
    // Мы помещаем камеру в родительский узел на более высоком уровне.
    return CAMERA_OFF;
  }
};
