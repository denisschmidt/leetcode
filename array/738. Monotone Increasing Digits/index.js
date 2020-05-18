/*

Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

Example 1:
  Input: N = 10
  Output: 9

Example 2:
  Input: N = 1234
  Output: 1234

Example 3:
  Input: N = 332
  Output: 299
  Note: N is an integer in the range [0, 10^9].

*/

// Time O(N^3)
// Space O(N)
const monotoneIncreasingDigits = N => {
  let nums = N.toString().split('');

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        let copy = [...nums];

        copy[j]--;

        for (let k = j + 1; k < nums.length; k++) {
          copy[k] = 9;
        }

        if (isValid(copy)) {
          return Number(copy.join(''));
        }
      }
    }
  }

  return N;

  function isValid(num) {
    for (let i = 1; i < num.length; i++) {
      if (num[i - 1] > num[i]) return false;
    }
    return true;
  }
};
