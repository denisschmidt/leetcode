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

Напомним определения предзаказа и прохождения обхода:

Для preorder:
  - Оценить корневой узел
  - Оценить левый узел рекурсивно
  - Оценить правый узел рекурсивно

Для inorder:
  - Оценить левый узел рекурсивно
  - Оценить корневой узел
  - Оценить правый узел рекурсивно

Рассмотрим следующее дерево:
    a
   / \
  b   c
 / \ / \
d  e f  g

Обход preorder для этого дерева будет [a, b, d, e, c, f, g].

Обход по inorder для этого дерева будет [d, b, e, a, f, c, g].

Обратите внимание, что поскольку мы всегда оцениваем корневой узел первым при обходе preorder,
первым элементом в обходе предварительного заказа всегда будет корень.

Тогда второй элемент является либо корнем левого узла, если он есть, либо корнем правого узла.

Но как мы узнаем ????

Мы можем посмотреть на inorder обход.

Поскольку мы сначала смотрим на левый узел в обходе по порядку, все элементы вплоть до корня будут частью левого поддерева.

Все элементы после корня будут правым поддеревом.

Preorder:
[a, b, d, e, c, f, g]
| r | left  | right |

Inorder:
[d, b, e, a, f, c, g]
| left  | r | right |

(r = root)

Это дает нам представление о том, как решить проблему:

  - Найти корень, посмотрев на первый элемент в обходе Preorder
  - Узнайте, сколько элементов находится в левом поддереве и правом поддереве, выполнив поиск по индексу корня в обходе inorder.
  - Рекурсивно восстановить левое поддерево и правое поддерево

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
