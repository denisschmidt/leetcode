/*

In a given 2D binary array A, there are two islands.  

(An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  
(It is guaranteed that the answer is at least 1.)

Example 1:
  Input: A = [[0,1],[1,0]]
  Output: 1

Example 2:
  Input: A = [[0,1,0],[0,0,0],[0,0,1]]
  Output: 2

Example 3:
  Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
  Output: 1
 

Constraints:
  2 <= A.length == A[0].length <= 100
  A[i][j] == 0 or A[i][j] == 1

*/

// Time O(N^2)
// Space O(N^2)
const shortestBridge = A => {
  let first = [];
  let second = [];
  let n = A.length;
  let m = A[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (A[i][j] == 1) {
        !first.length ? dfs(i, j, true) : dfs(i, j, false);
      }
    }
  }

  let min = Number.MAX_VALUE;

  for (let p1 of first) {
    for (let p2 of second) {
      min = Math.min(min, getDist(p1, p2));
    }
  }

  return min > 0 ? min - 1 : 0;

  function dfs(i, j, isFirst) {
    if (i < 0 || j < 0 || i >= n || j >= m || A[i][j] == 0) return;

    A[i][j] = 0;

    isFirst ? first.push([i, j]) : second.push([i, j]);

    for (let dir of dirs) {
      dfs(i + dir[0], j + dir[1], isFirst);
    }
  }

  function getDist([x, y], [u, z]) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
