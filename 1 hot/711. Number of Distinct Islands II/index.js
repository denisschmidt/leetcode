/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands.
An island is considered to be the same as another if they have the same shape, or have the same shape after rotation (90, 180, or 270 degrees only)
or reflection (left/right direction or up/down direction).

Example 1:
  11000
  10000
  00001
  00011

  Given the above grid map, return 1.

  Notice that:
  11
  1
  and
   1
  11
  are considered same island shapes.
  Because if we make a 180 degrees clockwise rotation on the first island, then two islands will have the same shapes.

Example 2:
  11100
  10001
  01001
  01110

  Given the above grid map, return 2.

  Here are the two distinct islands:
  111
  1
  and
  1
  1

  Notice that:
  111
  1
  and
  1
  111
  are considered same island shapes. Because if we flip the first array in the up/down direction, then they have the same shapes.

Note: The length of each dimension in the given grid does not exceed 50.

 */
// Time: O (R * CLog(R * C) где R - количество строк в данной сетке, а C - количество столбцов.
// Мы посещаем каждый квадрат один раз, и каждый квадрат принадлежит максимум одной форме.
// Логарифм получается из сортировки форм.
// Space: O (R * C), пространство, используемое для отслеживания форм.
const numDistinctIslands2 = grid => {
  const n = grid.length;
  const m = grid[0].length;
  const dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  let set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        const path = dfs(i, j, []);
        set.add(createKey(path));
      }
    }
  }

  return set.size;

  function dfs(i, j, path) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== 1) return;

    grid[i][j] = 0;
    path.push([i, j]);

    for (let dir of dirs) {
      dfs(dir[0] + i, dir[1] + j, path);
    }
    return path;
  }

  function createKey(island) {
    const shapes = [...new Array(8)].map(() => []);

    for (const [x, y] of island) {
      const result = transform(x, y);
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].push(result[i]);
      }
    }
    const output = [];
    for (const shape of shapes) {
      sort(shape);
      for (const [x, y] of shape) {
        output.push([x - shape[0][0], y - shape[0][1]]);
      }
    }
    return sort(output).join(',');
  }

  function transform(x, y) {
    return [
      [x, y],
      [x, -y],
      [-x, y],
      [-x, -y],
      [y, x],
      [-y, x],
      [y, -x],
      [-y, -x],
    ];
  }

  function sort(arr) {
    return arr.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
  }
};

const res = numDistinctIslands2([
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1],
]);

console.log(res);
