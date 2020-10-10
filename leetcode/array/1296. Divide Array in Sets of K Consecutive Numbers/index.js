/*

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers

Return True if its possible otherwise return False.

Example 1:
  Input: nums = [1,2,3,3,4,4,5,6], k = 4
  Output: true
  Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

Example 2:
  Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
  Output: true
  Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].

Example 3:
  Input: nums = [3,3,2,2,1,1], k = 3
  Output: true

Example 4:
  Input: nums = [1,2,3,4], k = 3
  Output: false
  Explanation: Each array should be divided in subarrays of size 3.
  

Constraints:
  1 <= nums.length <= 10^5
  1 <= nums[i] <= 10^9
  1 <= k <= nums.length
  Note: This question is the same as 846: https://leetcode.com/problems/hand-of-straights/

*/

// Time O(N*K)
// Space O(N)
const isPossibleDivide = (nums, k) => {
  let map = {};

  for (let x of nums) map[x] = ~~map[x] + 1;

  for (let key of Object.keys(map)) {
    if (map[key] > 0) {
      let freq = map[key];

      for (let i = 0; i < k; i++) {
        if (!map.hasOwnProperty(+key + i) || map[+key + i] < freq) {
          return false;
        }
        map[+key + i] = map[+key + i] - freq;
      }
    }
  }
  return true;
};

// Greedy
// Time O(N / K * K)
// Space O(K)
const isPossibleDivide_II = (nums, k) => {
  nums.sort((a, b) => a - b);

  while (nums.length) {
    let cur = nums[0];
    let cnt = 1;
    let removed = [0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - cur == 1) {
        cur = nums[i];
        cnt++;
        removed.push(i);
      }
      if (cnt == k) {
        break;
      }
    }

    if (removed.length == k) {
      let d = 0;
      for (let i of removed) {
        nums.splice(i - d, 1);
        d++;
      }
      removed = [];
    } else {
      return false;
    }
  }

  return true;
};
