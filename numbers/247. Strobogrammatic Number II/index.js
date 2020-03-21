/*

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:
  Input:  n = 2
  Output: ["11","69","88","96"]

*/

// Глубина рекурсии действительно равна O(N)
// Однако во время каждого рекурсивного вызова мы выполняем итерацию по списку
// И размер списка увеличивается экспоненциально с коэффициентом 5.
// Следовательно, временная сложность должна составлять 5 + 5 ^ 2 + 5 ^ 3. + ... + 5 ^ (N / 2) ~ = 5 ^ (N / 2)

// Time O(5 ^ N / 2)
// Space O(N)
const findStrobogrammatic = n => {
  let ans = [];
  let pairs = [
    [0, 0],
    [1, 1],
    [6, 9],
    [8, 8],
    [9, 6],
  ];

  helper(n);

  return ans;

  function helper(n, str = '') {
    if (n <= 0) {
      ans.push(str);
      return;
    }

    if (n == 1) {
      ans.push(addToMid(str, 0));
      ans.push(addToMid(str, 1));
      ans.push(addToMid(str, 8));
      return;
    }

    for (let [a, b] of pairs) {
      if ((n == 2 || n === 3) && a == 0) continue;
      helper(n - 2, a + str + b);
    }
  }

  function addToMid(str, num) {
    let mid = str.length / 2;
    return str.substring(0, mid) + num + str.substring(mid);
  }
};
