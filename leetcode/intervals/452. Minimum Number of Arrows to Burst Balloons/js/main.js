// Time O(NLogN)
// Space O(N)
const findMinArrowShots = points => {
  if (points.length == 0) {
    return 0;
  }

  points.sort((a, b) => a[0] - b[0]);

  let [start, end] = points[0];
  let res = 1;

  for (let i = 1; i < points.length; i++) {
    if (overlap([start, end], points[i])) {
      start = Math.max(start, points[i][0]);
      end = Math.min(end, points[i][1]);
    } else {
      res++;
      start = points[i][0];
      end = points[i][1];
    }
  }

  return res;

  function overlap([x, y], [u, z]) {
    return z >= x && y >= u;
  }
};
