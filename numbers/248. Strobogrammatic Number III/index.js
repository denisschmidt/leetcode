/*

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.

Example:
  Input: low = "50", high = "100"
  Output: 3 
  Explanation: 69, 88, and 96 are three strobogrammatic numbers.

Note:
  Because the range might be a large number, the low and high numbers are represented as string.

*/

const strobogrammaticInRange = (low, high) => {
  let n = low.length;
  let m = high.length;
  let cnt = 0;
  let pairs = [
    [0, 0],
    [1, 1],
    [6, 9],
    [8, 8],
    [9, 6],
  ];

  for (let i = n; i <= m; i++) {
    createNumber(i);
  }

  return cnt;

  function createNumber(n, str = '') {
    if (n <= 0) {
      if (+str >= low && +str <= high) cnt++;
      return;
    }

    if (n == 1) {
      let a = +addToMid(str, 8);
      let b = +addToMid(str, 1);
      let c = +addToMid(str, 0);
      if (a >= low && a <= high) cnt++;
      if (b >= low && b <= high) cnt++;
      if (c >= low && c <= high) cnt++;
      return;
    }

    for (let [a, b] of pairs) {
      if ((n == 2 || n === 3) && a == 0) continue;
      createNumber(n - 2, a + str + b);
    }
  }

  function addToMid(str, num) {
    let mid = str.length / 2;
    return str.substring(0, mid) + num + str.substring(mid);
  }
};
