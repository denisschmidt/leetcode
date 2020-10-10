/*
We can rotate digits by 180 degrees to form new digits.

When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 0, 1, 9, 8, 6 respectively.
When 2, 3, 4, 5 and 7 are rotated 180 degrees, they become invalid.

A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.
(Note that the rotated number can be greater than the original number.)

Given a positive integer N, return the number of confusing numbers between 1 and N inclusive.


Example 1:

  Input: 20
  Output: 6
  Explanation:
  The confusing numbers are [6,9,10,16,18,19].
  6 converts to 9.
  9 converts to 6.
  10 converts to 01 which is just 1.
  16 converts to 91.
  18 converts to 81.
  19 converts to 61.

Example 2:
  Input: 100
  Output: 19
  Explanation:
  The confusing numbers are [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100].

Note:
  1 <= N <= 10^9
 */

// Time O(N ^ 2)
// Space O(N)
const confusingNumberII = num => {
  let ans = 0;
  const map = { 0: 0, 1: 1, 6: 9, 9: 6, 8: 8 };
  const arr = [0, 1, 6, 8, 9];

  helper(0);

  return ans;

  function helper(newNum) {
    if (newNum > num) {
      return;
    } else if (newNum <= num && isValid(newNum)) {
      ans++;
    }

    const start = newNum === 0 ? 1 : 0;
    for (let i = start; i < arr.length; i++) {
      helper(newNum * 10 + arr[i]);
    }
  }

  function isValid(x) {
    let num = x;
    let newNum = 0;

    while (num !== 0) {
      let remainder = num % 10;

      if (!(remainder in map)) return false;

      newNum = newNum * 10 + map[remainder];
      num = (num - remainder) / 10;
    }

    return newNum !== x;
  }
};
