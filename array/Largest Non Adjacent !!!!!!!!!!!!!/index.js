/*

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

 */

// Time O(n)
// Space O(n)
const largestNonAdjacent = nums => {
  if (nums.length <= 2) {
    return Math.max(0, nums[0], nums[1]);
  }

  let maxExcludingLast = Math.max(0, nums[0]);
  let maxIncludingLast = Math.max(maxExcludingLast, nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let prev = maxIncludingLast;

    maxIncludingLast = Math.max(maxIncludingLast, maxExcludingLast + nums[i]);
    maxExcludingLast = prev;
  }
  return Math.max(maxIncludingLast, maxExcludingLast);
};

const res = largestNonAdjacent([5, 1, 1, 5]);
console.log('---', res);
