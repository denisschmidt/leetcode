/*
Given N, consider a convex N-sided polygon with vertices labelled A[0], A[i], ..., A[N-1] in clockwise order.

Suppose you triangulate the polygon into N-2 triangles.  
For each triangle, the value of that triangle is the product of the labels of the vertices, 
and the total score of the triangulation is the sum of these values over all N-2 triangles in the triangulation.

Return the smallest possible total score that you can achieve with some triangulation of the polygon.


Example 1:
  Input: [1,2,3]
  Output: 6
  Explanation: The polygon is already triangulated, and the score of the only triangle is 6.

Example 2:
  Input: [3,7,4,5]
  Output: 144
  Explanation: There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or 3*4*5 + 3*4*7 = 144.  The minimum score is 144.

Example 3:
  Input: [1,3,1,4,1,5]
  Output: 13
  Explanation: The minimum score triangulation has score 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.
 

Note:
  3 <= A.length <= 50
  1 <= A[i] <= 100
*/

// Time O(N^3)
// Space O(N^2)
const minScoreTriangulation = nums => {
  let size = nums.length;

  // dp[i][j] означает минимальную сумму для триангуляции nums[i] ~ nums[j],
  let dp = Array(size)
    .fill(null)
    .map(() => Array(size).fill(0));

  for (let l = 2; l < size; l++) {
    for (let i = 0; i < size - l; i++) {
      let j = i + l;

      dp[i][j] = Number.MAX_VALUE;

      // Перечислим все точки nums[k] с i < k <j, чтобы сформировать треугольник.
      for (let k = i + 1; k < j; k++) {
        let product = nums[i] * nums[j] * nums[k];

        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + product);
      }
    }
  }

  return dp[0][size - 1];
};
