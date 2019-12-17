/*
If the depth of a tree is smaller than 5, then this tree can be represented by a list of three-digits integers.

For each integer in this list:

The hundreds digit represents the depth D of this node, 1 <= D <= 4.
The tens digit represents the position P of this node in the level it belongs to, 1 <= P <= 8. 
The position is the same as that in a full binary tree.
The units digit represents the value V of this node, 0 <= V <= 9.
 
Given a list of ascending three-digits integers representing a binary tree with the depth smaller than 5, 
you need to return the sum of all paths from the root towards the leaves.

Example 1:
  Input: [113, 215, 221]
  Output: 12
  Explanation: 
  The tree that the list represents is:
    3
   / \
  5   1

  The path sum is (3 + 5) + (3 + 1) = 12.
 

Example 2:
  Input: [113, 221]
  Output: 4
  Explanation: 
  The tree that the list represents is: 
    3
     \
      1

  The path sum is (3 + 1) = 4.

Example 3:
  Input: [113, 215, 221, 315, 326, 337, 338]
               3
              /  \  
            /     \
           /       \
          5        1
        /   \     /  \  
      5     6   7    8
    / \   / \  / \   / \
   /\/\  /\/\ /\ /\ /\ /\

 
1: [3] 1 
2: [5, 1] 2 
3: [5, 6, 7, 8] 4
4: 8
5: 16

Количество узлов на всех уровнях, кроме последнего, 2^(d - 1) где d - глубина дерева.
Количество узлов на последнем уровне может варьироваться от 1 до 2^d.

*/

// Time O(N * D) - где D макс число узлов на последнем уровне
// Space O(N)
const pathSum = nums => {
  const map = [];
  let maxValue = 1;

  for (let i = 0; i < nums.length; i++) {
    let index = Math.floor(nums[i] / 100);
    let maxNums = Math.pow(2, index - 1);
    maxValue = Math.max(maxValue, index);

    if (!map[index]) {
      map[index] = Array(maxNums).fill(null);
    }
    map[index][Math.floor((nums[i] % 100) / 10) - 1] = nums[i] % 10;
  }

  let result = 0;

  for (let i = 1; i <= maxValue; i++) {
    const a = map[i];
    const b = map[i + 1];
    if (!b) break;
    let index = 0;
    for (let j = 0; j < a.length; j++) {
      let k = index;
      if (a[j] !== null && b[k] === null && b[k + 1] === null) {
        result += a[j];
      }
      for (; k < index + 2 && index < b.length; k++) {
        if (b[k] === null) continue;
        b[k] = a[j] + b[k];
      }
      index = k;
    }
  }

  result += map[maxValue].reduce((acc, v) => (v === null ? acc : acc + v), 0);

  return result;
};
