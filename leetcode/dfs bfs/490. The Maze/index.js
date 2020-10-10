/*
There is a ball in a maze with empty spaces and walls.
The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall.
When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
You may assume that the borders of the maze are all walls.
The start and destination coordinates are represented by row and column indexes.

Example 1:

  Input 1: a maze represented by a 2D array

  0 0 1 0 0
  0 0 0 0 0
  0 0 0 1 0
  1 1 0 1 1
  0 0 0 0 0

  Input 2: start coordinate (rowStart, colStart) = (0, 4)
  Input 3: destination coordinate (rowDest, colDest) = (4, 4)

  Output: true

  Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

Example 2:

  Input 1: a maze represented by a 2D array

  0 0 1 0 0
  0 0 0 0 0
  0 0 0 1 0
  1 1 0 1 1
  0 0 0 0 0

  Input 2: start coordinate (rowStart, colStart) = (0, 4)
  Input 3: destination coordinate (rowDest, colDest) = (3, 2)

  Output: false

  Explanation: There is no way for the ball to stop at the destination.
 
Note:
  There is only one ball and one destination in the maze.
  Both the ball and the destination exist on an empty space, and they will not be at the same position initially.
  The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.
  The maze contains at least 2 empty spaces, and both the width and height of the maze won't exceed 100.

 */

// Time O(M*N)
// Space O(M*N)
const hasPath = (maze, start, end) => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const visited = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(false));

  return dfs(maze, visited, start, end, dirs);
};

function dfs(maze, visited, start, end, dirs) {
  if (visited[start[0]][start[1]]) return false;

  if (start[0] === end[0] && start[1] === end[1]) return true;

  visited[start[0]][start[1]] = true;

  for (let dir of dirs) {
    let x = start[0] + dir[0];
    let y = start[1] + dir[1];

    while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
      x += dir[0];
      y += dir[1];
    }

    if (dfs(maze, visited, [x - dir[0], y - dir[1]], end, dirs)) {
      return true;
    }
  }

  return false;
}

const maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];
const start = [0, 4];
const end = [3, 2];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(m*n)
// Space O(m*n)
const hasPath2 = (maze, start, end) => {
  let queue = [];
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const visited = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(false));

  queue.push(start);

  while (queue.length) {
    let coord = queue.shift();

    if (coord[0] === end[0] && coord[1] === end[1]) return true;

    for (let dir of dirs) {
      let x = coord[0] + dir[0];
      let y = coord[1] + dir[1];

      while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
        x += dir[0];
        y += dir[1];
      }

      if (!visited[coord[0]][coord[1]]) {
        queue.push([x - dir[0], y - dir[1]]);
        visited[x - dir[0]][y - dir[1]] = true;
      }
    }
  }
  return false;
};

const res = hasPath2(maze, start, end);
console.log('---', res);
