/*
In an array A of 0s and 1s, how many non-empty subarrays have sum S?

Example 1:
  Input: A = [1,0,1,0,1], S = 2

  Output: 4

  Explanation:
    The 4 subarrays are bolded below:
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
 */

//Complexity Analysis

// Time Complexity: O(N^2), where N is the length of A.

// Space Complexity: O(N^2) in additional space complexity.
const numSubarraysWithSum = function(A, S) {
  let ans = 0;
  let sum = 0;
  const size = A.length;

  for (let i = 0; i < size; i++) {
    sum = A[i];
    if (sum === S) {
      ans++;
    }
    for (let j = i - 1; j >= 0; j--) {
      sum += A[j];
      if (sum === S) {
        ans++;
      }
    }
  }
  return ans;
};

numSubarraysWithSum([1, 0, 1, 0, 1], 2);
