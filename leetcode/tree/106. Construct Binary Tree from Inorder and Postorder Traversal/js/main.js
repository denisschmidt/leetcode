/*

  Алгоритм: 

  Начнем обход с preorder или postorder. 
  
  Значение, выбранное из preorder/postorder разбивает обход inorder на левое и правое поддеревья. 
  
  Единственная информация, которая требуется от inorder: 
    1) Если текущее поддерево пусто (= возвращать None)  
    2) Если нет (= продолжить построение поддерева)

*/

// Time O(N)
// Space O(N)
const buildTree = (inorder, postorder) => {
  // inorder - left-root-right
  // postorder - left-right-root

  let map = new Map();
  let index = postorder.length - 1;

  inorder.forEach((v, i) => map.set(v, i));

  return helper(0, postorder.length - 1);

  function helper(start, end) {
    if (start > end) {
      return null;
    }

    let val = postorder[index--];

    let rootIndex = map.get(val);

    let node = new TreeNode(val);

    node.right = helper(rootIndex + 1, end);
    node.left = helper(start, rootIndex - 1);

    return node;
  }
};
