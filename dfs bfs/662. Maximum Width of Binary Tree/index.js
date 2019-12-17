/*
Given a binary tree, write a function to get the maximum width of the given tree. 
The width of a tree is the maximum width among all levels. 
The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes 
  (the leftmost and right most non-null nodes in the level, 
  where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:
  Input: 
            1
          /   \
         3     2
        / \     \  
       5   3     9 
  Output: 4
  Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

Example 2:
  Input: 
          1
         /  
        3    
       / \       
      5   3     
  Output: 2
  Explanation: The maximum width existing in the third level with the length 2 (5,3).

Example 3:
  Input: 
          1
         / \
        3   2 
       /        
      5      
  Output: 2
  Explanation: The maximum width existing in the second level with the length 2 (3,2).

Example 4:
  Input: 
          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7 
  Output: 8
  Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).


Note: Answer will in the range of 32-bit signed integer.

*/

// Time O(N)
// Space O(N)
const widthOfBinaryTree = root => {
  if (!root) return 0;

  let max = 0;
  let mins = [0];

  helper(root, 0, 0);

  return max;

  function helper(node, index, depth) {
    if (!node) return;

    if (depth === mins.length) mins[depth] = index;

    let diff = index - mins[depth];

    max = Math.max(max, diff + 1);

    helper(node.left, diff * 2, depth + 1);
    helper(node.right, diff * 2 + 1, depth + 1);
  }
};

// Time O(N)
// Space O(N)
const widthOfBinaryTree2 = root => {
  if (!root) return 0;
  if (root && !root.left && !root.right) return 1;

  let map = new Map();
  let maxIndex = 0;
  let result = 0;

  helper(root, 1, 0);

  for (let i = 0; i <= maxIndex; i++) {
    let nums = map.get(i);
    let diff = nums.length > 1 ? nums[nums.length - 1] - nums[0] + 1 : 1;
    result = Math.max(result, diff);
  }

  return result;

  function helper(node, val, depth) {
    if (node === null) return;

    node.val = val;
    maxIndex = Math.max(maxIndex, depth);

    if (!map.has(depth)) {
      map.set(depth, []);
    }

    map.get(depth).push(node.val);

    helper(node.left, val === 1 ? 1 : val * 2 - 1, depth + 1);
    helper(node.right, val === 1 ? 2 : val * 2, depth + 1);
  }
};

/*

          1
         / \
        3   2
       / \ /  \  
      5  0 0   9 
     /\ /\/\  / \
    6           7
*/
