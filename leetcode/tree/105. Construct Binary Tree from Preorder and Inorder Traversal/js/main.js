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

Preorder: root - left - right
[a, b, d, e, c, f, g]
| r | left  | right |

Inorder: left - root - right
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
const buildTree = (preorder, inorder) => {
  // preorder root-left-right
  // inorder left-root-right
  let map = new Map();
  let index = 0;

  inorder.forEach((v, i) => map.set(v, i));

  return dfs(0, preorder.length);

  function dfs(lo, hi) {
    if (lo >= hi) {
      return null;
    }

    let val = preorder[index++];
    let node = new TreeNode(val);
    let mid = map.get(val);

    node.left = dfs(lo, mid);
    node.right = dfs(mid + 1, hi);

    return node;
  }
};
