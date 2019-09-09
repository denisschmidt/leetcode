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

// Time O (M * N * min (M, N)), где M, N - длины nums1, nums2. Худший случай - это когда все элементы равны.
// Space O(M * N)
var findLength = function(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  let ans = 0;
  const dp = Array(n)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = 1;

        if (i > 0 && j > 0) {
          dp[i][j] += dp[i - 1][j - 1];
        }

        ans = Math.max(dp[i][j], ans);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O (M * N * min (M, N)), где M, N - длины nums1, nums2. Худший случай - это когда все элементы равны.
// Space O(1)
const findLength2 = function(nums1, nums2) {
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
