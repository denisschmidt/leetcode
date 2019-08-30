/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
  Input: [2,2,1]
  Output: 1
  
Example 2:
  Input: [4,1,2,1,2]
  Output: 4

 */
// Time O(N)
// Space O(N)

var singleNumber = function(nums) {
  const map = new Map();

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  for (let [key, val] of map) {
    if (val === 1) {
      return key;
    }
  }
  return 0;
};
