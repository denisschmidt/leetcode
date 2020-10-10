/*

Storekeeper is a game in which the player pushes boxes around in a warehouse trying to get them to target locations.

The game is represented by a grid of size m x n, where each element is a wall, floor, or a box.

Your task is move the box 'B' to the target position 'T' under the following rules:

Player is represented by character 'S' and can move up, down, left, right in the grid if it is a floor (empy cell).
Floor is represented by character '.' that means free cell to walk.
Wall is represented by character '#' that means obstacle  (impossible to walk there). 
There is only one box 'B' and one target cell 'T' in the grid.
The box can be moved to an adjacent free cell by standing next to the box and then moving in the direction of the box. 

This is a push.
The player cannot walk through the box.

Return the minimum number of pushes to move the box to the target. 
If there is no way to reach the target, return -1.

 
Example 1:
  Input: grid = [["#","#","#","#","#","#"],
                ["#","T","#","#","#","#"],
                ["#",".",".","B",".","#"],
                ["#",".","#","#",".","#"],
                ["#",".",".",".","S","#"],
                ["#","#","#","#","#","#"]]
  Output: 3
  Explanation: We return only the number of times the box is pushed.

Example 2:
  Input: grid = [["#","#","#","#","#","#"],
                ["#","T","#","#","#","#"],
                ["#",".",".","B",".","#"],
                ["#","#","#","#",".","#"],
                ["#",".",".",".","S","#"],
                ["#","#","#","#","#","#"]]
  Output: -1

Example 3:
  Input: grid = [["#","#","#","#","#","#"],
                ["#","T",".",".","#","#"],
                ["#",".","#","B",".","#"],
                ["#",".",".",".",".","#"],
                ["#",".",".",".","S","#"],
                ["#","#","#","#","#","#"]]
  Output: 5
  Explanation:  push the box down, left, left, up and up.
  Example 4:

  Input: grid = [["#","#","#","#","#","#","#"],
                ["#","S","#",".","B","T","#"],
                ["#","#","#","#","#","#","#"]]
  Output: -1
  

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m <= 20
  1 <= n <= 20
  grid contains only characters '.', '#',  'S' , 'T', or 'B'.
  There is only one character 'S', 'B' and 'T' in the grid.

*/

/*

  Алгоритм Dijkstra (BFS + PriorityQueue)

  Техники и Шаги используемые в задаче
  1) BFS - обычный поиск в ширину до коробки
  2) BFS + PriorityQueue для поиска кратчайшего растояния до target

  Какие проблемы решает задача:
  1) Поиск - BFS
  2) Кратчайший пути до цели - BFS + PriorityQueue

*/

// Time O(N*M + Log(N*M))
const minPushBox = grid => {
  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });
  let n = grid.length;
  let m = grid[0].length;
  let dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];

  let user = [];
  let box = [];
  let target = [];
  let visited = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 'T') {
        target = [i, j];
      } else if (grid[i][j] == 'S') {
        user = [i, j];
      } else if (grid[i][j] == 'B') {
        box = [i, j];
      }
    }
  }

  pq.offer([dist(box, target), 0, box[0], box[1], user[0], user[1]]);

  while (!pq.isEmpty()) {
    let state = pq.poll();

    if (state[2] == target[0] && state[3] == target[1]) {
      return state[1];
    }

    let key = getKey([state[2], state[3]], [state[4], state[5]]);

    if (visited.has(key)) {
      continue;
    }

    visited.add(key);

    for (let dir of dirs) {
      let x = state[4] + dir[0];
      let y = state[5] + dir[1];

      if (!isValid(x, y)) continue;

      // find box
      if (x == state[2] && y == state[3]) {
        let boxX = state[2] + dir[0];
        let boxY = state[3] + dir[1];

        if (isValid(boxX, boxY)) {
          let move = state[1] + 1;

          pq.offer([dist([boxX, boxY], target) + move, move, boxX, boxY, x, y]);
        }
      } else {
        pq.offer([state[0], state[1], state[2], state[3], x, y]);
      }
    }
  }

  return -1;

  function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  function getKey([x, y], [u, z]) {
    return `${x}#${y}#${u}#${z}`;
  }

  function isValid(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] == '#') {
      return false;
    }

    return true;
  }
};
