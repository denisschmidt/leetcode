/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()".
And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string
and the original binary tree.

Example 1:
  Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

  Output: "1(2(4))(3)"

  Explanation:
    Originallay it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs.
    And it will be "1(2(4))(3)".

Example 2:
  Input: Binary tree: [1,2,3,5,6]
       1
     /   \
    2     3
   /  \
  5    6

Output: "1(2(5)(6))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

 */

// Time O(N)
// Space O(N)
const tree2str = function (t) {
  let stack = [t];
  let str = '';

  if (!t) return '';

  while (stack.length) {
    let node = stack.pop();

    if (node === ')') {
      str += ')';
      continue;
    }

    str += '(' + node.val;

    if (!node.left && node.right) {
      str += '()';
    }

    if (node.right) {
      stack.push(')');
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(')');
      stack.push(node.left);
    }
  }

  return str.substring(1);
};

/*

Необходимо проверить 4 случая:
  1) текущий узел равен нулю, вернуть пустую строку
  2) левый и правый узлы равны нулю, вернуть корневое значение например, «1»
  3) только правый узел является нулевым, возвращает корневое значение и левое значение, например, «1(2)»
  4) левый и правый узлы не равны нулю, возвращают как левые, так и правые значения, например, "1(2)(3)"

 */
// Time O(N)
// Space O(N)

/*
Пример:
       1
     /   \
    2     3
   /  \
  5    6

Bottom-top рекурсия дошли до низу и поднимаемся вверх по стеку

5 '' ''
6 '' ''
2 '5' '6'
3 '' ''
1 '2(5)(6)' '3'

 */
const tree2str2 = root => {
  if (!root) return '';

  let val = root.val;

  let left = tree2str2(root.left);
  let right = tree2str2(root.right);

  console.log(val, left, right);

  if (!left && !right) {
    return `${val}`; // both left and right are empty
  }

  if (!right) {
    return `${val}(${left})`; // right is empty, keep the left
  }

  return `${val}(${left})(${right})`; // left and right are not empty
};

const { makeTreeNodes } = require('../../algorithms/treeNode');

tree2str2(makeTreeNodes([1, 2, 3, 5, 6]));
