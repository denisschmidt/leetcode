/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:
  Input: 2.00000, 10
  Output: 1024.00000

Example 2:
  Input: 2.10000, 3
  Output: 9.26100

Example 3:
  Input: 2.00000, -2
  Output: 0.25000

Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:
 */

// Time O(N)
// Space O(1)
const myPow = function(x, n) {
  if (n === 0 || x === 1) {
    return 1;
  }
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  let ans = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      ans *= x;
      n--;
    }
    x *= x;
    n /= 2;
  }
  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(LogN)
// Space O(LogN)
const myPow2 = function(x, n) {
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return fastPow(x, n);

  function fastPow(x, n) {
    if (n === 0) return 1;

    const half = fastPow(x, Math.floor(n / 2));
    if (n % 2 === 0) return half * half;
    return half * half * x;
  }
};
