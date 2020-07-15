/*

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:
  Input: low = 100, high = 300
  Output: [123,234]

Example 2:
  Input: low = 1000, high = 13000
  Output: [1234,2345,3456,4567,5678,6789,12345]
  

Constraints: 10 <= low <= high <= 10^9

*/

const sequentialDigits = (low, high) => {
  let res = [];

  for (let i = 1; i <= 9; i++) {
    helper([i]);
  }

  res.sort((a, b) => a - b);

  return res;

  function helper(comb) {
    let num = parseInt(comb.join(''));
    if (num > high) {
      return;
    }

    if (num >= low && num <= high) {
      res.push(num);
    }

    if (comb[comb.length - 1] == 9) return;

    comb.push(comb[comb.length - 1] + 1);

    helper(comb);
  }
};
