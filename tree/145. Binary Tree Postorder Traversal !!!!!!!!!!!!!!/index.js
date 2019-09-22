/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

Посетить узлы нужно в порядке left-right-root

 */

// Решение через один стек
// https://www.youtube.com/watch?v=xLQKdq0Ffjg

// Time O(N)
// Space O(H)
const postorderTraversal = function(root) {
  let current = root;
  let stack = [];
  let ans = [];

  while (current != null || stack.length) {
    if (current != null) {
      stack.unshift(current);
      current = current.left;
    } else {
      let temp = stack[0].right;

      if (temp == null) {
        temp = stack.shift();
        ans.push(temp.val);

        while (stack.length && temp === stack[0].right) {
          temp = stack.shift();
          ans.push(temp.val);
        }
      } else {
        current = temp;
      }
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
// Решение через два стека s1 и s2
const postorderTraversal2 = function(root) {
  if (!root) return [];

  const s1 = [];
  const s2 = [];

  s1.push(root);

  while (s1.length) {
    let node = s1.pop();
    s2.push(node.val);

    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }

  return s2.reverse();
};
