/*

Given a number N, return a string consisting of "0"s and "1"s that represents its value in base -2 (negative two).

The returned string must have no leading zeroes, unless the string is "0".

Example 1:
  Input: 2
  Output: "110"
  Explantion: (-2) ^ 2 + (-2) ^ 1 = 2

Example 2:
  Input: 3
  Output: "111"
  Explantion: (-2) ^ 2 + (-2) ^ 1 + (-2) ^ 0 = 3

Example 3:
  Input: 4
  Output: "100"
  Explantion: (-2) ^ 2 = 4
  

Note: 0 <= N <= 10^9

*/

// Time O(LogN)
// Space O(1)
const baseNeg2_II = function(N) {
  return toNegativeBase(N, -2);

  // Любая негативаная база числа
  function toNegativeBase(num, negBase) {
    if (num == 0) return '0';

    let res = '';

    while (num != 0) {
      let remainder = num % negBase;

      // через ~~ получаем целую часть числа
      num = ~~(num / negBase);

      if (remainder < 0) {
        remainder += -negBase;
        num++;
      }

      res = remainder + res;
    }

    return res;
  }
};
