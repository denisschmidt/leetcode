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

// Time O(m*n^2)
// Space O(m*n)
const minDistance = (distance, visited) => {
  let min = [-1, -1];
  let min_val = Number.MAX_VALUE;

  for (let i = 0; i < distance.length; i++) {
    for (let j = 0; j < distance[0].length; j++) {
      if (!visited[i][j] && distance[i][j] < min_val) {
        min = [i, j];
        min_val = distance[i][j];
      }
    }
  }
  return min;
};

const dijkstra = (maze, distance, visited) => {
  let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

  while (true) {
    let s = minDistance(distance, visited);

    if (s[0] < 0) break;

    visited[s[0]][s[1]] = true;

    for (let dir of dirs) {
      let x = dir[0] + s[0];
      let y = dir[1] + s[1];
      let count = 0;

      while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] === 0) {
        x += dir[0];
        y += dir[1];

        count++;
      }

      if (distance[s[0]][s[1]] + count < distance[x - dir[0]][y - dir[1]]) {
        distance[x - dir[0]][y - dir[1]] = distance[s[0]][s[1]] + count;
      }
    }
  }
};

const shortestDistance = (maze, start, end) => {
  const distance = Array(maze.length)
    .fill(null)
    .map(() => {
      return Array(maze[0].length).fill(Number.MAX_VALUE);
    });

  const visited = Array(maze.length)
    .fill(null)
    .map(() => {
      return Array(maze[0].length).fill(false);
    });

  distance[start[0]][start[1]] = 0;

  dijkstra(maze, distance, visited);

  return distance[end[0]][end[1]] === Number.MAX_VALUE ? -1 : distance[end[0]][end[1]];
};

const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];

const res = shortestDistance(maze, [0, 4], [4, 4]);
console.log('---', res);
