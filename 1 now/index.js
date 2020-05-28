function minFlips(mat) {
  let m = mat.length;
  let n = mat[0].length;
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = [];

  for (let i = 0; i < m * n; i++) {
    result.push('0');
  }

  let h = hash(mat);
  let set = new Set();
  let queue = [];

  queue.push(h);
  set.add(h);

  let ans = 0;

  while (queue.length) {
    let size = queue.length;

    while (size-- > 0) {
      let current = queue.shift();

      if (current == result.toString()) {
        return ans;
      }

      for (let i = 0; i < current.length; i++) {
        let x = i / n;
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

        let sb = [];

        for (let j = 0; j < current.length; j++) {
          if (change.has(j)) {
            sb.push(current[j] == '1' ? '0' : '1');
          } else {
            sb.push(current[j]);
          }
        }

        if (!set.has(sb.toString())) {
          queue.push(sb.toString());
          set.add(sb.toString());
        }
      }
    }
    ans++;
  }
  return -1;
}

function hash(mat) {
  let sb = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      sb.push(mat[i][j]);
    }
  }
  return sb.toString();
}
