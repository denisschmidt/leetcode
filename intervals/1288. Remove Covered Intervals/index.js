/*

Given a list of intervals, remove all intervals that are covered by another interval in the list. 

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example 1:
  Input: intervals = [[1,4],[3,6],[2,8]]
  Output: 2
  Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
  

Constraints:
  1 <= intervals.length <= 1000
  0 <= intervals[i][0] < intervals[i][1] <= 10^5
  intervals[i] != intervals[j] for all i != j

*/

// Time O(NLogN)
// Space O(N)
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let stack = [];

  let i = 0;
  while (i < intervals.length) {
    if (stack.length) {
      if (overlaps(last(stack), intervals[i])) {
        stack.pop();
      } else if (!overlaps(intervals[i], last(stack))) {
        stack.push(intervals[i]);
      }
    } else {
      stack.push(intervals[i]);
    }

    i++;
  }

  return stack.length;

  function last(x) {
    return x[x.length - 1];
  }

  function overlaps([a, b], [c, d]) {
    return c <= a && b <= d;
  }
};
