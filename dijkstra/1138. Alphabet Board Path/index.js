/*

On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.


We may make the following moves:

  'U' moves our position up one row, if the position exists on the board;
  'D' moves our position down one row, if the position exists on the board;
  'L' moves our position left one column, if the position exists on the board;
  'R' moves our position right one column, if the position exists on the board;
  '!' adds the character board[r][c] at our current position (r, c) to the answer.

(Here, the only positions that exist on the board are positions with letters on them.)

Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  

You may return any path that does so.

Example 1:
  Input: target = "leet"
  Output: "DDR!UURRR!!DDD!"

Example 2:
  Input: target = "code"
  Output: "RR!DDRR!UUL!R!"
  

Constraints:
  1 <= target.length <= 100
  target consists only of English lowercase letters.

*/

// Time O(K * Log(N))
// Space O(K * N)
const alphabetBoardPath = t => {
  let dirs = [
    [1, 0, 'D'],
    [0, -1, 'L'],
    [0, 1, 'R'],
    [-1, 0, 'U'],
  ];

  let grid = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [25, null, null, null, null],
  ];

  let pq = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });
  pq.offer([0, 0, 0, '']);

  let targets = [];
  let n = grid.length;
  let m = grid[0].length;

  for (let ch of t) {
    let code = ch.charCodeAt(0) - 97;
    let found = false;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] == code) {
          targets.push([i, j]);
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
  }

  for (let target of targets) {
    while (!pq.isEmpty()) {
      let [i, j, dist, path] = pq.poll();

      if (i == target[0] && j == target[1]) {
        path += '!';

        pq.clear();
        pq.offer([i, j, 0, path]);
        break;
      }

      for (let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];

        if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] != null) {
          pq.offer([x, y, getDist([x, y], target), path + dir[2]]);
        }
      }
    }
  }

  return pq.isEmpty() ? '' : pq.poll()[3];

  function getDist([x, y], [u, z]) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
