/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
  Input:nums = [1,1,1], k = 2
  Output: 2

Note:
  The length of the array is in range [1, 20,000].
  The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

 */

// Hashmap solution
// Time O(N)
// Space O(N)
const subarraySum = function(nums, k) {
  let sum = 0;
  let map = { 0: 1 };
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let diff = sum - k;

    if (map[diff]) {
      cnt += map[diff];
    }

    map[sum] = ~~map[sum] + 1;
  }

  return cnt;
};

// Time O(N^2)
// Space O(N)
const subarraySum_II = (nums, k) => {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        cnt++;
      }
    }
  }

  return cnt;
};
