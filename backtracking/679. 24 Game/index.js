/*

You have 4 cards each containing a number from 1 to 9. 
You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

Example 1:
  Input: [4, 1, 8, 7]
  Output: True
  Explanation: (8-4) * (7-1) = 24

Example 2:
  Input: [1, 2, 1, 2]
  Output: False

Note:
  The division operator / represents real division, not integer division. 
  For example, 4 / (1 - 2/3) = 12.
  Every operation done is between two numbers. In particular, we cannot use - as a unary operator. 
  For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
  You cannot concatenate numbers together. 
  For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12.

*/

// Time O(1) cуществует жесткое ограничение в 9216 возможных комбинаций.
// Space O(1) промежуточные массивы состоят не более чем из 4-х элементов, а их число ограничено коэффициентом O(1)
const judgePoint24 = function(nums) {
  return dfs(nums);

  function dfs(nums) {
    if (nums.length <= 1) {
      return Math.abs(nums[0] - 24) < 0.01;
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (i == j) continue;

        let a = nums[i];
        let b = nums[j];

        let nums2 = nums.filter((_, k) => k != i && k != j);

        for (let sum of calculate(a, b)) {
          nums2.push(sum);

          if (dfs(nums2)) return true;

          nums2.pop();
        }
      }
    }

    return false;
  }

  function calculate(a, b) {
    return [a + b, a - b, b - a, a * b, a / b, b / a];
  }
};
