/*
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree.
It contains an integer followed by zero, one or two pairs of parenthesis.
The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.

Example:
  Input: "4(2(3)(1))(6(5))"
  Output: return the tree root node representing the following tree:

         4
       /   \
      2     6
     / \   /
    3   1 5

Note:
  There will only be '(', ')', '-' and '0' ~ '9' in the input string.
  An empty tree is represented by "" instead of "()".


1(3)(1)

Работа алгоритма:
  
У нас есть стек в который мы добавляем:
  1) Предыдущее состояние всего дерева, которое у нас к определенному моменту
  2) И последнюю созданную ноду, но эта нода удаляется из стека при встрече символа ')'

  При большой вложенности мы будем удалять все лишние ноды при нахождении ')' при этом увеличивая вложенность самой главной ноды 

 */

// Time O(N)
// Space O(N)
const str2tree = s => {
  if (s == '' || s.length == 0) return null;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ')') {
      stack.pop();
    } else if ((s[i] >= 0 && s[i] <= 9) || s[i] === '-') {
      let num = s[i] === '-' ? '-' : '';
      if (s[i] === '-') i++;

      while (i < s.length && s[i] >= 0 && s[i] <= 9) {
        num += s[i];
        i++;
      }
      i--;

      let currentNode = new TreeNode(Number(num));

      if (stack.length > 0) {
        let parent = stack.pop();

        if (parent.left != null) {
          parent.right = currentNode;
        } else {
          parent.left = currentNode;
        }
        stack.push(parent);
      }

      stack.push(currentNode);
    }
  }
  return stack.pop();
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const res = str2tree('-4(2(3)(1))(6(5)(7))');
console.log(res);
