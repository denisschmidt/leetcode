/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) {
    return points.length;
  }

  let max = 0;

  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      if (same(points[i], points[j])) continue;
      let count = 2;

      let dy = points[j][1] - points[i][1];
      let dx = points[j][0] - points[i][0];

      for (let k = 0; k < points.length; ++k) {
        if (k != i && k != j) {
          let dy0 = points[i][1] - points[k][1];
          let dx0 = points[i][0] - points[k][0];

          if (BigInt(dy) * BigInt(dx0) == BigInt(dy0) * BigInt(dx)) {
            ++count;
          }
        }
      }

      max = Math.max(max, count);
    }
  }

  return max === 0 ? points.length : max;
};

function same(a, b) {
  return a[0] == b[0] && a[1] == b[1];
}
