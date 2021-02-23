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
