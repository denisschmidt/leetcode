/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:
  Input: 16
  Output: true

Example 2:
  Input: 5
  Output: false
  Follow up: Could you solve it without loops/recursion?

4^0 = 1
4^1 = 4
4^2 = 8

Давайте сначала проверим, является ли num степенью двойки: x > 0 и (x & (-x)) == x

Теперь проблема состоит в том, чтобы различать четные степени двух (когда x - степень четырех) и нечетные степени двух (когда x не является степенью четыре). 

В двоичном представлении степени двойки являются однобитными, за которыми следуют нули.

В чем разница ?
  В первом случае 1-бит находится в четной позиции: 0, 2, 4... 
  Во втором случае в нечетной позиции: 2, 8, 32, 128...

  Следовательно биты степени четыре находятся в четных позициях и степень четыре делала бы ноль в побитовом И с числом (101010 ... 10)

Насколько длинной должна быть последовательность  (101010...10) если х это целое число со знаком? 
  32 бита.

Чтобы написать короче, в 8 символов вместо 32 обычно используют шестнадцатеричное представление

(101010...10)2 == (aaaaaaaa)16
​
*/

// If num is a power of four x = 4 ^ a then a = log4x = 1/2 *log2x is a integer.
// Hence let's simply check if log2x is an even number

// Time O(1)
// Space O(1)
const isPowerOfFour = num => {
  return num > 0 && Math.log2(num) % 2 == 0;
};

// Time O(1)
// Space O(1)
const isPowerOfFour_II = num => {
  if (num < 1) return false;
  return (num & -num) == num && (num & 0xaaaaaaaa) == 0;
};
