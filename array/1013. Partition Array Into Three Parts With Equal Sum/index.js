/*
  Given an array A of integers.

  Return true if and only if we can partition the array into three non-empty parts with equal sums.


  Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])



  Example 1:

  Input: [0,2,1,-6,6,-7,9,1,2,0,1]
  Output: true
  Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
  Example 2:

  Input: [0,2,1,-6,6,7,9,-1,2,0,1]
  Output: false
  Example 3:

  Input: [3,3,6,5,-2,2,5,1,-9,4]
  Output: true
  Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = function (A) {
  const total = A.reduce((acc, val) => acc + val, 0);
  const size = A.length;
  let sum = 0;

  let count = 0;
  if (total % 3 !== 0) {
    return false;
  }

  for (let i = 0; i < size && count < (total !== 0 ? 2 : 3); i++) {
    sum = sum + A[i];
    if (sum === total / 3) {
      count++;
      sum = 0;
    }
  }

  return count === (total !== 0 ? 2 : 3);
};

const res = canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);

console.log('----', res);
