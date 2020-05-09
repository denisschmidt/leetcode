/*

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:
  Input: 16
  Output: true

Example 2:
  Input: 14
  Output: false

*/

// Time O(LogN)
// Space O(1)
const isPerfectSquare = num => {
  if (num < 2) return true;

  let left = 2;
  let right = num / 2;
  let guessSquared = 0;

  while (left <= right) {
    let x = left + Math.floor((right - left) / 2);
    guessSquared = x * x;

    if (guessSquared == num) {
      return true;
    }

    if (guessSquared > num) {
      right = x - 1;
    } else {
      left = x + 1;
    }
  }

  return false;
};

// Time O(N * K)
// Space O(1)
const isPerfectSquare_II = num => {
  if (num < 2) return true;

  for (let i = 2; i * i <= num; i++) {
    let z = num;

    while (z > 0) {
      if (z % i == 0) {
        z = z / i;
      } else {
        break;
      }
    }

    if (z == 1) {
      return true;
    }
  }

  return false;
};
