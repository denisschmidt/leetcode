/*
Given a binary tree with N nodes, each node has a different value from {1, ..., N}.

A node in this binary tree can be flipped by swapping the left child and the right child of that node.

Consider the sequence of N values reported by a preorder traversal starting from the root.  
Call such a sequence of N values the voyage of the tree.

(Recall that a preorder traversal of a node means we report the current node's value, then preorder-traverse the left child, then preorder-traverse the right child.)

Our goal is to flip the least number of nodes in the tree so that the voyage of the tree matches the voyage we are given.

If we can do so, then return a list of the values of all nodes flipped.  
You may return the answer in any order.

If we cannot do so, then return the list [-1].

 Example 1:
  Input: root = [1,2], voyage = [2,1]
  Output: [-1]

Example 2:
  Input: root = [1,2,3], voyage = [1,3,2]
  Output: [1]

Example 3:
  Input: root = [1,2,3], voyage = [1,2,3]
  Output: []
 

Note:
  1 <= N <= 100

*/

/*
  Делаем Top-Down обход и меняем местами левого и правого потомка
  Когда мы обнаружим, что значение узла не соответствует последовательности nums.

  Замена узлов должно влиять на все поддерево

  Считаем что массив nums - это правильный обход дерева

*/

// Time O(N)
// Space O(N)
const flipMatchVoyage = function (root, nums) {
  let index = 0;
  let result = [];

  return helper(root) ? result : [-1];

  function helper(node) {
    if (node == null) {
      return true;
    }

    if (node.val !== nums[index++]) {
      return false;
    }

    if (node.left !== null && node.left.val !== nums[index]) {
      result.push(node.val);

      return helper(node.right) && helper(node.left);
    }

    return helper(node.left) && helper(node.right);
  }
};

// Time O(N)
// Space O(N)
const flipMatchVoyage_II = function (root, nums) {
  let result = [];

  let index = 0;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (node !== null) {
      if (node.val !== nums[index++]) {
        return [-1];
      }

      if (node.right && node.right.val === nums[index]) {
        if (node.left) {
          result.push(node.val);
        }
        stack.push(node.left);
        stack.push(node.right);
      } else {
        stack.push(node.right);
        stack.push(node.left);
      }
    }
  }

  return result;
};
