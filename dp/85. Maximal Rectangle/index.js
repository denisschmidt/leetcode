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

// Time O(N^2 * M).
// Вычисление максимальной площади для одной точки занимает время O(N),
// Так как оно перебирает значения в том же столбце.x
// Это делается для всех N * M точек, давая O(N) * O(NM) = O (N^2 * M).
// Space O(N * M)
const maximalRectangle_II = function(matrix) {
  if (matrix.length === 0) return 0;
  let n = matrix.length;
  let m = matrix[0].length;
  let ans = 0;

  let dp = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        // вычисляем максимальную ширину и обновляем состояние dp
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;

        let width = dp[i][j];
        let height = 1;
        // вычисляем прямоугольник максимальной площади с правым нижним углом в [i, j]
        for (let k = i; k >= 0; k--) {
          // т.к площадь определяется мин шириной
          width = Math.min(width, dp[k][j]);
          height = i - k + 1;

          ans = Math.max(ans, width * height);
        }
      }
    }
  }
  return ans;
};

/*

  Решение DP + Монотонный стек.

  Задача очень похожа на схожую задачу 42 - расчет уровня воды 

  На каждом шаге i мы получаем массив, как в задаче для расчета воды.
  Если мы попытаемся посчитать сколько воды содержится в этом массиве в текущей точке i мы и получим площадь.
  Нам останется только найти максимульную площадь итерируясь по i

  Пример:
  [
    ["1","0","1","0","0"], i = 0 => [1, 0, 1, 0, 0]
    ["1","0","1","1","1"], i = 1 => [2, 0, 2, 1, 1]
    ["1","1","1","1","1"], i = 2 => [3, 1, 3, 2, 2]
    ["1","0","0","1","0"]  i = 3 => [4, 0, 0, 3, 0]
  ]

*/

// Time O(N*M)
// Space O(M)
const maximalRectangle = function(matrix) {
  if (matrix.length == 0) return 0;

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

  // Поиск максимальной площади у прямоугольника
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
