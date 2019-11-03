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
const minDominoRotations = (nums1, nums2) => {
  if (nums1.length === 1 && nums2.length === 1) return 0;
  const n = nums1.length;
  let minCnt = Number.MAX_VALUE;
  const map1 = {};
  const map2 = {};
  const eq = {};
  for (let i = 0; i < n; i++) {
    const n1 = nums1[i];
    const n2 = nums2[i];
    if (n1 !== n2) {
      map1[n1] = ~~map1[n1] + 1;
      map2[n2] = ~~map2[n2] + 1;
    } else {
      eq[n1] = ~~eq[n1] + 1;
    }
  }

  if (eq[nums1[0]] === n) return 0;

  for (let i = 0; i < n; i++) {
    const num = nums1[i];
    const l1 = map1[num] || 0;
    const l2 = map2[num] || 0;
    const l3 = eq[num] || 0;
    if (l1 + l2 + l3 >= n) {
      minCnt = Math.min(minCnt, Math.abs(Math.max(l2 + l3, l1 + l3) - n));
    }
  }

  return minCnt === Number.MAX_VALUE ? -1 : minCnt;
};
