/*

Given two arrays of integers with equal lengths, return the maximum value of:

|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

where the maximum is taken over all 0 <= i, j < arr1.length.

Example 1:
  Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
  Output: 13

Example 2:
  Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
  Output: 20
  

Constraints:
  2 <= arr1.length == arr2.length <= 40000
  -10^6 <= arr1[i], arr2[i] <= 10^6

*/

// Time O(N)
// Space O(N)
const maxAbsValExpr = (arr1, arr2) => {
  let t = Array(4)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < arr1.length; i++) {
    t[0].push(arr1[i] + arr2[i] + i);
    t[1].push(arr1[i] + arr2[i] - i);
    t[2].push(arr1[i] - arr2[i] + i);
    t[3].push(arr1[i] - arr2[i] - i);
  }

  let max = 0;

  for (let i = 0; i < 4; i++) {
    let diff = Math.max(...t[i]) - Math.min(...t[i]);

    max = Math.max(max, diff);
  }

  return max;
};

// Time O(N^2)
// Space O(1)
const maxAbsValExpr_II = (arr1, arr2) => {
  let n = arr1.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let x = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);
      if (max < x) {
        max = x;
      }
    }
  }

  return max;
};
