/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

Example 2:
  Input: nums = [1], k = 1
  Output: [1]

Example 2:
  Input: nums = [3,0,1,0], k = 1
  Output: [0]
1

Note:
  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

// Time O(2N)
// Space O(N)
const topKFrequent = function(nums, k) {
  const map = {};
  const ans = [];
  const stack = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }

  Object.keys(map).forEach(key => {
    const value = map[key];
    stack[value].push(key);
  });

  for (let i = stack.length - 1; i >= 0, k > 0; k--) {
    while (stack[i].length === 0 && i >= 0) i--;
    ans.push(stack[i].shift());
  }

  return ans;
};
