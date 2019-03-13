/*
Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

Example 1:
  Input: A = [4,5,0,-2,-3,1], K = 5
  Output: 7

Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysDivByK = function(A, K) {
  let path = [];
  let paths = [];
  const backtracking = (A, start, sum, path, paths) => {
    if (start !== 0 && sum % K === 0) {
      paths.push([...path]);
      return;
    } else {
      for (let i = start; i < A.length; i++) {
        if (i > start && A[i] === A[i - 1]) continue; // skip doubles
        path.push(A[i]);
        backtracking(A, ++start, sum + A[i], path, paths);
        path.pop();
      }
    }
  };
  backtracking(A, 0, 0, path, paths);
  return paths;
};

let A = [4, 5, 0, -2, -3, 1],
  K = 5;
const res = subarraysDivByK(A, K);
console.log('====', res);
