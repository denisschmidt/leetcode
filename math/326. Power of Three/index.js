/*
Given an integer, write a function to determine if it is a power of three.

Example 1:
  Input: 27
  Output: true

Example 2:
  Input: 0
  Output: false

Example 3:
  Input: 9
  Output: true

Example 4:
  Input: 45
  Output: false

3^0 = 1

3^1 = 3

3^2 = 6

Follow up: Could you do it without using any loop / recursion?

*/

/*
  в двоичной  в десятичной 
  10          2     
  100         4
  1000        8


Тип int - это 4 байта 

Максимальное значение этого типа данных - 2147483647

MaxInt 2^32 поскольку мы используем 32 бита для представления числа,
половина диапазона используется для отрицательных чисел, а 0 - часть положительных чисел


Зная ограничение n, мы можем теперь сделать вывод, 
что максимальное значение n, которое также является степенью три, равно 1162261467.

Мы рассчитываем это как: 3⌊log^3 MaxInt⌋ = 3⌊19.56⌋= 3^19 =1162261467

*/

// Time O(1)
// Space O(1)
const isPowerOfThree = n => {
  if (n < 1) return false;

  return 1162261467 % n === 0;
};

// Time O(LogN) -> O(log3N)
// Space O(1)
const isPowerOfThree_II = n => {
  if (n < 1) return false;

  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }

  return n === 1;
};

isPowerOfThree(27);
