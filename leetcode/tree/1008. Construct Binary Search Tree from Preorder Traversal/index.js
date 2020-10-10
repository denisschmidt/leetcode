/*

Return the root node of a binary search tree that matches the given preorder traversal.

(
  Recall that a binary search tree is a binary tree where for every node, 
  any descendant of node.left has a value < node.val, 
  and any descendant of node.right has a value > node.val.  
  
  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.
)

Example 1:
  Input: [8,5,1,7,10,12]
  Output: [8,5,10,1,7,null,12]


Note: 
  1 <= preorder.length <= 100
  The values of preorder are distinct.

*/

/*

  Алгоритм: 
  Установим нижний и верхний предел как -INF и INF, потому что всегда можно поместить значение в корень.

  Начнем с первого элемента в массиве preorder заказа idx = 0. 
  
  return helper(lo, hi) 
    1) Если индекс idx равен size, то дерево построено и возвращаем null.
    
    2) Если текущее значение val = preorder[idx] меньше lo или больше hi, вернуть null.
    
    3) Если текущее значение находится в пределах, создаем ноду node = TreeNode (val)
    
    4) Рекурсивно строим left и right поддеревья: node.left = helper(lo, val) и node.right = helper(val, hi)

    https://leetcode.com/articles/construct-bst-from-preorder-traversal/

*/

// Time O(N)
// Space O(N)
const bstFromPreorder = preorder => {
  if (preorder.length === 0) return null;

  let size = preorder.length;
  let INF = Number.MAX_VALUE;
  let idx = 0;

  return helper(-INF, INF);

  function helper(lo, hi) {
    if (idx === size) return null;

    if (preorder[idx] < lo || preorder[idx] > hi) return null;

    let val = preorder[idx++];
    let node = new TreeNode(val);

    node.left = helper(lo, val);
    node.right = helper(val, hi);

    return node;
  }
};

// Time O(N^2)
// Space O(N)
const bstFromPreorder_II = preorder => {
  if (preorder.length === 0) return null;

  let size = preorder.length;
  let root = new TreeNode(preorder[0]);
  let visited = new Set();

  makeTree([root], [0]);

  return root;

  function makeTree(parents, depths) {
    let children = [];
    let new_depths = [];

    if (!parents.length) return;

    for (let i = 0; i < parents.length; i++) {
      let parent = parents[i];
      let index = depths[i];

      let left = preorder[index + 1] < parent.val ? preorder[index + 1] : null;

      if (!visited.has(index + 1) && left !== null && left !== undefined) {
        let node = new TreeNode(left);
        parent.left = node;
        children.push(node);
        new_depths.push(index + 1);
        visited.add(index + 1);
      }

      let right = null;
      for (let i = index + 1; i < size; i++) {
        if (preorder[index] < preorder[i]) {
          right = preorder[i];
          index = i;
          break;
        }
      }

      if (!visited.has(index) && right !== null && right !== undefined) {
        let node = new TreeNode(right);
        parent.right = node;
        children.push(node);
        new_depths.push(index);
        visited.add(index);
      }
    }

    makeTree(children, new_depths);
  }
};
