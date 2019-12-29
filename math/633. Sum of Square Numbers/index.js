/*

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a^2 + b^2 = c.

Example 1:

Input: 5
  Output: True
  Explanation: 1 * 1 + 2 * 2 = 5
 

Example 2:
  Input: 3  
  Output: False


27 = 5 * 5 + 2^2

*/

const judgeSquareSum = function(c) {
  let a = 0;
  let b = 0;

  while (a ** 2 <= c) {
    b = Math.sqrt(c - a ** 2);

    if ((b ^ 0) === b) {
      return true;
    }
    a++;
  }

  return false;
};

const r = judgeSquareSum(1000);
console.log(r);
