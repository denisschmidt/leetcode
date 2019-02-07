/*
In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

Example :

  Input:
    [1,2,3,4,5,6,7,8]
  Output: true

  Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.

Note:
  The length of A will be in the range [1, 30].
  A[i] will be in the range of [0, 10000].
 */

/*
Algorithm:
  1. Intial put all items in subset B.
  2. Pull items from B into C.
  3. If Avg(B) == Avg(C) then terminate search with success.
  4. Since the items are sorted average of C increases with more higher value items added
  => termitate seach along current path as it will not lead to solution.
 */

const backtracking = (A, sum, partsize, partsum, start) => {
  if (partsize && partsum !== A.length) {
    let v1 = partsum * (A.length - partsize);
    let v2 = (sum - partsum) * partsize;

    if (v1 === v2) {
      return true;
    } else if (v1 > v2) {
      return false;
    }
  }

  for (let i = start; i < A.length; i++) {
    if (i !== start && A[i] === A[i - 1]) continue;
    if (backtracking(A, sum, partsize + 1, partsum + A[i], i + 1)) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} A
 * @return {boolean}
 */
const splitArraySameAverage = function(A) {
  const sum = A.reduce((acc, item) => acc + item, 0);
  A.sort((a, b) => a - b);
  return backtracking(A, sum, 0, 0, 0);
};

const res = splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('---', res);

// =====================================================================================================================
