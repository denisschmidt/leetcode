/*

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
  Input: [[1,2],[2,3],[3,4],[1,3]]
  Output: 1
  Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:
  Input: [[1,2],[1,2],[1,2]]
  Output: 2
  Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:
  Input: [[1,2],[2,3]]
  Output: 0
  Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
  

Note:
  You may assume the interval's end point is always bigger than its start point.
  Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

*/

/*
  While traversing, if there is no overlapping between the previous interval and the current interval, we need not remove any interval. 
  
  But, if an overlap exists between the previous interval and the current interval, we always drop the current interval.

*/

// Time O(NLogN)
// Space O(N)
const eraseOverlapIntervals = intervals => {
  if (intervals.length == 0) return 0;
  let n = intervals.length;

  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];
  let cnt = 1;

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      cnt++;
    }
  }

  return n - cnt;
};

// Time O(N^2)
// Space O(N)
const eraseOverlapIntervals_II = intervals => {
  intervals.sort((a, b) => a[1] - b[1]);

  let n = intervals.length;
  let cnt = 0;
  let removed = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    let j = i + 1;

    if (removed[i]) continue;

    while (j < n && overlap(intervals[i], intervals[j])) {
      if (!removed[j]) {
        cnt++;
        removed[j] = true;
      }
      j++;
    }
  }

  return cnt;

  function overlap([x, y], [u, z]) {
    return z > x && y > u;
  }
};
