/*
A 2d grid map of m rows and n columns is initially filled with water. We may perform an addLand operation which turns the water at position (row, col) into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
    Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
    Output: [1,1,2,3]
    Explanation: Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).

    0 0 0
    0 0 0
    0 0 0
    Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

    1 0 0
    0 0 0   Number of islands = 1
    0 0 0
    Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

    1 1 0
    0 0 0   Number of islands = 1
    0 0 0
    Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

    1 1 0
    0 0 1   Number of islands = 2
    0 0 0
    Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

    1 1 0
    0 0 1   Number of islands = 3
    0 1 0
    Follow up:

[0, 1],
[1, 2],
[2, 1],
[1, 0],

[0, 2],
[0, 0],
[1, 1],


110
001
000

Can you do it in time complexity O(k log mn), where k is the length of the positions ?

 */

const numIslands2 = (m, n, positions) => {
  const dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  const ans = [];
  const nums = Array(n * m).fill(-1);
  let cnt = 0;

  for (let [i, j] of positions) {
    // для каждой позиции помечаем ее как новый остров
    let x = i * n + j;

    if (nums[x] !== -1) {
      ans.push(cnt);
    } else {
      nums[x] = x;
      cnt++;

      for (let dir of dirs) {
        let nx = dir[0] + i;
        let ny = dir[1] + j;
        let y = nx * n + ny;

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || nums[y] === -1) continue;

        // найти и объединить острова
        y = find(nums, y);
        x = find(nums, x);

        nums[y] = x;

        if (y !== x) cnt--;
      }

      ans.push(cnt);
    }
  }

  return ans;

  function find(nums, i) {
    if (nums[i] === i) return i;

    nums[i] = find(nums, nums[i]);

    return nums[i];
  }
};

let m = 3;
let n = 3;
let pos = [
  [0, 0],
  [0, 1],
  [1, 2],
  [1, 2],
];

const res = numIslands2(m, n, pos);

console.log(res);
