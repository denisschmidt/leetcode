/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
function removeInterval(intervals, toBeRemoved) {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (overlap(intervals[i], toBeRemoved)) {
      let pair1 = [];
      let pair2 = [];

      if (intervals[i][0] > toBeRemoved[0]) {
        pair1 = [toBeRemoved[0], intervals[i][0]];
      } else {
        pair1 = [intervals[i][0], toBeRemoved[0]];
      }

      if (intervals[i][1] > toBeRemoved[1]) {
        pair2 = [toBeRemoved[1], intervals[i][1]];
      } else {
        pair2 = [intervals[i][1], toBeRemoved[1]];
      }

      if (!overlap(pair1, toBeRemoved)) {
        result.push(pair1);
      }

      if (!overlap(pair2, toBeRemoved)) {
        result.push(pair2);
      }
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}

function overlap([x, y], [u, z]) {
  return z > x && y > u;
}
