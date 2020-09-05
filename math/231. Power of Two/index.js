/*
Given an integer, write a function to determine if it is a power of two.

Example 1:
  Input: 1
  Output: true
  Explanation: 2^0 = 1

Example 2:
  Input: 16
  Output: true
  Explanation: 2^4 = 16

Example 3:
  Input: 218
  Output: false


Cтепень двоичности в двоичном представлении равна одному 1-битному, за которым следуют несколько нулей:

1 = (00000001)
​
2 = (00000010)
​
4 = (00000100)
​
8 = (00001000)
​
Число, которое не является степенью двойки, имеет более одного 1-разрядного в двоичном представлении:

3 = (00000011)
​
5 = (00000101)
​
6 = (00000110)
​
7 = (00000111)
​
Единственным исключением является 0, который следует рассматривать отдельно.

Итак, давайте сделаем x & (-x), чтобы сохранить самый правый 1-бит и установить все остальные биты в ноль.

Как обсуждалось выше, для степени два это привело бы к самому x, поскольку степень два содержит только один 1-бит.

Другие числа имеют более 1 бита в двоичном представлении и, следовательно, для них x & (-x) не будет равно самому x.

Следовательно, число является степенью двойки, если x & (-x) == x.

Пример:

  x = 4     (00000100)
  -x =      (11111100)
  x & (-x)= (00000100)

  x = 6     (00000110)
  -x =      (11111010)
  x & (-x)= (00000010)

 */

// Bitwise Operators : Get the Rightmost 1-bit
// Time O(1)
// Space O(1)
const isPowerOfTwo = n => {
  if (n <= 0) return false;

  return (n & -n) === n;
};

// Time O(LogN)
// Space O(1)
const isPowerOfTwo_II = n => {
  if (num < 1) return false;

  while (num != 1) {
    if (num % 2 != 0) {
      return false;
    }
    num /= 2;
  }

  return true;
};
