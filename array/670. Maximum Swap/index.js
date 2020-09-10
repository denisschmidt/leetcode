/*

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. 
Return the maximum valued number you could get.

Example 1:
  Input: 2736
  Output: 7236
  Explanation: Swap the number 2 and the number 7.

Example 2:
  Input: 9973
  Output: 9973
  Explanation: No swap.

Note: The given number is in the range [0, 108]

*/

// Time O(N^2)
// Space O(N)
const maximumSwap = function (num) {
  let nums = num.toString().split('');

  for (let i = 0; i < nums.length; i++) {
    let max = nums[i];
    let maxIndex = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] >= max && nums[j] > nums[i]) {
        maxIndex = j;
        max = nums[j];
      }
    }

    if (maxIndex !== -1) {
      swap(nums, i, maxIndex);
      return Number(nums.join(''));
    }
  }

  return num;
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
