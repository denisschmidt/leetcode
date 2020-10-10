/*

Given two binary search trees
return True if and only if there is a node in the first tree and a node in the second tree whose values sum up to a given integer target.

 Example 1:
  Input: root1 = [2,1,4], root2 = [1,0,3], target = 5
  Output: true
  Explanation: 2 and 3 sum up to 5.

Example 2:
  Input: root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18
  Output: false
 

Constraints:
  Each tree has at most 5000 nodes.
  -10^9 <= target, node.val <= 10^9

*/

// Time O(N1 + N2)
// Space O(N1 + max(N1, N2))
function twoSumBSTs(root1, root2, target) {
  let stack1 = [];
  let set = new Set();

  while (stack1.length || root1 !== null) {
    while (root1 !== null) {
      stack1.push(root1);
      root1 = root1.left;
    }

    root1 = stack1.pop();
    set.add(target - root1.val);
    root1 = root1.right;
  }

  let stack2 = [];

  while (stack2.length || root2 !== null) {
    while (root2 !== null) {
      stack2.push(root2);
      root2 = root2.left;
    }

    root2 = stack2.pop();

    if (set.has(root2.val)) {
      return true;
    }

    root2 = root2.right;
  }

  return false;
}

// Time O(N1 * N2)
// Space O(N)
function twoSumBSTs_II(root1, root2, target) {
  if (root1 === null) return false;
  if (find(root2, target - root1.val)) return true;
  return twoSumBSTs(root1.left, root2, target) || twoSumBSTs(root1.right, root2, target);
}

function find(node, target) {
  if (node === null) return false;
  if (node.val === target) return true;
  return find(node.left, target) || find(node.right, target);
}
