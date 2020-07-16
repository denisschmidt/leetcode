/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
  let map = new Map();

  for (let [i, j] of points) {
    if (!map.has(i)) {
      map.set(i, new Set());
    }
    map.get(i).add(j);
  }

  console.log(map);

  let min = Number.MAX_VALUE;
  for (const p1 of points) {
    for (const p2 of points) {
      if (p1[0] == p2[0] || p1[1] == p2[1]) continue;

      if (map.get(p1[0]).has(p2[1]) && map.get(p2[0]).has(p1[1])) {
        console.log('---');
        min = Math.min(min, Math.abs(p1[0] - p2[0]) * Math.abs(p1[1] - p2[1]));
      }
    }
  }
  return min == Number.MAX_VALUE ? 0 : min;
};

minAreaFreeRect([
  [1, 2],
  [2, 1],
  [1, 0],
  [0, 1],
]);
