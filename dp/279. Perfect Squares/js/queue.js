const numSquares = target => {
  let squareNums = new Set();

  for (let i = 1; i * i <= target; i++) {
    squareNums.add(i * i);
  }

  let cnt = 0;
  let queue = [];
  let seen = new Set();

  queue.push(target);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let num = queue.shift();

      if (num == 0) return cnt;

      for (let square of squareNums.values()) {
        if (square > num) break;

        if (num - square >= 0 && !seen.has(num - square)) {
          queue.push(num - square);
          seen.add(num - square);
        }
      }
    }
    cnt++;
  }

  return -1;
};
