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

// **Complexity Analysis**
//  Time complexity : O(n). The entire numsnums array is traversed only once.
//
//  Space complexity : O(n). Hashmap mapmap can contain upto n distinct entries in the worst case.

// Prefix Sum Solution
// nums[i, j] = nums[j] - nums[i-1]; important !!!!!
const subarraySum = function(nums, k) {
  let sum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }
  return count;
};

const res = subarraySum([1, 1, 1], 2);
console.log('---', res);

// =====================================================================================================================

const subarraySum2 = function(nums, k) {
  const size = nums.length;
  let cnt = 0;
  let sum = 0;
  for (let start = 0; start < size; start++) {
    for (let end = start + 1; end <= size; end++) {
      sum = 0;
      for (let l = start; l < end; l++) {
        sum += nums[l];
      }
      if (sum === k) {
        cnt++;
      }
    }
  }
  return cnt;
};

const res2 = subarraySum2([1, 1, 1], 2);
console.log('---', res2);

// =====================================================================================================================

const subarraySum3 = function(nums, k) {
  let cnt = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum === k) {
        cnt++;
      }
    }
  }
  return cnt;
};

const res3 = subarraySum3([28, 54, 7, -70, 22, 65, -6], 100);
console.log('---', res3);
