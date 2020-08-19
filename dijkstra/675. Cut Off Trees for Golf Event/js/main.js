/*

You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:
  0 represents the obstacle can't be reached.
  1 represents the ground can be walked through.

The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.

In one step you can walk in any of the four directions top, bottom, left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. 

And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. 

If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:
  Input: 
    [
      [1,2,3],
      [0,0,4],
      [7,6,5]
    ]
  Output: 6
  
  Example 2:
    Input: 
      [
        [1,2,3],
        [0,0,0],
        [7,6,5]
      ]
    Output: -1
  

Example 3:
  Input: 
    [
      [2,3,4],
      [0,0,5],
      [8,7,6]
    ]
  Output: 6
  Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
  
Constraints:
  1 <= forest.length <= 50
  1 <= forest[i].length <= 50
  0 <= forest[i][j] <= 10^9

*/

// Time O(N^2 * M^2) - where (N = number of rows, M = number of columns)
// Since there are N * M trees and for each BFS worst case Time complexity is O(N * M) too.
// Space O(N^2 * M^2)
const cutOffTree = forest => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let n = forest.length;
  let m = forest[0].length;

  // Since we have to cut trees in order of their height
  // Use minHeap for finding most shortest trees of thier height
  // Poll each tree from the queue and use BFS to find out steps needed
  let pq = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });
  pq.offer([0, 0, forest[0][0]]); // i, j, height, step

  // Init minHeap
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (forest[i][j] > 1) {
        pq.offer([i, j, forest[i][j]]);
      }
    }
  }

  let prevPos = [0, 0];
  let res = 0;

  while (!pq.isEmpty()) {
    let currentPos = pq.poll();

    let dist = calcDist(prevPos, currentPos);

    if (dist == -1) {
      return -1;
    }

    res += dist;

    prevPos = currentPos;
  }

  return res;

  // BFS
  function calcDist(start, end) {
    let step = 0;
    let queue = [];
    let visited = Array(n)
      .fill(false)
      .map(() => Array(m).fill(false));

    queue.push(start);
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      let s = queue.length;

      for (let k = 0; k < s; k++) {
        let [i, j] = queue.shift();

        if (i == end[0] && j == end[1]) {
          forest[i][j] == 1;
          return step;
        }

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          if (x < 0 || y < 0 || x >= n || y >= m || forest[x][y] == 0 || visited[x][y]) continue;

          queue.push([x, y]);
          visited[x][y] = true;
        }
      }
      step++;
    }

    return -1;
  }
};
