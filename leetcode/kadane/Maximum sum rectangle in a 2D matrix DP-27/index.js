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

  https://www.geeksforgeeks.org/maximum-sum-rectangle-in-a-2d-matrix-dp-27/
  https://www.youtube.com/watch?v=g8bSdXCG-lA

*/

// Time O(row*col*col)
// Space O(row)
function findMaxSum(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let maxSum = 0;

  for (let i = 0; i < m; i++) {
    let nums = Array(n).fill(0);

    for (let j = i; j < m; j++) {
      for (let k = 0; k < n; k++) {
        nums[k] += matrix[k][j];
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
