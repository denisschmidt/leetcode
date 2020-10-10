/*

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Example 1:
  Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
  Output: 2
  Explanation:
    The first figure represents the dominoes as given by A and B: before we do any rotations.
    If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:
  Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
  Output: -1
  Explanation:  In this case, it is not possible to rotate the dominoes to make one row of values equal.

Note:
  1 <= A[i], B[i] <= 6
  2 <= A.length == B.length <= 20000

 */

// Time O(N)
// Space O(N)
const minDominoRotations = (A, B) => {
  let a = helper([...A], [...B], true);
  let b = helper([...A], [...B], false);

  let cnt = Math.min(a, b);

  return cnt == Number.MAX_VALUE ? -1 : cnt;

  function helper(A, B, isFirst) {
    let m1 = {};
    let m2 = {};
    let n = A.length;

    for (let i = 1; i <= 6; i++) {
      m1[i] = 0;
      m2[i] = 0;
    }

    for (let i = 0; i < n; i++) {
      m1[A[i]] = ~~m1[A[i]] + 1;
      m2[B[i]] = ~~m2[B[i]] + 1;
    }

    let cnt = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
      let aVal = A[i];
      let bVal = B[i];
      if (isFirst && m1[bVal] > m2[aVal] && aVal != bVal) {
        reMap(m1, m2, aVal, bVal);
        swap(i, A, B);
        cnt++;
      } else if (!isFirst && m1[bVal] < m2[aVal] && aVal != bVal) {
        reMap(m1, m2, aVal, bVal);
        swap(i, A, B);
        cnt++;
      }
    }

    for (let i = 1; i <= 6; i++) {
      max = Math.max(max, m1[i], m2[i]);
    }

    return max == n ? cnt : Number.MAX_VALUE;
  }

  function swap(i, A, B) {
    let tmp = A[i];
    A[i] = B[i];
    B[i] = tmp;
  }

  function reMap(m1, m2, aVal, bVal) {
    m1[bVal]++;
    m1[aVal]--;
    m2[aVal]++;
    m2[bVal]--;
  }
};
