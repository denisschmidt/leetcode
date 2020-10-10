/*

Given a m x n binary matrix mat. In one step, you can choose one cell and flip it and all the four neighbours of it if they exist (Flip is changing 1 to 0 and 0 to 1). 

A pair of cells are called neighboors if they share one edge.

Return the minimum number of steps required to convert mat to a zero matrix or -1 if you cannot.

Binary matrix is a matrix with all cells equal to 0 or 1 only.

Zero matrix is a matrix with all cells equal to 0.

Example 1:
  Input: mat = [[0,0],[0,1]]
  Output: 3
  Explanation: One possible solution is to flip (1, 0) then (0, 1) and finally (1, 1) as shown.

Example 2:
  Input: mat = [[0]]
  Output: 0
  Explanation: Given matrix is a zero matrix. We don't need to change it.

Example 3:
  Input: mat = [[1,1,1],[1,0,1],[0,0,0]]
  Output: 6

Example 4:
  Input: mat = [[1,0,0],[1,0,0]]
  Output: -1
  Explanation: Given matrix can't be a zero matrix
  

Constraints:
  m == mat.length
  n == mat[0].length
  1 <= m <= 3
  1 <= n <= 3
  mat[i][j] is 0 or 1.

*/

// Time O(MN * 2^MN)
// Space O(2^MN)
const minFlips = mat => {
  let m = mat.length;
  let n = mat[0].length;
  let result = '';
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < m * n; i++) {
    result += '0';
  }

  let h = hash(mat);
  let set = new Set();
  let queue = [];

  queue.push(h);
  set.add(h);

  let ans = 0;

  while (queue.length) {
    let size = queue.length;

    for (let z = 0; z < size; z++) {
      let current = queue.shift();

      if (current == result) {
        return ans;
      }

      // перебираем все варианты и первый который будет равен всем нулям и будем самым минимальным путем
      for (let i = 0; i < current.length; i++) {
        let x = Math.floor(i / n);
        let y = i % n;

        let change = new Set();
        change.add(i);

        for (let k = 0; k < 4; k++) {
          let nextX = x + dirs[k][0];
          let nextY = y + dirs[k][1];

          if (nextX >= 0 && nextY >= 0 && nextX < m && nextY < n) {
            change.add(nextX * n + nextY);
          }
        }

        let s = '';

        for (let j = 0; j < current.length; j++) {
          if (change.has(j)) {
            s += current[j] == 1 ? 0 : 1;
          } else {
            s += current[j];
          }
        }

        if (!set.has(s)) {
          queue.push(s);
          set.add(s);
        }
      }
    }
    ans++;
  }

  return -1;
};

function hash(mat) {
  let s = '';
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      s += mat[i][j];
    }
  }
  return s;
}
