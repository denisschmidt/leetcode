/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
  Output: 2
  Example 2:

Input: 8
  Output: 2

Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
 */

// Binary Search Approach

// During the binary search, we make sure this relation always holds.
// When mid <= sqrt(x) we let left = mid. when sqrt(x) < mid, we let right = mid.
// The while loop terminates when left + 1 == right. Since we know left <= sqrt(x) < right, we simply return left as the answer.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x === 0 || x === 1) return x;
  let left = 0,
    right = x;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid <= x / mid) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};

const res = mySqrt(4);
console.log('---', res);
