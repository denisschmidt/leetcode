/* 
This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

https://www.dailycodingproblem.com/solution/21?token=aceb806191ef8f78896bd65776fdab032d5887655078f24819287d628900bd946ccfee5d
 */

// Time O(n log n ) since we have to sort the intervals.
const max_overlapping = intervals => {
  let maxCount = intervals.length;
  let starts = intervals.sort((a, b) => {
    let [startA] = a;
    let [startB] = b;
    return startA - startB;
  });

  let ends = intervals.sort((a, b) => {
    let [startA, endA] = a;
    let [startB, endB] = b;
    return endA - endB;
  });

  let i = 0;
  let j = 0;
  let count = 0;
  let ans = 0;
  while (i < maxCount && j < maxCount) {
    const [start] = starts[i];
    const [_, end] = ends[j];

    if (start < end) {
      count = count + 1;
      i++;
      ans = Math.max(ans, count);
    } else {
      j++;
      count = count - 1;
    }
  }
  return ans;
};

const res = max_overlapping([
  [30, 75],
  [0, 50],
  [60, 150],
]);
console.log('----', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O(N^2) This would take O(n^2) time, since we're checking each interval pairwise.
function isOverlaps(a, b) {
  let [startA, endA] = a;
  let [startB, endB] = b;

  return !(startA > endB || endA < startB);
}

const max_overlapping2 = intervals => {
  let ans = intervals.length;
  let maxCount = intervals.length;

  for (let interval of intervals) {
    let count = maxCount;

    for (let otherInterval of intervals) {
      if (interval === otherInterval) continue;
      if (!isOverlaps(interval, otherInterval)) {
        count--;
      }
    }
    ans = Math.min(ans, count);
  }
  return ans;
};

const res2 = max_overlapping2([
  [30, 75],
  [0, 50],
  [60, 150],
]);
console.log('----', res2);
