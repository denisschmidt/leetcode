/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  let jumps = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  jumps[1][3] = jumps[3][1] = 2;
  jumps[4][6] = jumps[6][4] = 5;
  jumps[7][9] = jumps[9][7] = 8;
  jumps[1][7] = jumps[7][1] = 4;
  jumps[2][8] = jumps[8][2] = 5;
  jumps[3][9] = jumps[9][3] = 6;
  jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;

  let ans = 0;
  let visited = Array(10).fill(false);

  helper();

  return ans;

  function helper(path = '') {
    if (path.length >= m) {
      ans++;
    }

    if (path.length >= n) {
      return;
    }

    for (let i = 1; i < 10; i++) {
      if (visited[i]) continue;

      let jumping = jumps[i][path[path.length - 1]];

      if (jumping) {
        if (!visited[jumping]) continue;
      }

      visited[i] = true;

      helper(path + i);

      visited[i] = false;
    }
  }
};
