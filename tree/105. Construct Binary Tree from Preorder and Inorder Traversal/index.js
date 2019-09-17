/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
   
 */

/*

Основная идея:

Скажем, у нас есть 2 массива, PRE и IN.

Preorder traversing подразумевает, что PRE[0] является корневым узлом.

Затем мы можем найти этот PRE[0] в IN, скажем, это IN[5].

Теперь мы знаем, что IN[5] является корнем, поэтому мы знаем, что IN [0] - IN [4] находится на левой стороне, IN [6] до конца находится на правой стороне.

Делая это рекурсивно на подмассивах, мы можем построить из него дерево
 */

// Time O(N)
// Space O(N)
const buildTree = function(preorder, inorder) {
  // preorder root-left-right
  // inorder left-root-right

  let preIdx = 0;
  let map = new Map();

  let i = 0;
  for (let val of inorder) {
    map.set(val, i++);
  }

  return dfs(0, inorder.length);

  function dfs(left, right) {
    // если нет элементов для построения поддеревьев
    if (left === right) return null;

    let val = preorder[preIdx];
    const root = new TreeNode(val);

    let index = map.get(val);

    preIdx++;

    root.left = dfs(left, index);
    root.right = dfs(index + 1, right);

    return root;
  }
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const buildTree2 = function(preorder, inorder) {
  // preorder root-left-right
  // inorder left-root-right

  if (!preorder.length && !inorder.length) return null;
  let map = new Map();
  let root = new TreeNode(preorder[0]);

  let i = 0;
  for (let val of inorder) {
    map.set(val, i++);
  }

  for (let value of preorder.slice(1)) {
    let prev = root;
    let node = root;

    // идем по всему дереву от начального root до той ноды, в которой должно находиться заначение value изходя из in orderer обхода
    while (node) {
      prev = node;

      if (map.get(value) > map.get(node.val)) {
        node = node.right;
      } else if (map.get(value) < map.get(node.val)) {
        node = node.left;
      }
    }

    if (map.get(prev.val) > map.get(value)) {
      prev.left = new TreeNode(value);
    } else {
      prev.right = new TreeNode(value);
    }
  }

  return root;
};
