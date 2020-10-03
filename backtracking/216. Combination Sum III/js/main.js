// Time O(9!*K)
// Space O(K)
const combinationSum3 = (k, n) => {
  let res = [];

  dfs(1, [], n);

  return res;

  function dfs(start, comb, sum) {
    if (sum < 0) {
      return;
    }

    if (comb.length == k && sum == 0) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      comb.push(i);
      dfs(i + 1, comb, sum - i);
      comb.pop();
    }
  }
};
