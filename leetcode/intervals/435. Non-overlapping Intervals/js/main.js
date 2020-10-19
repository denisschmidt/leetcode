// Time O(NLogN)
// Space O(N)

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
  if (intervals.length == 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let [start, end] = intervals[0];
  let res = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (overlap([start, end], intervals[i])) {
      start = Math.max(start, intervals[i][0]);
      end = Math.min(end, intervals[i][1]);
      res++;
    } else {
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  return res;

  function overlap([x, y], [u, z]) {
    return z > x && y > u;
  }
};
