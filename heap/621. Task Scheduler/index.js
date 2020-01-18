/*

Given a char array representing tasks CPU need to do. 
It contains capital letters A to Z where different letters represent different tasks. 
Tasks could be done without original order. Each task could be done in one interval. 
For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, 
there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example:
  Input: tasks = ["A","A","A","B","B","B"], n = 2
  Output: 8
  Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

Note:
  The number of tasks is in the range [1, 10000].
  The integer n is in the range [0, 100].

  AB#A

*/

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time O(N) - кол-во итераций будет равно time
// Space O(1) == O(26)
var leastInterval = function(tasks, n) {
  let map = Array(26).fill(0);

  for (const task of tasks) {
    let index = task.charCodeAt(0) - 'A'.charCodeAt(0);
    map[index]++;
  }

  let pq = new PriorityQueue({ comparator: (a, b) => b - a });

  for (const cnt of map) {
    if (count > 0) {
      pq.offer(cnt);
    }
  }

  let time = 0;
  while (pq.size() > 0) {
    let i = 0;
    let copy = [];

    while (i <= n) {
      if (!pq.isEmpty()) {
        if (pq.peek() > 1) {
          copy.push(pq.poll() - 1);
        } else {
          pq.poll();
        }
      }

      time++;

      if (pq.isEmpty() && !copy.length) {
        break;
      }

      i++;
    }

    for (const cnt of copy) {
      if (cnt > 0) {
        pq.offer(cnt);
      }
    }
  }

  return time;
};
