/*
There is a ball in a maze with empty spaces and walls.
The ball can go through empty spaces by rolling up (u), down (d), left (l) or right (r), but it won't stop rolling until hitting a wall.
When the ball stops, it could choose the next direction.
There is also a hole in this maze.
The ball will drop into the hole if it rolls on to the hole.

Given the ball position, the hole position and the maze, find out how the ball could drop into the hole by moving the shortest distance.

The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the hole (included).
Output the moving directions by using 'u', 'd', 'l' and 'r'.

Since there could be several different shortest ways, you should output the lexicographically smallest way.
If the ball cannot reach the hole, output "impossible".

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
You may assume that the borders of the maze are all walls.
The ball and the hole coordinates are represented by row and column indexes.


Example 1:
  Input 1: a maze represented by a 2D array

  0 0 0 0 0
  1 1 0 0 1
  0 0 0 0 0
  0 1 0 0 1
  0 1 0 0 0

  Input 2: ball coordinate (rowBall, colBall) = (4, 3)
  Input 3: hole coordinate (rowHole, colHole) = (0, 1)

  Output: "lul"

  Explanation: There are two shortest ways for the ball to drop into the hole.
  The first way is left -> up -> left, represented by "lul".
  The second way is up -> left, represented by 'ul'.
  Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

Example 2:
  Input 1: a maze represented by a 2D array

  0 0 0 0 0
  1 1 0 0 1
  0 0 0 0 0
  0 1 0 0 1
  0 1 0 0 0

  Input 2: ball coordinate (rowBall, colBall) = (4, 3)
  Input 3: hole coordinate (rowHole, colHole) = (3, 0)

  Output: "impossible"

  Explanation: The ball cannot reach the hole.


  Note:

  There is only one ball and one hole in the maze.
  Both the ball and hole exist on an empty space, and they will not be at the same position initially.
  The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.
  The maze contains at least 2 empty spaces, and the width and the height of the maze won't exceed 30

 */

// DFS
// Time O(n * m)
// Space O(N)
const findShortestWay = function(maze, ball, hole) {
  let path = '';
  const dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];
  const distance = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(Number.MAX_VALUE));

  dfs(ball[0], ball[1], 0, '');

  return path || 'impossible';

  function dfs(start, end, cost, route) {
    if (cost >= distance[start][end]) return;

    distance[start][end] = cost;

    for (let dir of dirs) {
      let x = start;
      let y = end;
      let count = 0;

      while (
        x + dir[0] >= 0 &&
        y + dir[1] >= 0 &&
        x + dir[0] < maze.length &&
        y + dir[1] < maze[0].length &&
        maze[x + dir[0]][y + dir[1]] === 0
      ) {
        x += dir[0];
        y += dir[1];
        count++;

        if (x === hole[0] && y === hole[1]) {
          if (cost + count < distance[hole[0]][hole[1]]) {
            distance[hole[0]][hole[1]] = cost + count;
            path = route + dir[2];
          }
          return;
        }
      }

      dfs(x, y, cost + count, route + dir[2]);
    }
  }
};

const maze = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 1, 0, 0, 0],
];
let x = [4, 3];
let y = [0, 1];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findShortestWay2 = function(maze, ball, hole) {
  const n = maze.length;
  const m = maze[0].length;
  const dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  const distance = Array(n)
    .fill(null)
    .map(() => Array(m).fill(Number.MAX_VALUE));

  const paths = Array(n)
    .fill(null)
    .map(() => Array(m).fill('@'));

  const queue = [];

  distance[ball[0]][ball[1]] = 0;
  paths[ball[0]][ball[1]] = '';
  queue.push(ball);

  while (queue.length) {
    let coord = queue.shift();

    for (let dir of dirs) {
      let x = coord[0];
      let y = coord[1];
      let path = paths[x][y];
      let count = distance[x][y];

      path += dir[2];

      while (x >= 0 && y >= 0 && x < n && y < m && maze[x][y] === 0) {
        if (x === hole[0] && y === hole[1]) break;
        x += dir[0];
        y += dir[1];
        count++;
      }

      // доводим значения до актуального размера
      if (x !== hole[0] || y !== hole[1]) {
        x -= dir[0];
        y -= dir[1];
        count--;
      }

      if (x === coord[0] && y === coord[1]) continue;

      if (count <= distance[x][y]) {
        if (count < distance[x][y]) {
          distance[x][y] = count;
          paths[x][y] = path;
        } else if (path < paths[x][y]) {
          paths[x][y] = path;
        }
        queue.push([x, y]);
      }
    }
  }

  return paths[hole[0]][hole[1]] === '@' ? 'impossible' : paths[hole[0]][hole[1]];
};

const res = findShortestWay2(maze, x, y);
console.log('---', res);
