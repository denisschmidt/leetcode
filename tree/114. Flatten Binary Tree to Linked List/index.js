/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
 */

// DFS
// Time O(N)
// Space O(1)
const flatten = function(root) {
  if (!root) return null;

  const stack = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    let a = node.right;
    let b = node.left;

    if (b) {
      node.right = b;
      node.left = null;
    }

    while (b && b.right) {
      b = b.right;
    }

    if (b) {
      b.right = a;
    }

    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(1)
// right-left-root
const flatten2 = function(root) {
  let prev = null;
  postOrderer(root);

  function postOrderer(root) {
    if (root == null) return;

    postOrderer(root.right);
    postOrderer(root.left);

    root.right = prev;
    root.left = null;

    prev = root;
  }
};

/*
1) Уходим вправо до 6 потом

2) По стеку поднимаемся до 5

3) Для 5 right будет равен предыдущей ноде это 6 left будет равен null

4) Потом след нода равна 4 для нее right будет равен пред ноде - это у нас нода 5 и так далее....


    1
   / \
  2   5
 / \   \
3   4   6
-----------        
pre = 5
cur = 4

///////////

    1
   / \
  2   \
 / \  |
3   4 |
     \|
      5
       \
        6
-----------
pre = 4
cur = 3

///////////

  1
   / \
  2  |
 /|  |
3 |  |
 \|  |
  4  |
   \ |
    5
     \
      6
-----------
cur = 2
pre = 3

///////////

    1
   / \
  2   \
   \   \
    3   \
     \  |
      4 |
       \|
        5
         \
          6
-----------
cur = 1
pre = 2

///////////

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

 */
