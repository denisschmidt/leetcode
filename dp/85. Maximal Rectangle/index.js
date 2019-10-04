/*
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:

Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

 */

// Time O(N*M) - где M (длина каждого ряда). Это делается N раз для.
// Space O(M)
const maximalRectangle = function(matrix) {
  if (!matrix.length) return 0;

  const n = matrix.length;
  const m = matrix[0].length;
  let ans = 0;

  const dp = Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
    }
    ans = Math.max(ans, calcMaxWidth(dp));
  }

  return ans;

  function calcMaxWidth(heights) {
    let ans = 0;
    const stack = [];
    const n = heights.length;

    for (let i = 0; i <= n; i++) {
      while (stack.length && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
        let index = stack.pop();
        const height = heights[index];
        const width = !stack.length ? i : i - 1 - stack[stack.length - 1];

        ans = Math.max(ans, width * height);
      }

      stack.push(i);
    }

    return ans;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2 * M).
// Вычисление максимальной площади для одной точки занимает время O(N),
// так как оно перебирает значения в том же столбце.x
// Это делается для всех N * M точек, давая O(N) * O(NM) = O (N^2 * M).
// Space O(N * M)

const maximalRectangle = function(matrix) {
  if (matrix.length === 0) return 0;
  const n = matrix.length;
  const m = matrix[0].length;
  let ans = 0;

  const dp = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        // вычисляем максимальную ширину и обновляем состояние dp
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;

        let currentWidth = dp[i][j];

        // вычисляем прямоугольник максимальной площади с правым нижним углом в [i, j]
        for (let k = i; k >= 0; k--) {
          // т.к площадь определяется мин шириной
          currentWidth = Math.min(currentWidth, dp[k][j]);
          ans = Math.max(ans, currentWidth * (i - k + 1));
        }
      }
    }
  }

  return ans;
};
