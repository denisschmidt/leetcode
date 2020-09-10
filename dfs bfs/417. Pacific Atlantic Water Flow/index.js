/*

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, 
the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:
  The order of returned grid coordinates does not matter.
  Both m and n are less than 150.
 

Example:
  Given the following 5x5 matrix:

    Pacific ~   ~   ~   ~   ~ 
        ~  1   2   2   3  (5) *
        ~  3   2   3  (4) (4) *
        ~  2   4  (5)  3   1  *
        ~ (6) (7)  1   4   5  *
        ~ (5)  1   1   2   4  *
            *   *   *   *   * Atlantic

  Return: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
 

*/

/*

  Алгоритм
  
  1) Создаем две очереди
  
  2) Добавляем все тихоокеанские границы в одну очередь
     Атлантические границы в другую очередь

  3) Делаем поиск в ширину и сохраняем точки которые мы поситили для каждой очереди.

  4) В конце точку, которая была посищена в обоих очередях нужно добавить в результат.

*/

// Time O(N^2)
// Space O(N^2)
var pacificAtlantic = function (matrix) {
  if (matrix.length == 0) return [];
  let n = matrix.length;
  let m = matrix[0].length;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let pQueue = [];
  let aQueue = [];
  let pacific = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));
  let atlantic = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  // Вертикальная линия
  for (let i = 0; i < n; i++) {
    pQueue.push([i, 0]);
    aQueue.push([i, m - 1]);
    pacific[i][0] = true;
    atlantic[i][m - 1] = true;
  }

  // Горизонтальная линия
  for (let i = 0; i < m; i++) {
    pQueue.push([0, i]);
    aQueue.push([n - 1, i]);
    pacific[0][i] = true;
    atlantic[n - 1][i] = true;
  }

  bfs(pQueue, pacific);
  bfs(aQueue, atlantic);

  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }

  return ans;

  function bfs(queue, visited) {
    while (queue.length) {
      let size = queue.length;

      for (let k = 0; k < size; k++) {
        let [i, j] = queue.shift();

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          if (x < 0 || j < 0 || x >= n || y >= m || visited[x][y] || matrix[x][y] < matrix[i][j]) {
            continue;
          }
          visited[x][y] = true;
          queue.push([x, y]);
        }
      }
    }
  }
};
