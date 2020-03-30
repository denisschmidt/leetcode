/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  let dirs = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ];
  let valid = [1, 2, 3, 4, 5, 0];

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
  let visited = [Array(6).fill(false)];
  let cnt = 0;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let i = queue.shift();
      let s = state.shift();
      let v = visited.shift();

      if (isValid(s)) return cnt;

      if (isFull(v)) {
        v = Array(6).fill(false);
        v[i] = true;
      }

      console.log(s[i]);

      for (let z = 0; z < dirs[i].length; z++) {
        let j = dirs[i][z];
        let copyV = [...v];
        let copyS = [...s];

        if (copyV[j]) continue;

        copyV[j] = true;
        swap(copyS, i, j);

        queue.push(j);
        state.push(copyS);
        visited.push(copyV);
      }
    }

    cnt++;
  }

  return -1;

  function swap(a, x, y) {
    return ([a[x], a[y]] = [a[y], a[x]]);
  }

  function isValid(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != valid[i]) {
        return false;
      }
    }
    return true;
  }

  function isFull(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (!nums[i]) {
        return false;
      }
    }
    return true;
  }
};

slidingPuzzle([
  [3, 2, 4],
  [1, 5, 0],
]);
