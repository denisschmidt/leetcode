// Time O(NLogN)
// Space O(N)
const minCost = (s, cost) => {
  let n = s.length;
  let pq = new PriorityQueue({ comparator: (a, b) => a - b });
  let res = 0;
  pq.offer(cost[0]);

  for (let i = 1; i < n; i++) {
    if (s[i - 1] == s[i]) {
      pq.offer(cost[i]);
    } else {
      if (pq.size() > 1) {
        while (pq.size() > 1) {
          res += pq.poll();
        }
      }

      pq.poll();
      pq.offer(cost[i]);
    }
  }

  while (pq.size() > 1) {
    res += pq.poll();
  }

  return res;
};
