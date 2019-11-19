/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:
  Input: [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
  Input: [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

Solution
https://leetcode.com/articles/jump-game/

 */

// Time O(N^2)
// Space O(N)
const canJump = nums => {
  const memo = Array(nums.length).fill(0);
  memo[memo.length - 1] = 1;

  return helper(memo, 0);

  function helper(memo, position) {
    if (memo[position] !== 0) {
      return Boolean(memo[position]);
    }
    let furthestJump = Math.min(nums[position] + position, nums.length - 1);
    for (let nextPosition = position + 1; nextPosition < furthestJump; nextPosition++) {
      if (helper(memo, nextPosition)) {
        memo[position] = 1;
        return true;
      }
    }

    memo[position] = -1;
    return false;
  }
};

// Time O(N)
// Space O(1)
const canJump2 = nums => {
  let lastPos = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }

  return lastPos === 0;
};

// Time O(N)
// Space O(1)
const canJump3 = nums => {
  let max = 0;
  for (let i = 0; i <= max; i++) {
    max = Math.max(max, i + nums[i]);
    if (max >= nums.length - 1) return true;
  }
  return false;
};
