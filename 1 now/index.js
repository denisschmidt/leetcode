const { TreeNode, makeTreeNodes } = require('../algorithms/treeNode');

/*

  Bottom-up рекурсия
  
  Результат функции хранит левое поддерево и правое поддерево

  В данной рекурсии мы доходим до конца рекурсии

     2
   /  \
  1    3

  
  Доходим до значения 3, слева и справа [null, null] 
  Устанавливаем значение для текущей ноды node.right = null

  Поднимаемся по стеку следущее значение 2 [3, null] 

  Устанавливаем значение для текущей ноды node.right = 3;

  Выходим из рекурсии

*/

var splitBST = function(root, V) {
  return helper(root);

  function helper(node) {
    if (node === null) {
      return [null, null];
    }

    if (node.val > V) {
      let [left, right] = helper(node.left);

      node.left = right;

      console.log('-1-', node.val, right);

      return [left, node];
    } else {
      let [left, right] = helper(node.right);

      console.log('-2-', node.val, left);

      node.right = left;

      return [node, right];
    }
  }
};

let node = makeTreeNodes([4, 2, 6, 1, 3, 5, 7]);

splitBST(node, 5);
