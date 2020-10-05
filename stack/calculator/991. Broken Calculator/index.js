/*
On a broken calculator that has a number showing on its display, we can perform two operations:

Double: Multiply the number on the display by 2, or;
Decrement: Subtract 1 from the number on the display.
Initially, the calculator is displaying the number X.

Return the minimum number of operations needed to display the number Y.

Example 1:
  Input: X = 2, Y = 3
  Output: 2
  Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

Example 2:
  Input: X = 5, Y = 8
  Output: 2
  Explanation: Use decrement and then double {5 -> 4 -> 8}.

Example 3:
  Input: X = 3, Y = 10
  Output: 3
  Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.

Example 4:
  Input: X = 1024, Y = 1
  Output: 1023
  Explanation: Use decrement operations 1023 times.

Note:
  1 <= X <= 10^9
  1 <= Y <= 10^9

Решение
  Opertation 1: Y = Y / 2 if Y если Y четное
  Opertation 2: Y = Y + 1

  Очевидно, что Если Y <= X, мы больше не будем делать Y / 2.
  Мы будем увеличивать Y, пока он не станет равным X

  Поэтому до этого, пока Y> X, мы будем продолжать уменьшать Y, пока оно не станет меньше X.
  Если Y нечетное, мы можем сделать только Y = Y + 1
  Если Y четное, если мы добавляем 1 к Y, то Y нечетное, нам нужно добавить еще 1.

  И поскольку (Y + 1 + 1) / 2 = (Y / 2) + 1, 3 операции превышают 2.
  Мы всегда выбираем Y / 2, если Y четный.

  Мы уменьшаем Y с наименьшим количеством возможных операций, пока он не станет меньше X.

  2N раз Y + 1 и один раз Y / 2 требует 2N + 1 операций.
  Однажды Y / 2 и N раз Y + 1 приведут к тому же результату, но потребуются только N + 1 операций.

  Мы делаем Y / 2 до тех пор, пока он не станет меньше X, временная сложность
 */

// Time O (log (Y / X)).
// Space O(1)
const brokenCalc = function (X, Y) {
  let cnt = 0;

  while (Y > X) {
    cnt++;
    if (Y % 2 === 1) {
      Y++;
    } else {
      Y = Y / 2;
    }
  }

  return cnt + X - Y;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
const brokenCalc2 = function (X, Y) {
  if (X === Y) return 0;
  if (X > Y) return X - Y;

  return 1 + (Y % 2 === 0 ? brokenCalc(X, Y / 2) : brokenCalc(X, Y + 1));
};
