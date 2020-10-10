/*

You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.  
You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:
  Input: sticks = [2,4,3]
  Output: 14

Example 2:
  Input: sticks = [1,8,3,5]
  Output: 30
 

Constraints:
  1 <= sticks.length <= 10^4
  1 <= sticks[i] <= 10^4

*/

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time O(N + LogN)
// Space O(N)
const connectSticks = sticks => {
  let n = sticks.length;

  let pq = new PriorityQueue({ comparator: (a, b) => a - b });

  for (let i = 0; i < n; i++) {
    pq.offer(sticks[i]);
  }

  let ans = 0;
  while (!pq.isEmpty()) {
    let a = pq.poll();

    if (!pq.isEmpty()) {
      let b = pq.poll();

      pq.offer(a + b);
      ans += a + b;
    }
  }
  return ans;
};

// Time O(N^3)
// Space O(N)
const connectSticks_II = sticks => {
  let n = sticks.length;
  let visited = Array(n).fill(false);
  let cnt = 0;
  let ans = 0;

  for (let k = 0; k < n - 1; k++) {
    let sum = Number.MAX_VALUE;
    let index1 = 0;
    let index2 = 0;

    for (let i = 0; i < sticks.length; i++) {
      if (visited[i]) continue;
      for (let j = i + 1; j < sticks.length; j++) {
        if (i == j || visited[j]) continue;

        if (sticks[i] + sticks[j] <= sum) {
          sum = sticks[i] + sticks[j];
          index1 = i;
          index2 = j;
        }
      }
    }

    ans += sum;

    visited[index1] = true;
    visited[index2] = true;
    sticks.push(sum);
  }

  return ans;
};
