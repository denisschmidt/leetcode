/*

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
  Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
  Output: [[1,5],[6,9]]

Example 2:
  Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
  Output: [[1,2],[3,10],[12,16]]

Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

function insert(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  let result = [];
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  let i = 0;

  while (i < intervals.length) {
    if (overlap(intervals[i], newInterval)) {
      min = Math.min(min, intervals[i][0], newInterval[0]);
      max = Math.max(max, intervals[i][1], newInterval[1]);

      if (i + 1 === intervals.length) {
        result.push([min, max]);
      }
    } else {
      if (min === Number.MAX_VALUE && max === -Number.MAX_VALUE) {
        if (result.length > 0 && result[result.length - 1][1] < newInterval[0] && newInterval[1] < intervals[i][1]) {
          result.push(newInterval);
        }

        result.push(intervals[i]);
      } else {
        result.push([min, max]);
        result.push(intervals[i]);
        break;
      }
    }
    i++;
  }

  if (i < intervals.length) {
    return [...result, ...intervals.slice(i + 1)];
  }

  if (min === Number.MAX_VALUE && max === -Number.MAX_VALUE) {
    if (newInterval[0] > intervals[intervals.length - 1][0]) {
      result.push(newInterval);
    } else if (newInterval[1] < intervals[0][0]) {
      result.unshift(newInterval);
    }
  }
  return result;
}

function overlap([x, y], [u, z]) {
  return x <= z && u <= y;
}
