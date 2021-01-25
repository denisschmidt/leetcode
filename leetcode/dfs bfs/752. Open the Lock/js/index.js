// Time O(N^2 * A^N) где
// N - количество чисел в наборе (в нашем случае 4)
// A - количество чисел в алфавите (10 в нашем случае -> 0 до 9)
// Когда мы посещаем каждую комбинацию, мы тратим O(N^2) время для перечисления и построения каждого узла.

const openLock = (deadends, target) => {
  let map = {
    0: [1, 9],
    1: [2, 0],
    2: [3, 1],
    3: [4, 2],
    4: [5, 3],
    5: [6, 4],
    6: [7, 5],
    7: [8, 6],
    8: [9, 7],
    9: [0, 8],
  };

  let queue = [[0, 0, 0, 0]];
  let visited = new Set(deadends);
  let cnt = 0;

  if (visited.has('0000')) return -1;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let current = queue.shift();

      if (current.join('') == target) return cnt;

      for (let i = 0; i < current.length; i++) {
        for (let j = 0; j < map[current[i]].length; j++) {
          let copy = [...current];

          copy[i] = map[current[i]][j];

          let s = copy.join('');

          if (visited.has(s)) continue;

          queue.push(copy);
          visited.add(s);
        }
      }
    }
    cnt++;
  }

  return -1;
};
