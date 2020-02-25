/*
  [2,-1,2] 3


  1, 2, [3,4,5] 10  [3, 4, 5] -> 12  left = 3 

  1, 3 [6,10,15,] 25

*/

// 862. Shortest Subarray with Sum at Least K

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
  let prefix = [A[0]];

  for (let i = 1; i < A.length; i++) {
    prefix[i] = prefix[i - 1] + A[i];
  }

  for (let i = 0; i < A.length; i++) {}
};

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray_II = function(A, K) {
  let len = A[0] >= K ? 1 : Number.MAX_VALUE;

  for (let i = 0; i < A.length; i++) {
    let sum = A[i];
    if (sum >= K) {
      len = Math.min(len, 1);
    }
    for (let j = i + 1; j < A.length; j++) {
      sum += A[j];
      if (sum >= K) {
        len = Math.min(len, j - i + 1);
      }
    }
  }

  return len === Number.MAX_VALUE ? -1 : len;
};
