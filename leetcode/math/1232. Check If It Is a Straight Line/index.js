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

 */

/*
  
  Уравнение прямой   // (x - x1) / (x2 - x1) = (y - y1)/ (y2 - y1)

*/
// Time O(N)
// Space O(1)
var checkStraightLine = function (coordinates) {
  let x1 = coordinates[0][0];
  let y1 = coordinates[0][1];
  let x2 = coordinates[coordinates.length - 1][0];
  let y2 = coordinates[coordinates.length - 1][1];

  let a = x2 - x1;
  let b = y2 - y1;

  for (let i = 1; i < coordinates.length - 1; i++) {
    let [x, y] = coordinates[i];
    if (a * (y - y1) !== b * (x - x1)) {
      return false;
    }
  }
  return true;
};

/* 

  Формула площади треугольника 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))

*/
// Time O(N)
// Space O(1)
const checkStraightLine_II = coordinates => {
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
