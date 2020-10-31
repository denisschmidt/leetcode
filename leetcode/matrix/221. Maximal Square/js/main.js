// Time O(N * M)
// Space O(1)
const maximalSquare = matrix => {
  if (matrix.length == 0) return 0;

  let n = matrix.length;
  let m = matrix[0].length;

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == '1') {
        if (i == 0 || j == 0) {
          max = Math.max(max, 1);
          continue;
        }

        matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;
        max = Math.max(max, matrix[i][j]);
      }
    }
  }

  return max * max;
};

// Time O(n*m^2)
// Space O(1)
const maximalSquare_II = function (matrix) {
  const n = matrix.length;
  const m = n > 0 ? matrix[0].length : 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '0') {
        continue;
      }

      let sqlen = 1;
      let flag = true;

      while (flag && i + sqlen < n && j + sqlen < m) {
        // row
        for (let k = j; k <= sqlen + j; k++) {
          if (matrix[i + sqlen][k] === '0') {
            flag = false;
            break;
          }
        }

        // cell
        for (let k = i; k <= sqlen + i; k++) {
          if (matrix[k][j + sqlen] === '0') {
            flag = false;
            break;
          }
        }

        if (flag) {
          sqlen++;
        }
      }

      if (ans < sqlen) {
        ans = sqlen;
      }
    }
  }

  return ans * ans;
};
