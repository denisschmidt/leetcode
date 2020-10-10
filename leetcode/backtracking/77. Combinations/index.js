/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 */

// Time O(N! / (N - k)!k!)
// Операции выполняются с постоянным временем,
// и единственной потребляющей частью здесь является добавление построенной комбинации длины k к выводу.

// Space O(N! / (N - k)!k!)

const combine = function (n, k) {
  const ans = [];

  backtrack([], 1);

  return ans;

  function backtrack(comb = [], index) {
    if (comb.length > k) {
      return;
    } else if (comb.length === k) {
      ans.push([...comb]);
      return;
    } else {
      for (let i = index; i <= n; i++) {
        if (comb[comb.length - 1] > i || comb.includes(i)) continue;
        comb.push(i);
        backtrack(comb, index + 1);
        comb.pop();
      }
    }
  }
};
