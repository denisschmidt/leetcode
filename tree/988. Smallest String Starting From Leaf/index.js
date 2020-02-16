/*
Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z': 
a value of 0 represents 'a', a value of 1 represents 'b', and so on.

Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

(As a reminder, any shorter prefix of a string is lexicographically smaller: 
for example, "ab" is lexicographically smaller than "aba".  A leaf of a node is a node that has no children.)


Example 1:
  Input: [0,1,2,3,4,3,4]
  Output: "dba"

Example 2:
  Input: [25,1,3,1,3,0,2]
  Output: "adz"

Example 3:
  Input: [2,2,1,null,1,0,null,0]
  Output: "abc"
 

Note:
  The number of nodes in the given tree will be between 1 and 8500.
  Each node in the tree will have a value between 0 and 25.
  
*/

// Bottom-Top решение

// Time O(N)
// Space O(N)
const smallestFromLeaf = function(root, parent = null) {
  if (!root) return '';

  let left = smallestFromLeaf(root.left, root);
  let right = smallestFromLeaf(root.right, root);

  if (!left.length && !right.length) {
    return String.fromCharCode(97 + root.val);
  }

  if (left.length) {
    left += String.fromCharCode(97 + root.val);
  }

  if (right.length) {
    right += String.fromCharCode(97 + root.val);
  }

  if (!left.length || !right.length) {
    return left.length ? left : right;
  }

  if (parent) {
    let s1 = left + String.fromCharCode(97 + parent.val);
    let s2 = right + String.fromCharCode(97 + parent.val);

    return s1 > s2 ? right : left;
  }

  return left > right ? right : left;
};

// Using stack

// Time O(N)
// Space O(N)
const smallestFromLeaf_II = function(root) {
  if (root === null) return '';

  let stack = [root];
  let paths = [''];
  let result = 'z'.repeat(10000);

  while (stack.length) {
    let node = stack.pop();
    let path = paths.pop();
    let curr = String.fromCharCode(97 + node.val);

    if (node.left === null && node.right === null) {
      if (curr + path < result) {
        result = curr + path;
      }
    }

    if (node.left !== null) {
      stack.push(node.left);
      paths.push(curr + path);
    }

    if (node.right !== null) {
      stack.push(node.right);
      paths.push(curr + path);
    }
  }

  return result;
};
