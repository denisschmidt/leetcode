/*
There is an m by n grid with a ball. Given the start coordinate (i,j) of the ball, 
you can move the ball to adjacent cell or cross the grid boundary in four directions (up, down, left, right). 

However, you can at most move N times. 
Find out the number of paths to move the ball out of grid boundary. 
The answer may be very large, return it after mod 1e9 + 7.

Example 1:
  Input: m = 2, n = 2, N = 2, i = 0, j = 0
  Output: 6
  Explanation:

Example 2:
  Input: m = 1, n = 3, N = 3, i = 0, j = 1
  Output: 12
  Explanation:

Note:
  Once you move the ball out of boundary, you cannot move it back.
  The length and height of the grid is in range [1,50].
  N is in range [0,50].
*/

const findPaths = (m, n, N, i, j) => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const c = helper(i, j, N);

  console.log(c);

  function helper(i, j, hop) {
    if (i < 0 || j < 0 || i >= m || j >= n || hop === 0) {
      return 1;
    }

    if (hop < 0) {
      return 0;
    }

    let cnt = 0;

    for (let dir of dirs) {
      cnt += helper(dir[0] + i, dir[1] + j, hop - 1);
    }

    return cnt;
  }
};

findPaths(2, 2, 2, 0, 0);
