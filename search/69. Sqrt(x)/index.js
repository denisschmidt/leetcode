/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
  Output: 2
  Example 2:

Input: 8
  Output: 2

Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
 */

/*

Binary Search Approach

SQRT(2)

[0, 2] mid = 1 -> 1^2 < 2
[1, 2] -> 1.5^2 > 2


 */

// Находим последнее число M, которое M * M <= x.
// Time O(LogN)
// Space O(1)
const mySqrt = function(target) {
  let left = 0;
  let right = target;
  let ans = -1;

  while (left <= right) {
    let mid = left + (right - left) / 2; // left + (right - left) / 2 уходим от целочисленного переполнения

    // Ключевым моментом этой проблемы является то, что мы хотим найти наибольшее число, которое num * num <= x,
    // поэтому мы должны использовать двоичный поиск, чтобы найти верхнюю границу в пределах диапазона (1, x).
    if (mid * mid <= target) {
      ans = mid;
      left = mid + 1; //  ищем последний элемент, удовлетворяющий условию
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

mySqrt(2);
