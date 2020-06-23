/*

A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.

Example 1:
  Input: "00110"
  Output: 1
  Explanation: We flip the last digit to get 00111.

Example 2:
  Input: "010110"
  Output: 2
  Explanation: We flip to get 011111, or alternatively 000111.

Example 3:
  Input: "00011000"
  Output: 2
  Explanation: We flip to get 00000000.
 

Note:
  1 <= S.length <= 20000
  S only consists of '0' and '1' characters.

*/

// Нам нужно найти самую длинную отсортированную последовательность (LIS) и вычесть ее из длины строки.
// Так как у нас есть только два значения в строке.
// Мы можем вычислить это напрямую. O (n) время и O (1) пространство

// Time O(N)
// Space O(1)
const minFlipsMonoIncr = S => {
  let counter_one = 0;
  let counter_flip = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] == '1') {
      counter_one++;
    } else {
      counter_flip++;
    }

    counter_flip = Math.min(counter_flip, counter_one);
  }

  return counter_flip;
};
