/*

Given an array nums and an integer target.

Return the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to target.

Example 1:
  Input: nums = [1,1,1,1,1], target = 2
  Output: 2
  Explanation: There are 2 non-overlapping subarrays [1,1,1,1,1] with sum equals to target(2).

Example 2:
  Input: nums = [-1,3,5,1,4,2,-9], target = 6
  Output: 2
  Explanation: There are 3 subarrays with sum equal to 6.
  ([5,1], [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping.

Example 3:
  Input: nums = [-2,6,6,3,5,4,1,2,8], target = 10
  Output: 3

Example 4:
  Input: nums = [0,0,0], target = 0
  Output: 3
  
Constraints:
  1 <= nums.length <= 10^5
  -10^4 <= nums[i] <= 10^4
  0 <= target <= 10^6

*/

// Time O(N)
// Space O(N)
const maxNonOverlapping = (nums, target) => {
  let map = new Map();
  let sum = 0;
  let prevInterval = [];
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let current = [];

    if (nums[i] == target) {
      current = [i, i];
    } else if (map.has(sum - target)) {
      let j = map.get(sum - target);
      current = [j + 1, i];
    } else if (sum == target) {
      current = [0, i];
    }

    if (current.length && (prevInterval.length == 0 || !overlap(current, prevInterval))) {
      prevInterval = current;
      res++;
    }

    map.set(sum, i);
  }

  return res;

  function overlap([x, y], [u, z]) {
    return z >= x && y >= u;
  }
};

// Time O(NLogN)
// Space O(N)
const maxNonOverlapping_II = (nums, target) => {
  let map = new Map();
  let sum = 0;
  let intervals = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (nums[i] == target) {
      intervals.push([i, i]);
    } else if (map.has(sum - target)) {
      let j = map.get(sum - target);
      intervals.push([j + 1, i]);
    } else if (sum == target) {
      intervals.push([0, i]);
    }

    map.set(sum, i);
  }

  if (intervals.length == 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];
  let cnt = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      end = intervals[i][1];
      cnt++;
    }
  }

  return cnt;
};
