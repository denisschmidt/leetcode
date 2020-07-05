/*

Given an array nums of integers, a move consists of choosing any element and decreasing it by 1.

An array A is a zigzag array if either:

Every even-indexed element is greater than adjacent elements, ie. A[0] > A[1] < A[2] > A[3] < A[4] > ...
OR, every odd-indexed element is greater than adjacent elements, ie. A[0] < A[1] > A[2] < A[3] > A[4] < ...
Return the minimum number of moves to transform the given array nums into a zigzag array.

Example 1:
  Input: nums = [1,2,3]
  Output: 2
  Explanation: We can decrease 2 to 0 or 3 to 1.

Example 2:
  Input: nums = [9,6,1,6,2]
  Output: 4
 

Constraints:
  1 <= nums.length <= 1000
  1 <= nums[i] <= 1000

*/

// Time O(N)
// Space O(1)
const movesToMakeZigzag = nums => {
  // считаем кол-во удалений для четного выравнивания и для нечетного выравниванияШ

  return Math.min(calcChanges(nums), calcChanges(nums, true));

  function calcChanges(nums, isOdd) {
    let cnt = 0;
    let i = 0;
    let n = nums.length;

    if (isOdd) {
      cnt = n > 1 && nums[0] >= nums[1] ? Math.abs(nums[1] - 1 - nums[0]) : 0;
      i = 1;
    }

    for (; i < n; i += 2) {
      if (i + 2 < n) {
        if (nums[i] <= nums[i + 1] || nums[i + 2] <= nums[i + 1]) {
          let v = Math.min(nums[i], nums[i + 2]) - 1;
          cnt += Math.abs(v - nums[i + 1]);
        }
      } else {
        if (nums[i] <= nums[i + 1]) {
          let v = nums[i] - 1;
          cnt += Math.abs(v - nums[i + 1]);
        }
      }
    }

    return cnt;
  }
};
