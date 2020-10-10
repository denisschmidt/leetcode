// Sort
// Time O(NLogN)
// Space O(1)
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let start = -1;
  let end = -1;
  let res = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > start && intervals[i][1] > end) {
      res++;
      start = intervals[i][0];
    }

    end = Math.max(end, intervals[i][1]);
  }

  return res;
};

// Stack + Sort
// Time O(NLogN)
// Space O(N)
const removeCoveredIntervals_II = intervals => {
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
