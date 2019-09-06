/*
440. K-th Smallest in Lexicographical Order

Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n.

Note: 1 ≤ k ≤ n ≤ 109.

Example:

Input:
  n: 13   k: 2

Output:
  10

Explanation:
  The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

 */

// O(K)
const findKthNumber = function(n, k) {
  let cur = 1;
  k--;

  for (let i = 0; i <= n; i++) {
    if (k <= 0) break;

    if (cur * 10 <= n) {
      cur *= 10;
      k--;
    } else if (cur % 10 !== 9 && cur + 1 <= n) {
      if (cur + 9 <= n && cur > 9) {
        let rest = cur % 10;
        cur = cur + 9 - rest;
        k = k - 9 + rest;
      } else {
        cur++;
        k--;
      }
    } else {
      while (Math.floor((cur / 10) % 10) === 9) {
        cur = Math.floor(cur / 10);
      }
      cur = Math.floor(cur / 10) + 1;
      k--;
    }
  }

  return cur - Math.abs(k);
};
