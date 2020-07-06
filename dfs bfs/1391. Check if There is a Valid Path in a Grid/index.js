/*

Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
  1 which means a street connecting the left cell and the right cell.
  2 which means a street connecting the upper cell and the lower cell.
  3 which means a street connecting the left cell and the lower cell.
  4 which means a street connecting the right cell and the lower cell.
  5 which means a street connecting the left cell and the upper cell.
  6 which means a street connecting the right cell and the upper cell.

You will initially start at the street of the upper-left cell (0,0). 

A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). 

The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

Example 1:
  Input: grid = [[2,4,3],[6,5,2]]
  Output: true
  Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).

Example 2:
  Input: grid = [[1,2,1],[1,2,1]]
  Output: false
  Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)

Example 3:
  Input: grid = [[1,1,2]]
  Output: false
  Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).

Example 4:
  Input: grid = [[1,1,1,1,1,1,3]]
  Output: true

Example 5:
  Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
  Output: true
  

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 300
  1 <= grid[i][j] <= 6

*/

// BFS
// Time O(N*M)
// Space O(N*M)
const hasValidPath = grid => {
  let LEFT = 'left';
  let UP = 'up';
  let RIGHT = 'right';
  let DOWN = 'down';
  let n = grid.length;
  let m = grid[0].length;

  let queue = [];
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  queue.push([0, 0, grid[0][0]]);
  visited[0][0] = true;

  while (queue.length) {
    let size = queue.length;

    for (let z = 0; z < size; z++) {
      let [i, j, step] = queue.shift();

      if (i == n - 1 && j == m - 1) {
        return true;
      }

      let nextPostions = getNextPosition(i, j, step);

      for (let [x, y, direction] of nextPostions) {
        if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

        let nextStep = grid[x][y];

        if (!isValidPath(step, nextStep, direction)) continue;

        visited[x][y] = true;
        queue.push([x, y, nextStep]);
      }
    }
  }

  return false;

  function isValidPath(step, nextStep, direction) {
    if (step == 1) {
      return nextStep != 2;
    }

    if (step == 2) {
      return nextStep != 1;
    }

    if (step == 3 && direction == LEFT && (nextStep == 1 || nextStep == 4 || nextStep == 6)) return true;
    if (step == 3 && direction == DOWN && (nextStep == 2 || nextStep == 5 || nextStep == 6)) return true;

    if (step == 4 && direction == RIGHT && (nextStep == 1 || nextStep == 3 || nextStep == 5)) return true;
    if (step == 4 && direction == DOWN && (nextStep == 2 || nextStep == 5 || nextStep == 6)) return true;

    if (step == 5 && direction == LEFT && (nextStep == 1 || nextStep == 4 || nextStep == 6)) return true;
    if (step == 5 && direction == UP && (nextStep == 2 || nextStep == 3 || nextStep == 4)) return true;

    if (step == 6 && direction == RIGHT && (nextStep == 1 || nextStep == 3 || nextStep == 5)) return true;
    if (step == 6 && direction == UP && (nextStep == 2 || nextStep == 3 || nextStep == 4)) return true;

    return false;
  }

  function getNextPosition(i, j, step) {
    switch (step) {
      case 1:
        return [
          [i, j + 1, RIGHT],
          [i, j - 1, LEFT],
        ];
      case 2:
        return [
          [i + 1, j, DOWN],
          [i - 1, j, UP],
        ];
      case 3:
        return [
          [i + 1, j, DOWN],
          [i, j - 1, LEFT],
        ];
      case 4:
        return [
          [i, j + 1, RIGHT],
          [i + 1, j, DOWN],
        ];
      case 5:
        return [
          [i, j - 1, LEFT],
          [i - 1, j, UP],
        ];
      case 6:
        return [
          [i, j + 1, RIGHT],
          [i - 1, j, UP],
        ];
      default:
        break;
    }
  }
};
