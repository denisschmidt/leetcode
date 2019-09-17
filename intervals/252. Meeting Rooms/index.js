/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
determine if a person could attend all meetings.

Example 1:

  Input: [[0,30],[5,10],[15,20]]
  Output: false

Example 2:

  Input: [[7,10],[2,4]]
  Output: true
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

 */
// Time O(N)
// Space O(1)
const canAttendMeetings = function(intervals) {
  const n = intervals.length;

  if (!n) return true;

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < n - 1; i++) {
    if (!overlap(intervals[i], intervals[i + 1])) continue;
    else return false;
  }

  return true;
};

function overlap([x, y], [u, z]) {
  return x < z && y > u;
}
