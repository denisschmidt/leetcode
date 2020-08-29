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

*/

// Time O(N) - кол-во итераций будет равно time
// Space O(1) == O(26)
const leastInterval = (tasks, n) => {
  let pq = new PriorityQueue({ comparator: (a, b) => b - a });
  let bucket = Array(26).fill(false);

  for (let task of tasks) {
    bucket[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  for (let cnt of bucket) {
    if (cnt > 0) {
      pq.offer(cnt);
    }
  }

  let res = 0;
  let path = [];

  while (!pq.isEmpty()) {
    for (let i = 0; i <= n; i++) {
      if (!pq.isEmpty()) {
        let c = pq.poll() - 1;
        if (c > 0) {
          path.push(c);
        }
      }

      res++;

      if (!path.length && pq.isEmpty()) {
        return res;
      }
    }

    while (path.length) {
      let c = path.pop();
      if (c > 0) {
        pq.offer(c);
      }
    }
  }

  return res;
};
