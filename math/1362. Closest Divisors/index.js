/*

Given an integer num, find the closest two integers in absolute difference whose product equals num + 1 or num + 2.

Return the two integers in any order.

Example 1:
  Input: num = 8
  Output: [3,3]
  Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.

Example 2:
  Input: num = 123
  Output: [5,25]

Example 3:
  Input: num = 999
  Output: [40,25]
  

Constraints: 1 <= num <= 10^9

*/

// Time O(sqrtX)
// Space O(1)
const closestDivisors = num => {
  let x = num + 1;
  let y = num + 2;

  let d1 = largestDivisor(x);
  let d2 = largestDivisor(y);

  if (Math.abs(d1 - x / d1) < Math.abs(d2 - y / d2)) return [d1, x / d1];

  return [d2, y / d2];

  function largestDivisor(num) {
    let d = Math.floor(Math.sqrt(num));
    while (num % d != 0) --d;
    return d;
  }
};
