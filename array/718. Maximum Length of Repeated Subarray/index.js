/*
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

  Input: A: [1,2,3,2,1] B: [3,2,1,4,7]
  Output: 3

Explanation: The repeated subarray with maximum length is [3, 2, 1].
 
Note:

  1 <= len(A), len(B) <= 1000
  0 <= A[i], B[i] < 100

 */

// Time O(N^3)
// Space O(1)
const findLength = function(nums1, nums2) {
  let ans = 0;
  let n = nums1.length;
  let m = nums2.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] === nums2[j]) {
        let start = i + 1;
        let end = j + 1;
        let count = 1;

        while (start < n && end < m && nums1[start] === nums2[end]) {
          count++;
          start++;
          end++;
        }

        ans = Math.max(ans, count);
      }
    }
  }

  return ans;
};
