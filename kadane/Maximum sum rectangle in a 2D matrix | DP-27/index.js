/*
  Given a 2D array, find the maximum sum subarray in it. 
  
  For example, in the following 2D array, the maximum sum subarray is highlighted with blue rectangle and sum of this subarray is 29.

  Maximum sum rectangle in a 2D matrix | DP-27

  [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [-4, -1, 1, 7, -6],
  ]

  Max sum is: 29

*/

// Time O(row*col*col)
// Space O(row)
function findMaxSum(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxSum = 0;

  for (let left = 0; left < cols; left++) {
    let nums = Array(rows).fill(0);

    for (let right = left; right < cols; right++) {
      for (let k = 0; k < rows; k++) {
        nums[k] += matrix[k][right];
      }

      let kadaneResult = kadane(nums);

      if (kadaneResult > maxSum) {
        maxSum = kadaneResult;
      }
    }
  }

  return maxSum;
}

function kadane(nums) {
  let currSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i] + currSum, nums[i]);

    if (currSum > max) {
      max = currSum;
    }
  }

  return max;
}

let ans = findMaxSum([
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 10, 1, 3],
  [-4, -1, 1, 7, -6],
]);

console.log(ans);
