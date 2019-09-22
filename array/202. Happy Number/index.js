/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer,
replace the number by the sum of the squares of its digits, and repeat the process until the number equals
1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers.

Example:
  Input: 19
  Output: true

Explanation:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1

 */

// Time O(N)
// Space O(1)
const isHappy = function(n) {
  let sum = n;
  let i = 0;
  while (sum !== 1) {
    sum = getSum(sum);
    i++;
    if (i > 50) return false;
  }

  return true;

  function getSum(num) {
    let sum = 0;
    while (num >= 10) {
      let x = num % 10;
      num = (num - x) / 10;
      sum += Math.pow(x, 2);
    }
    return Math.pow(num, 2) + sum;
  }
};
