/*
In a 1 million by 1 million grid, the coordinates of each grid square are (x, y) with 0 <= x, y < 10^6.

We start at the source square and want to reach the target square.
Each move, we can walk to a 4-directionally adjacent square in the grid that isn't in the given list of blocked squares.

Return true if and only if it is possible to reach the target square through a sequence of moves.

Example 1:
  Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
  Output: false
  Explanation: The target square is inaccessible starting from the source square, because we can't walk outside the grid.

Example 2:
  Input: blocked = [], source = [0,0], target = [999999,999999]
  Output: true
  Explanation: Because there are no blocked cells, it's possible to reach the target square.


Note:
  0 <= blocked.length <= 200
  blocked[i].length == 2
  0 <= blocked[i][j] < 10^6
  source.length == target.length == 2
  0 <= source[i][j], target[i][j] < 10^6
  source != targetЗ

 */

// Time
// Space
const isEscapePossible = (blocked, source, target) => {
  const blockedSet = new Set();
  const limit = 1e6;
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  if (blocked.length) {
    for (let [i, j] of blocked) {
      blockedSet.add(genKey(i, j));
    }
  }

  return bfs(source, target, blockedSet) && dfs(target, source, blockedSet);

  function bfs(source, target, blockedSet) {
    const queue = [source];
    const visited = new Set();
    visited.add(genKey(source[0], source[1]));

    while (queue.length > 0) {
      const [i, j] = queue.shift();

      for (let dir of dirs) {
        let x = dir[0] + i;
        let y = dir[1] + j;

        if (x < 0 || y < 0 || x >= limit || y >= limit) continue;

        let key = genKey(x, y);
        if (visited.has(key) || blockedSet.has(key)) continue;

        if (x === target[0] && y === target[1]) {
          return true;
        }

        queue.push([x, y]);
        visited.add(key);
      }

      // Нам не нужно идти дальше, чтобы узнать, заблокированы мы или нет.
      // максимальная заблокированная площадь составляет 19900
      if (visited.size === 20000) {
        return true;
      }
    }

    return false;
  }

  function genKey(i, j) {
    return i + ':' + j;
  }
};
