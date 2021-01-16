// Time O(m * n * N)
// Space O(N)
const findPaths = (m, n, N, i, j) => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let mod = 1e9 + 7;
  let cache = {};

  return helper(i, j, N);

  function helper(i, j, hop) {
    let key = [i, j, hop].join('|');

    if (!(key in cache)) {
      if (i < 0 || j < 0 || i >= m || j >= n) {
        return 1;
      }

      if (hop === 0) {
        return 0;
      }

      let cnt = 0;

      for (let dir of dirs) {
        cnt += helper(dir[0] + i, dir[1] + j, hop - 1);
      }

      cache[key] = cnt % mod;
    }

    return cache[key];
  }
};
