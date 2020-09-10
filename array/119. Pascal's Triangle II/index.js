/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
  Input: 3
  Output: [1,3,3,1]

Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

const getRow = k => {
  const arr = Array(k + 1).fill(0);
  arr[0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = i; j > 0; j--) {
      arr[j] = arr[j] + arr[j - 1];
    }
  }
  return arr;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getRow2 = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const ans = [[1]];
  return help(rowIndex + 1);

  function help(num) {
    if (num === 1) return [1];
    if (num === 2) return [1, 1];

    const x = help(num - 1);

    ans.push(x);

    const comb = [1];
    for (let i = 0; i < x.length - 1; i++) {
      comb.push(x[i] + x[i + 1]);
    }
    comb.push(1);

    return comb;
  }
};
