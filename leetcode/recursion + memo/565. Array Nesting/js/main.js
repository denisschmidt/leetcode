/*
A zero-indexed array A of length N contains all integers from 0 to N-1.
Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]],
and then A[A[A[i]]]…
By that analogy, we stop adding right before a duplicate element occurs in S.

Example 1:
  Input: A = [5,4,0,3,1,6,2]
  Output: 4
  Explanation:

  A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
  One of the longest S[K]:
  S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
   
Note:
  N is an integer within the range [1, 20,000].
  The elements of A are all distinct.
  Each element of A is an integer within the range [0, N-1].

 */

// Time O(N)
// Space O(N)
const arrayNesting = nums => {
  let res = 0;
  let n = nums.length;
  let visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    let j = i;
    let cnt = 0;

    while (!visited[j]) {
      visited[j] = true;
      cnt++;
      j = nums[j];
    }
    res = Math.max(res, cnt);
  }
  return res;
};

// Time O(N)
// Space O(N)
const arrayNesting_II = nums => {
  let n = nums.length;
  let max = 0;
  let dp = Array(n).fill(null);
  let visited = Array(n).fill(false);

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, dfs(i));
  }

  return max;

  function dfs(i) {
    if (i >= n || nums[i] >= n) return 0;
    if (visited[i]) return 0;

    if (dp[i] != null) return dp[i];

    visited[i] = true;

    dp[i] = 1 + dfs(nums[i]);

    visited[i] = false;

    return dp[i];
  }
};
