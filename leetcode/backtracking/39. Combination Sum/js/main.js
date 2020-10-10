// The same number may be chosen from candidates an unlimited number of times.

// Time O(N!)
// Space O(N!)
const combinationSum = (candidates, target) => {
  let res = [];

  dfs(0, [], target);

  return res;

  function dfs(start, comb, sum) {
    if (sum < 0) {
      return;
    }

    if (sum == 0) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      comb.push(candidates[i]);
      dfs(i, comb, sum - candidates[i]);
      comb.pop();
    }
  }
};
