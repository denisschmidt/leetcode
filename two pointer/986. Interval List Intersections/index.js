/*
Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  

The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  

For example, the intersection of [1, 3] and [2, 4] is [2, 3].)


Example 1:
  Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
  Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
  Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.
 
Note:
  0 <= A.length < 1000
  0 <= B.length < 1000
  0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
  NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

 */

// Time: O(M + N), where M, N are the lengths of nums1 and nums2.
// Space: O(N), the maximum size of the answer.
const intervalIntersection = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < nums1.length && j < nums2.length) {
    let first = Math.max(nums1[i][0], nums2[j][0]);
    let second = Math.min(nums1[i][1], nums2[j][1]);

    if (first <= second) ans.push([first, second]);

    if (nums1[i][1] < nums2[j][1]) i++;
    else j++;
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(N)
const intervalIntersection = (nums1, nums2) => {
  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i][1] < nums2[j][0] || nums2[j][0] > nums1[i][1]) break;

      if (overlap(nums1[i], nums2[j])) {
        let first = Math.max(nums1[i][0], nums2[j][0]);
        let second = Math.min(nums1[i][1], nums2[j][1]);
        ans.push([first, second]);
      }
    }
  }
  return ans;
};

function overlap([x, y], [u, z]) {
  return (z > x && y >= u) || (y > u && z >= x);
}
