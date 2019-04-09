/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

Example 2:
  Input: nums = [1], k = 1
  Output: [1]

Note:

  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const ans = [];
  const map = new Map();
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  }

  // main loop
  for (let [key, value] of map) {
    bucket[value].push(parseInt(key));
  }

  for (let i = nums.length; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    ans.push(bucket[i].shift());
  }

  return ans;
};

const res = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log('---', res);
