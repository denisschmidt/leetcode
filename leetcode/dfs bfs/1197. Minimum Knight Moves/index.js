/*

In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. 
Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square [x, y].  
It is guaranteed the answer exists.

Example 1:
  Input: x = 2, y = 1
  Output: 1
  Explanation: [0, 0] → [2, 1]

Example 2:
  Input: x = 5, y = 5
  Output: 4
  Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 

Constraints:  |x| + |y| <= 300

*/

// BFS дает кратчайший путь
// Time O(N!)
// Space O(N!)
const minKnightMoves = (x, y) => {
  let dirs = [
    [-1, -2],
    [-2, -1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [1, 2],
    [2, 1],
  ];

  x = Math.abs(x);
  y = Math.abs(y);

  let visited = new Set();

  visited.add(getKey(0, 0));

  let ans = 0;
  let queue = [[0, 0]];

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let [i, j] = queue.shift();

      if (i == x && j == y) {
        return ans;
      }

      for (let dir of dirs) {
        let newX = i + dir[0];
        let newY = j + dir[1];
        let key = getKey(newX, newY);

        if (!visited.has(key) && newX >= -1 && newY >= -1) {
          visited.add(key);
          queue.push([newX, newY]);
        }
      }
    }

    ans++;
  }

  return -1;

  function getKey(x, y) {
    return `${x}#${y}`;
  }
};
