/*
Given a list of 24-hour clock time points in "Hour:Minutes" format,
find the minimum minutes difference between any two time points in the list.

Example 1:
  Input: ["23:59","00:00"]
  Output: 1

Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.

 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let MAX_MINUTES = 24 * 60;
  let marks = new Map();

  for (let i = 0; i < timePoints.length; i++) {
    let point = timePoints[i].split(':');
    let h = parseInt(point[0]);
    let m = parseInt(point[1]);
    if (marks.has(h * 60 + m)) return 0;
    marks.set(h * 60 + m, true);
  }

  let first = Number.MAX_VALUE,
    last = Number.MIN_VALUE,
    prev = 0,
    min = Number.MAX_VALUE;
  for (let i = 0; i < MAX_MINUTES; i++) {
    if (marks.has(i)) {
      if (first !== Number.MAX_VALUE) {
        min = Math.min(min, i - prev);
      }
      first = Math.min(i, first);
      last = Math.max(i, last);
      prev = i;
    }
  }
  return Math.min(MAX_MINUTES - last + first, min);
};

let a = ['00:00', '00:02', '23:55', '23:57', '23:59'];

const res = findMinDifference(a);
console.log('---', res);
