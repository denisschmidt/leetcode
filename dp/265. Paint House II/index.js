/*

There are a row of n houses, each house can be painted with one of the k colors. 
The cost of painting each house with a certain color is different. 
You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x k cost matrix. 
For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... 
Find the minimum cost to paint all houses.

Note:
All costs are positive integers.

Example:
  Input: [[1,5,3],[2,9,4]]
  Output: 5
  Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
             Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5. 

Follow up: Could you solve it in O(nk) runtime?


*/

// Time O(N * K^2)
// Space O(1)
const minCostII = dp => {
  if (dp.length == 0) return 0;

  let n = dp.length;
  let m = dp[0].length;
  let INF = Number.MAX_VALUE;
  let ans = INF;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let min = INF;

      for (let k = 0; k < m; k++) {
        if (k == j) continue;
        min = Math.min(min, dp[i - 1][k]);
      }

      dp[i][j] += min;
    }
  }

  for (let k = 0; k < m; k++) {
    ans = Math.min(ans, dp[n - 1][k]);
  }

  return ans;
};
