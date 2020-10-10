/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up:
Could you do that without using any extra space?  (Assume that the implicit stack space incurred due to recursion does not count).

 */

// Time O(N)
// Space O(N)
const findMode = function (root) {
  if (root === null) return [];
  const stack = [];
  stack.push(root);
  const map = new Map();
  let max = 0;

  while (stack.length) {
    let node = stack.pop();

    if (node) {
      let count = (map.get(node.val) || 0) + 1;
      map.set(node.val, count);
      max = Math.max(max, count);

      stack.push(node.left);
      stack.push(node.right);
    }
  }

  const ans = [];
  for (let [key, value] of map.entries()) {
    if (value === max) ans.push(key);
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findMode2 = function (root) {
  let ans = [];
  let prev;
  let count = 0;
  let maxCount = 0;

  helper(root);

  return ans;

  function helper(node) {
    if (node === null) return;

    helper(node.left);

    if (prev !== null) {
      if (node.val === prev) {
        count++;
      } else {
        count = 1;
      }
    }

    if (count > maxCount) {
      ans = [node.val];
      maxCount = count;
    } else if (count === maxCount) {
      ans.push(node.val);
    }
    prev = node.val;
    helper(node.right);
  }
};
