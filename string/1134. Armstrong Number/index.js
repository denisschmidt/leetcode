/*
The k-digit number N is an Armstrong number if and only if the k-th power of each digit sums to N.

Given a positive integer N, return true if and only if it is an Armstrong number.


Example 1:

  Input: 153
  Output: true
  Explanation:  153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

Example 2:

  Input: 123
  Output: false
  Explanation: 123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.


 */

// Time O(N)
// Space O(1)
var isArmstrong = function (n) {
  if (n <= 9) return true;

  let ans = 0;
  let tmp = n;
  let count = n.toString().length;

  while (n > 0) {
    let x = n % 10;
    ans += Math.pow(x, count);
    n = Math.floor(n / 10);
  }

  return ans == tmp;
};
