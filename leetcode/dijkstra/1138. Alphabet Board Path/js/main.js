// Time O(K * Log(N))
// Space O(K * N)
const alphabetBoardPath = target => {
  let dirs = [
    [1, 0, 'D'],
    [0, -1, 'L'],
    [0, 1, 'R'],
    [-1, 0, 'U'],
  ];

  let targets = [];
  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });

  for (let i = 0; i < target.length; i++) {
    let code = target[i].charCodeAt(0) - 97;
    targets.push([~~(code / 5), code % 5]);
  }

  pq.offer([0, 0, 0, '']);

  let index = 0;

  while (!pq.isEmpty()) {
    let [_, i, j, path] = pq.poll();

    if (i == targets[index][0] && j == targets[index][1]) {
      if (index == targets.length - 1) {
        return path + '!';
      }
      pq.clear();
      pq.offer([0, i, j, path + '!']);
      index++;
      continue;
    }

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      if (x == 5 && y > 0) continue;

      if (x >= 0 && x < 6 && y >= 0 && y <= 5) {
        pq.offer([getDist([i, j], targets[index]), x, y, path + dir[2]]);
      }
    }
  }

  return '';

  function getDist([x, y], [u, z]) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
