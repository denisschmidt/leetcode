/*

A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

Example 1:
  Input: [9,4,2,10,7,8,8,1,9]
  Output: 5
  Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])

Example 2:
  Input: [4,8,12,16]
  Output: 2

Example 3:
  Input: [100]
  Output: 1

Note:
  1 <= A.length <= 40000
  0 <= A[i] <= 10^9

*/

// нечетное k A[k] > A[k+1] и k четное A[k] < A[k+1]
// четное k A[k] > A[k+1] и k нечетное A[k] < A[k+1]

// Time O(N^2)
// Space O(1)
const maxTurbulenceSize = A => {
  let n = A.length;
  let max = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    j = i;

    while (j < n && ((j % 2 != 0 && A[j] > A[j + 1]) || (j % 2 == 0 && A[j] < A[j + 1]))) {
      j++;
    }

    max = Math.max(max, j - i + 1);

    j = i;

    while ((j < n && j % 2 == 0 && A[j] > A[j + 1]) || (j % 2 != 0 && A[j] < A[j + 1])) {
      j++;
    }

    max = Math.max(max, j - i + 1);
  }

  return max;
};
