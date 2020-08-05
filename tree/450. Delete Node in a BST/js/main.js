/*

Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:
  root = [5,3,6,2,4,null,7]
  key = 3

      5
    / \
    3   6
  / \   \
  2   4   7

  Given key to delete is 3. So we find the node with value 3 and delete it.

  One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

      5
    / \
    4   6
  /     \
  2       7

  Another valid answer is [5,2,6,null,4,null,7].

      5
    / \
    2   6
    \   \
      4   7

*/

/*

  Бинарное дерево поиска (BST). 
  
  Ключевые моменты:

  In Order Traversal(Left -> Node -> Right) для BST дает массив, отсортированный в порядке возрастания.

  Successor то есть следующий узел который больше текущего.

    Это также следующий узел в обходе inorder. 
    Чтобы найти преемника, пройдите направо один раз, а затем столько раз налево, сколько сможете.

    function successor(root) {
      root = root.right;
      while (root.left != null) root = root.left;
      return root;
    } 


  Predecessor предыдущий узел.
    
    Это также предыдущий узел в обходе In Order Traversal. 
    Чтобы найти предшественника, пройдите налево один раз, а затем столько раз вправо, сколько сможете.


    function predecessor(root) {
      root = root.left;
      while (root.right != null) root = root.right;
      return root;
    }   

                            
  [1,2, 10, 15, 25, 33, 34]  

  Если текущий узел 33 то Predecessor - 25 Successor - 34

*/

// Time O(LogH)
// Space O(H) стек рекурсии, где H - высота дерева. H = log N для сбалансированного дерева.

// Time O(LogH)
// Space O(H) стек рекурсии, где H - высота дерева. H = log N для сбалансированного дерева.
const deleteNode = (root, key) => {
  if (root == null) return null;

  return dfs(root, key);

  function dfs(node, target) {
    if (node == null) return null;

    if (target > node.val) {
      // удалить из правого поддерева
      node.right = dfs(node.right, target);
    } else if (target < node.val) {
      // удалить из левого поддерева
      node.left = dfs(node.left, target);
    } else {
      //  удалить текущий узел

      // если это лист для удаления достаточно вернуть null
      if (isLeaf(node)) {
        return null;
      }

      if (node.right != null) {
        // Узел не лист и имеет right child.
        // Тогда узел может быть заменен его преемником, который находится где-то ниже в правом поддереве.
        // Затем можно рекурсивно перейти к удалению преемника.
        let suc = getSuccessor(node);
        node.val = suc.val;
        node.right = dfs(node.right, suc.val);
        return node;
      }

      if (node.left != null) {
        // Узел не лист, у него нет right child и есть left child.
        // Давайте используем здесь предшественника, который находится где-то ниже в левом поддереве.
        // Узел может быть заменен его предшественником, а затем можно рекурсивно перейти вниз, чтобы удалить предшественника.
        let pre = getPredecessor(node);
        node.val = pre.val;
        node.left = dfs(node.left, pre.val);
        return node;
      }
    }

    return node;
  }

  function isLeaf(node) {
    return node.left == null && node.right == null;
  }
};

const deleteNode_II = (root, key) => {
  if (root == null) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      // находим successor для текущей ноды и устанавливаем его как root.val
      root.val = getSuccessor(root);
      // теперь нам нужно удалить этот successor из дерева, делаем рекурсивный вызов с этим root.val
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;
};

function getPredecessor(root) {
  root = root.left;
  while (root.right !== null) root = root.right;
  return root;
}

function getSuccessor(root) {
  root = root.right;
  while (root.left !== null) root = root.left;
  return root;
}
