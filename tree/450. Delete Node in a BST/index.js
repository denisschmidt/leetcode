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
const deleteNode = (root, key) => {
  if (root == null) {
    return null;
  }

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
      root.val = getSuccessor(root);
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;
};

// Time O(LogH)
// Space O(H) стек рекурсии, где H - высота дерева. H = log N для сбалансированного дерева.
const deleteNode_II = (root, key) => {
  if (root === null) {
    return null;
  }

  // удалить из правого поддерева
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  // удалить из левого поддерева
  else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  //  удалить текущий узел
  else {
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.right) {
      // Узел не лист и имеет right child.
      // Тогда узел может быть заменен его преемником, который находится где-то ниже в правом поддереве.
      // Затем можно рекурсивно перейти к удалению преемника.
      root.val = getSuccessor(root).val;
      root.right = deleteNode(root.right, root.val);
    } else {
      // Узел не лист, у него нет right child и есть left child.
      // Давайте используем здесь предшественника, который находится где-то ниже в левом поддереве.
      // Узел может быть заменен его предшественником, а затем можно рекурсивно перейти вниз, чтобы удалить предшественника.
      root.val = getPredecessor(root).val;
      root.left = deleteNode(root.left, root.val);
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
