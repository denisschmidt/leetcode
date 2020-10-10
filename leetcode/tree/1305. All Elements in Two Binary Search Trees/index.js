/*
Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

Example 1:
  Input: root1 = [2,1,4], root2 = [1,0,3]
  Output: [0,1,1,2,3,4]

Example 2:
  Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
  Output: [-10,0,0,1,2,5,7,10]

Example 3:
  Input: root1 = [], root2 = [5,1,7,0,2]
  Output: [0,1,2,5,7]

Example 4:
  Input: root1 = [0,-10,10], root2 = []
  Output: [-10,0,10]

Example 5:
  Input: root1 = [1,null,8], root2 = [8,1]
  Output: [1,1,8,8]
 

Constraints:
  Each tree has at most 5000 nodes.
  Each node's value is between [-10^5, 10^5].

*/

// Time O(N)
// Space O(N)
const getAllElements = (root1, root2) => {
  let a = inOrder(root1);
  let b = inOrder(root2);

  return combine(a, b);

  function inOrder(root) {
    let nums = [];
    helper(root);
    return nums;
    function helper(node) {
      if (node === null) return;
      helper(node.left);
      nums.push(node.val);
      helper(node.right);
    }
  }

  function combine(a, b) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < a.length || j < b.length) {
      if (i === a.length) {
        result.push(b[j]);
        j++;
      } else if (j === b.length) {
        result.push(a[i]);
        i++;
      } else if (a[i] <= b[j]) {
        result.push(a[i]);
        i++;
      } else {
        result.push(b[j]);
        j++;
      }
    }

    return result;
  }
};
