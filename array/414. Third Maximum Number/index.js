/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

 */

// Time O(N)
const thirdMax = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let first = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    first = Math.max(first, nums[i]);
  }

  let second = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first) continue;
    second = Math.max(second, nums[i]);
  }
  let thirt = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second) continue;
    thirt = Math.max(thirt, nums[i]);
  }

  return thirt === Number.MIN_VALUE ? first : thirt;
};

const res = thirdMax([1, 2, -2147483648]);
console.log('---', res);
