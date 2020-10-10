/*

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:
  Input: n = 10
  Output: 12
  Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:  
  1 is typically treated as an ugly number.
  n does not exceed 1690.

*/

// Time O(1690) 1690×5=8450 operations
// Space O(1690)
const nthUglyNumber = n => {
  let nums = Array(1690).fill(0);
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  nums[0] = 1;

  for (let i = 1; i < 1690; i++) {
    let ugly = Math.min(Math.min(nums[i2] * 2, nums[i3] * 3), nums[i5] * 5);

    nums[i] = ugly;

    if (nums[i2] * 2 == ugly) {
      i2++;
    }
    if (nums[i3] * 3 == ugly) {
      i3++;
    }
    if (nums[i5] * 5 == ugly) {
      i5++;
    }
  }

  return nums[n - 1];
};
