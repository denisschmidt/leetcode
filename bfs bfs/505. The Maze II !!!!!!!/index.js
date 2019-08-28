/*

There is a ball in a maze with empty spaces and walls.
The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall.

When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, find the shortest distance for the ball to stop at the destination.

The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the destination (included).

If the ball cannot stop at the destination, return -1.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
You may assume that the borders of the maze are all walls.

The start and destination coordinates are represented by row and column indexes.


Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: 12

Explanation: One shortest way is : left -> down -> left -> down -> right -> down -> right.
             The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.


 */

// Time complexity : O(m*n*max(m,n))
// Space complexity : O(mn)

var shortestDistance = function(maze, start, end) {
  const distance = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(Number.MAX_VALUE));

  distance[start[0]][start[1]] = 0;

  let queue = [];
  let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

  queue.push(start);

  while (queue.length) {
    const coord = queue.shift();

    for (let [from, to] of dirs) {
      let x = coord[0] + from;
      let y = coord[1] + to;
      let count = 0;

      while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
        x += from;
        y += to;

        count++;
      }

      if (distance[coord[0]][coord[1]] + count < distance[x - from][y - to]) {
        distance[x - from][y - to] = distance[coord[0]][coord[1]] + count;
        queue.push([x - from, y - to]);
      }
    }
  }

  return distance[end[0]][end[1]] === Number.MAX_VALUE ? -1 : distance[end[0]][end[1]];
};
const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];

const res = shortestDistance(maze, [0, 4], [4, 4]);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(m * n * max(m,n))
// Further, for every current node chosen, we can travel upto a maximum depth of max(m,n) in any direction.

// Space O(mn). distance array of size m * n is used
const dfs = (maze, start, distance) => {
  let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

  for (let dir of dirs) {
    let x = start[0] + dir[0];
    let y = start[1] + dir[1];
    let count = 0;

    while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
      x += dir[0];
      y += dir[1];

      count++;
    }

    // If distance[k][l] + count is lesser than distance[i][j], we can reach the position (i,j) from the current route in lesser number of steps
    if (distance[start[0]][start[1]] + count < distance[x - dir[0]][y - dir[1]]) {
      distance[x - dir[0]][y - dir[1]] = distance[start[0]][start[1]] + count;
      dfs(maze, [x - dir[0], y - dir[1]], distance);
    }
  }
};

const shortestDistance = (maze, start, end) => {
  const distance = Array(maze.length)
    .fill(null)
    .map(() => {
      return Array(maze[0].length).fill(Number.MAX_VALUE);
    });

  distance[start[0]][start[1]] = 0;

  dfs(maze, start, distance);
  return distance[end[0]][end[1]] === Number.MAX_VALUE ? -1 : distance[end[0]][end[1]];
};

const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];

const res = shortestDistance(maze, [0, 4], [4, 4]);
console.log('---', res);
