/*
In an array A of 0s and 1s, how many non-empty subarrays have sum S?

Example 1:
  Input: A = [1,0,1,0,1], S = 2

  Output: 4

  Explanation:
    The 4 subarrays are bolded below:
    [1,0,1,0,1] -> 1, 0, 1
    [1,0,1,0,1] -> 1, 0, 1, 0
    [1,0,1,0,1] -> 0, 1, 0, 1
    [1,0,1,0,1] -> 1, 0, 1
 */

//Complexity Analysis

// Time Complexity: O(N^2), where N is the length of A.

// Space Complexity: O(N^2) in additional space complexity.
const numSubarraysWithSum = function(nums, target) {
  let ans = 0;
  let sum = 0;
  const size = nums.length;

  for (let i = 0; i < size; i++) {
    sum = nums[i];
    if (sum === target) {
      ans++;
    }
    for (let j = i - 1; j >= 0; j--) {
      sum += nums[j];
      if (sum === target) {
        ans++;
      }
    }
  }
  return ans;
};

const res = numSubarraysWithSum([1, 0, 1, 0, 1], 2);
console.log('---', res);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complexity Analysis

// Time Complexity: O(N), where N is the length of A.

// Space Complexity: O(N) in additional space complexity.

const numSubarraysWithSum2 = function(nums, target) {
  const size = nums.length;
  let sum = 0;
  let ans = 0;
  let count = Array(size).fill(0);
  count[0] = 1;
  for (let i = 0; i < size; i++) {
    sum += nums[i];
    if (sum >= target) {
      ans += count[sum - target];
    }
    count[sum]++;
  }
  return ans;
};

const res2 = numSubarraysWithSum2([1, 0, 1, 0, 1], 2);
console.log('---', res2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complexity Analysis

// Time Complexity: O(N), where N is the length of A.

// Space Complexity: O(N) in additional space complexity.

const numSubarraysWithSum3 = function(nums, target) {
  const size = nums.length;
  let sum = 0;
  let ans = 0;

  // So we use the hashmap to find all pairs
  const map = new Map();
  for (let i = 0; i < size; i++) {
    sum += nums[i];
    if (map.has(sum - target)) {
      ans += map.get(sum - target);
    }

    // Here I is checking for the case where the current element is equal to the sum (it needs no interval to produce the sum).
    if (sum === target) {
      ans++;
    }

    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }
  console.log('---', map);
  return ans;
};

const res3 = numSubarraysWithSum3([1, 0, 1, 0, 1], 2);
console.log('---', res3);
