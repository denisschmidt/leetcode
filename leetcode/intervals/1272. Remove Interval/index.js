/*

Given a sorted list of disjoint intervals, each interval intervals[i] = [a, b] represents the set of real numbers x 
such that a <= x < b.

We remove the intersections between any interval in intervals and the interval toBeRemoved.

Return a sorted list of intervals after all such removals.

 
Example 1:
  Input: intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]
  Output: [[0,1],[6,7]]

Example 2:
  Input: intervals = [[0,5]], toBeRemoved = [2,3]
  Output: [[0,2],[3,5]]
 
Constraints:
  1 <= intervals.length <= 10^4
  -10^9 <= intervals[i][0] < intervals[i][1] <= 10^9

*/

// Time O(N)
// Space O(N)
const removeInterval = function (intervals, toBeRemoved) {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (overlap(interval, toBeRemoved)) {
      if (interval[0] < toBeRemoved[0]) {
        result.push([interval[0], toBeRemoved[0]]);
      }

      if (interval[1] > toBeRemoved[1]) {
        result.push([toBeRemoved[1], interval[1]]);
      }
    } else {
      result.push(interval);
    }
  }

  return result;

  function overlap([x, y], [u, v]) {
    return x < v && u < y;
  }
};
