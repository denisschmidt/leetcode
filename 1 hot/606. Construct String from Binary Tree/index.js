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
  Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

 */

// Time O(N)
// Space O(N)
const tree2str = function(t) {
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
There are 4 cases to check:

  the current node is null, return empty string
  both left and right nodes are null, return the root value, e.g. "1"
  only the right node is null, return root value and left value, e.g. "1(2)"
  both left and right nodes are not null, return both left and right values, e.g. "1(2)(3)"
 */
// Time O(N)
// Space O(N)
const tree2str2 = root => {
  if (!root) return '';

  let val = root.val;

  let left = tree2str2(root.left);
  let right = tree2str2(root.right);

  if (!left && !right) {
    return `${val}`; // both left and right are empty
  }

  if (!right) {
    return `${val}(${left})`; // right is empty, keep the left
  }

  return `${val}(${left})(${right})`; // left and right are not empty
};
