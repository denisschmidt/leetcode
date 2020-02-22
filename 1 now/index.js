/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */
/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */

const { PriorityQueue } = require('../algorithms/priorityQueue');

function employeeFreeTime(schedule) {
  let pq = new PriorityQueue({ comparator: (a, b) => a.start - b.start });

  schedule.forEach(list => list.forEach(e => pq.offer(e)));

  let result = [];
  let current = pq.poll();

  while (!pq.isEmpty()) {
    if (current.end < pq.peek().start) {
      result.push(new Interval(current.end, pq.peek().start));
      current = pq.poll();
    } else {
      // пересекаются или сливаются
      let min = Math.min(current.start, pq.peek().start);
      let max = Math.max(current.end, pq.peek().end);

      current.start = min;
      current.end = max;

      pq.poll();
    }
  }

  return result;
}

function Interval(start, end) {
  this.start = start;
  this.end = end;
}
