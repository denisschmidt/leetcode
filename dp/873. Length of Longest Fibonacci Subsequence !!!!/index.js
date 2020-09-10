/*
A sequence X_1, X_2, ..., X_n is fibonacci-like if:

n >= 3
X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
Given a strictly increasing array A of positive integers forming a sequence,
find the length of the longest fibonacci-like subsequence of A.

If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A,
without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)



Example 1:
  Input: [1,2,3,4,5,6,7,8]
  Output: 5
  Explanation:
  The longest subsequence that is fibonacci-like: [1,2,3,5,8].

Example 2:
  Input: [1,3,7,11,12,14,18]
  Output: 3

Explanation:
  The longest subsequence that is fibonacci-like:
  [1,11,12], [3,11,14] or [7,11,18].


Note:
  3 <= A.length <= 1000
  1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
  (The time limit has been reduced by 50% for submissions in Java, C, and C++.)

 */

// Solution 1: Brute Force with Set

// Complexity Analysis
//
// Time Complexity: O(N^2 * log M)
//  where N is the length of A, and MM is the maximum value of A.
//
// Space Complexity: O(N), the space used by the set S.

/**
 * @param {number[]} a
 * @return {number}
 */
const lenLongestFibSubseq = function (a) {
  let n = a.length,
    set = new Set();
  let ans = 0;

  for (let x of a) {
    set.add(x);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let curr = a[j],
        next = a[i] + a[j];
      let len = 2;
      while (set.has(next)) {
        let tmp = next;
        next += curr;
        curr = tmp;
        ans = Math.max(ans, ++len);
      }
    }
  }
  return ans >= 3 ? ans : 0;
};

const res = lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]); // 5
console.log('---', res);

// =====================================================================================================================

// Solution 2  Dynamic Programming

const lenLongestFibSubSeq = function (a) {
  let s = a.length,
    ans = 0,
    map = {};
  const dp = [...Array(s)].map(() => Array(s).fill(2));

  for (let i = 0; i < s; i++) {
    map[a[i]] = i;

    for (let j = 0; j < i; j++) {
      if (a[i] - a[j] < a[j] && a[i] - a[j] in map) {
        let diff = a[i] - a[j];
        let k = map[diff];
        dp[j][i] = Math.max(dp[j][i], 1 + dp[k][j]);
      }
      ans = Math.max(ans, dp[j][i]);
    }
  }
  return ans >= 3 ? ans : 0;
};

const res2 = lenLongestFibSubSeq([1, 3, 7, 11, 12, 14, 18]); // 3
console.log('---', res2);

// =====================================================================================================================

// Solution 3  Dynamic Programming

// dp[i][j] represents the length of longest sequence which ends with A[i] and A[j].

const lenLongestFibSubSeqDP = function (a) {
  let s = a.length,
    ans = 0,
    map = new Map();
  const dp = [...Array(s)].map((v, i) => {
    map.set(a[i], i);
    return Array(s).fill(2);
  });

  for (let i = 2; i < s; i++) {
    for (let j = i - 1; j > 0; j--) {
      let prev = a[i] - a[j];
      if (prev >= a[j]) {
        break;
      }
      if (!map.has(prev)) {
        continue;
      }
      let k = map.get(prev);
      dp[j][i] = dp[k][j] + 1;
    }
  }

  for (let i = 2; i < s; i++) {
    for (let j = 1; j < s - 1; j++) {
      if (dp[j][i] > 2) {
        ans = Math.max(ans, dp[j][i]);
      }
    }
  }
  return ans;
};

const res3 = lenLongestFibSubSeqDP([1, 3, 4, 7, 8]); // 3
console.log('---', res3);
