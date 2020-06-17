/*

You are playing a simplified Pacman game. 

You start at the point (0, 0), and your destination is (target[0], target[1]). 

There are several ghosts on the map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions: north, east, west, or south, going from the previous point to a new point 1 unit of distance away.

You escape if and only if you can reach the target before any ghost reaches you (for any given moves the ghosts may take.)  

If you reach any square (including the target) at the same time as a ghost, it doesn't count as an escape.

Return True if and only if it is possible to escape.

Example 1:
  Input: 
    ghosts = [[1, 0], [0, 3]]
    target = [0, 1]
  Output: true
Explanation: You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3) have no way to catch up with you.

Example 2:
  Input: 
    ghosts = [[1, 0]]
    target = [2, 0]
  Output: false
  Explanation: You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.

Example 3:
  Input: 
    ghosts = [[2, 0]]
    target = [1, 0]
  Output: false
  Explanation: The ghost can reach the target at the same time as you.

Note:
  All points have coordinates with absolute value <= 10000.
  The number of ghosts will not exceed 100.

*/

// Time O(N)
// Space O(1)
const escapeGhosts = (ghosts, target) => {
  let userDist = get([0, 0]);

  for (let x of ghosts) {
    if (get(x) <= userDist) return false;
  }

  return true;

  function get([x, y]) {
    return Math.abs(x - target[0]) + Math.abs(y - target[1]);
  }
};

// Time O(N + Log2)
// Space O(LogN)
const escapeGhosts_II = (ghosts, target) => {
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let min = Number.MAX_VALUE;
  let bestCord = 0;

  for (let x of ghosts) {
    if (min > get(x)) {
      bestCord = x;
      min = get(x);
    }
  }

  let userSteps = getDistance([0, 0]);
  let ghostSteps = getDistance(bestCord);

  return userSteps < ghostSteps;

  function getDistance(coord) {
    let pq = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });
    pq.offer([coord[0], coord[1], get([0, 0])]);

    let steps = 0;

    while (!pq.isEmpty()) {
      let [i, j] = pq.poll();

      if (i == target[0] && j == target[1]) return steps;

      for (let dir of dirs) {
        let x = dir[0] + i;
        let y = dir[1] + j;
        pq.offer([x, y, get([x, y])]);
      }

      steps++;
    }
  }

  function get([x, y]) {
    return Math.abs(x - target[0]) + Math.abs(y - target[1]);
  }
};
