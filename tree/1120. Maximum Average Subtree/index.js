/*

Given the root of a binary tree, find the maximum average value of any subtree of that tree.

(A subtree of a tree is any node of that tree plus all its descendants. 
  The average value of a tree is the sum of its values, divided by the number of nodes.)

 
Example 1:
  Input: [5,6,1]
s  Output: 6.00000
  Explanation: 
    For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
    For the node with value = 6 we have an average of 6 / 1 = 6.
    For the node with value = 1 we have an average of 1 / 1 = 1.
    So the answer is 6 which is the maximum.


Note:
  The number of nodes in the tree is between 1 and 5000.
  Each node will have a value between 0 and 100000.
  Answers will be accepted as correct if they are within 10^-5 of the correct answer.

*/

// Time O(N)
// Space O(N)
const maximumAverageSubtree = root => {
  let ans = 0;

  helper(root);

  return ans;

  function helper(node) {
    if (node == null) return [0, 0];

    let [sumLeft, cntLeft] = helper(node.left);
    let [sumRight, cntRight] = helper(node.right);

    let val = node.val + sumLeft + sumRight;
    let cnt = cntLeft + cntRight + 1;

    ans = Math.max(ans, val / cnt);

    return [val, cnt];
  }
};
