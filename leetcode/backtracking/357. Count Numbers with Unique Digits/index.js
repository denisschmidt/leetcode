/*

Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
  Input: 2
  Output: 91 
  Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
             excluding 11,22,33,44,55,66,77,88,99

*/

// Time O(10!) или O(n!) если n < 10
// Space O(N)
const countNumbersWithUniqueDigits_II = function (n) {
  if (n == 0) return 1;
  if (n == 1) return 10;

  let max = Math.pow(10, n);
  let cnt = 0;
  let used = Array(10).fill(false);

  helper(0);

  return cnt;

  function helper(current) {
    if (current > max) {
      return;
    } else {
      cnt++;
    }

    for (let i = 0; i < 10; i++) {
      if ((i == 0 && current == 0) || used[i]) continue;

      used[i] = true;

      helper(current * 10 + i);

      used[i] = false;
    }
  }
};

// Time O(10!) или O(n!) если n < 10
// Space O(N)
const countNumbersWithUniqueDigits = n => {
  let max = Math.pow(10, n);
  let cnt = 1;
  let used = Array(10).fill(false);

  for (let i = 1; i < 10; i++) {
    used[i] = true;
    cnt += helper(i, max);
    used[i] = false;
  }

  return cnt;

  function helper(current, max) {
    let count = 0;

    if (current < max) {
      count++;
    } else {
      return count;
    }

    for (let i = 0; i < 10; i++) {
      if (used[i]) continue;
      used[i] = true;

      let newNum = 10 * current + i;

      count += helper(newNum, max);

      used[i] = false;
    }

    return count;
  }
};
