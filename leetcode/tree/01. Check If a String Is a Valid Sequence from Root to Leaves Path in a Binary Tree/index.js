/* 

Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.
 

Example 1:
  Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
  Output: true
  Explanation: 
  The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
  Other valid sequences are: 
  0 -> 1 -> 1 -> 0 
  0 -> 0 -> 0

Example 2:
  Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
  Output: false 
  Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.

Example 3:
  Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
  Output: false
  Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 

Constraints:
  1 <= arr.length <= 5000
  0 <= arr[i] <= 9
  Each node's value is between [0 - 9].

*/

// Time O(N)
// Space O(N)
const isValidSequence = (root, arr) => {
  return helper(root, 0);

  function helper(node, idx) {
    if (node == null) return false;

    if (node.val == arr[idx] && node.left == null && node.right == null) {
      if (idx == arr.length - 1) {
        return true;
      } else {
        return false;
      }
    }

    if (node.val != arr[idx]) {
      return false;
    }

    return helper(node.left, idx + 1) || helper(node.right, idx + 1);
  }
};
