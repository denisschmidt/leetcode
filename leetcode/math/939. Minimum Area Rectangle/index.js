/*

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

Example 1:
  Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
  Output: 4

Example 2:
  Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
  Output: 2
  

Note:
  1 <= points.length <= 500
  0 <= points[i][0] <= 40000
  0 <= points[i][1] <= 40000
  All points are distinct.

*/

// Time O(N^2)
// Space O(N)
const minAreaRect = points => {
  let map = new Map();

  for (let [i, j] of points) {
    if (!map.has(i)) {
      map.set(i, new Set());
    }
    map.get(i).add(j);
  }

  let min = Number.MAX_VALUE;
  for (const p1 of points) {
    for (const p2 of points) {
      if (p1[0] == p2[0] || p1[1] == p2[1]) continue;

      // находим точку в которой сходится ширина и высота
      // [1, 1] [3, 3]
      if (map.get(p1[0]).has(p2[1]) && map.get(p2[0]).has(p1[1])) {
        min = Math.min(min, Math.abs(p1[0] - p2[0]) * Math.abs(p1[1] - p2[1]));
      }
    }
  }
  return min == Number.MAX_VALUE ? 0 : min;
};
