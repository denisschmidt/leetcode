/*

We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

Example 1:
  Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
  Output: [[3,4]]
  Explanation:
    There are a total of three employees, and all common
    free time intervals would be [-inf, 1], [3, 4], [10, inf].
    We discard any intervals that contain inf as they aren't finite.
 
Example 2:
  Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
  Output: [[5,6],[7,9]]
 
(
  Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays.
  For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined.
)

Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

Note:
  schedule and schedule[i] are lists with lengths in range [1, 50].
  0 <= schedule[i].start < schedule[i].end <= 10^8.

  NOTE: 
    input types have been changed on June 17, 2019.
    Please reset to default code definition to get new method signature.

*/

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time(ClogN) где N - количество сотрудников, а C - количество рабочих мест для всех сотрудников.
// Максимальный размер кучи равен N, поэтому каждая операция push и pop - это O(logN) и существует O(C) таких операций.

// Space O(N)
const employeeFreeTime = schedule => {
  let pq = new PriorityQueue({ comparator: (a, b) => a.start - b.start });

  schedule.forEach(list => list.forEach(e => pq.offer(e)));
  let current = pq.poll();

  let result = [];

  while (!pq.isEmpty()) {
    if (current.end < pq.peek().start) {
      result.push(new Interval(current.end, pq.peek().start));
      current = pq.poll();
    } else {
      // интервалы пересекаются следовательно мы их мерджим
      let min = Math.min(current.start, pq.peek().start);
      let max = Math.max(current.end, pq.peek().end);

      current.start = min;
      current.end = max;

      pq.poll();
    }
  }

  return result;
};

// Time O(N * LogN) - где N - количество интервалов для всех сотрудников.
// Space O(N)
const employeeFreeTime_II = schedule => {
  const n = schedule.length;
  const start = [];
  const end = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      start.push(schedule[i][j].start);
      end.push(schedule[i][j].end);
    }
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  const results = [];

  for (let i = 0; i < start.length - 1; i++) {
    if (start[i + 1] > end[i]) {
      let node = new Interval(end[i], start[i + 1]);
      results.push(node);
    }
  }

  return results;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}
