// Time O(N^2)
// Space O(N)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];

  candidates.sort();

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
      /*
        Important !!!!

        i > start prevents [1,1,2] from generating duplicate [1,2]. 
        
        When start is 0, i loops from 0 to 2. 
        When i is 0, you choose 1 at 0th index, go into backtracking, generates cases like [1,1][1,1,2][1,2] then return, 
        redos the choice. 
        
        Then i increments to 1, you choose 1 at 1st index, since i greater than start 0, continue prevents backtracking, so no duplicate [1,2].

        PS: [1,1] can be generated because i and start are the same at the time which is 1, so its backtracking is not stopped.
      */
      if (i > start && candidates[i - 1] == candidates[i]) continue;

      comb.push(candidates[i]);

      dfs(i + 1, comb, sum - candidates[i]);

      comb.pop();
    }
  }
};
