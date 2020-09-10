/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
  Input: 123
  Output: 321

Example 2:
  Input: -123
  Output: -321

Example 3:
  Input: 120
  Output: 21

Note:

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 */

// Time O(log(x)
// Space O(1)
var reverse = function (x) {
  let rev = 0;

  while (x !== 0) {
    // аглоритм выталкивания числа
    // 123 вернет 3
    let pop = x % 10;

    // 123 вернет 12
    x = Math.floor(x / 10);

    // проверка на переполнение
    if (rev > Number.MAX_VALUE / 10 || (rev == Number.MAX_VALUE / 10 && pop > 7)) return 0;
    if (rev < Number.MIN_VALUE / 10 || (rev == Number.MIN_VALUE / 10 && pop < -8)) return 0;

    // алгоритм добавления числа
    // 123 -> 3 * 10 + 2 === 32
    rev = rev * 10 + pop;
  }

  return rev;
};
