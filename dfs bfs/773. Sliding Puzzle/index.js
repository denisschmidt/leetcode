/*

On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:
  Input: board = [[1,2,3],[4,0,5]]
  Output: 1
  Explanation: Swap the 0 and the 5 in one move.

  Input: board = [[1,2,3],[5,4,0]]
  Output: -1
  Explanation: No number of moves will make the board solved.
  
  Input: board = [[4,1,2],[5,0,3]]
  Output: 5
  Explanation: 5 is the smallest number of moves that solves the board.
    An example path:
    After move 0: [[4,1,2],[5,0,3]]
    After move 1: [[4,1,2],[0,5,3]]
    After move 2: [[0,1,2],[4,5,3]]
    After move 3: [[1,0,2],[4,5,3]]
    After move 4: [[1,2,0],[4,5,3]]
    After move 5: [[1,2,3],[4,5,0]]
  
  Input: board = [[3,2,4],[1,5,0]]
  Output: 14

Note:
  board will be a 2 x 3 array as described above.
  board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].

*/

// Time O(N * M + (N*M)!) cуществует O((N * M)!) Возможных состояний board.
// Space O(N * M)
const slidingPuzzle = board => {
  let dirs = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ];
  let validState = '1,2,3,4,5,0';

  let nums = [];
  let start = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      nums.push(board[i][j]);
      if (board[i][j] == 0) {
        start = nums.length - 1;
      }
    }
  }

  let queue = [start];
  let state = [nums];
  let cnt = 0;

  let visited = new Set();
  visited.add(nums.toString());

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let i = queue.shift();
      let s = state.shift();

      if (s.toString() == validState) return cnt;

      for (let z = 0; z < dirs[i].length; z++) {
        let j = dirs[i][z];
        let copyS = [...s];

        swap(copyS, i, j);

        if (visited.has(copyS.toString())) {
          continue;
        }

        visited.add(copyS.toString());
        queue.push(j);
        state.push(copyS);
      }
    }

    cnt++;
  }

  return -1;

  function swap(a, x, y) {
    return ([a[x], a[y]] = [a[y], a[x]]);
  }
};
