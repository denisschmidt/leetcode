/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
Check if these points make a straight line in the XY plane.

Example 1:

  Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
  Output: true

Example 2:
  Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
  Output: false

Constraints:
  2 <= coordinates.length <= 1000
  coordinates[i].length == 2
  -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
  coordinates contains no duplicate point.

ВАЖНО!!!
  Формула площади треугольника 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))

 */

// Time O(N)
// Space O(1)
const checkStraightLine = coordinates => {
  for (let i = 0; i <= coordinates.length - 3; i++) {
    const c1 = coordinates[i];
    const c2 = coordinates[i + 1];
    const c3 = coordinates[i + 2];

    if (!isCollinear(c1, c2, c3)) {
      return false;
    }
  }

  return true;

  function isCollinear([x1, y1], [x2, y2], [x3, y3]) {
    return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0;
  }
};
