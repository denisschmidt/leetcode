/*

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;

If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

*/

// Time O(N + LogN)
// Space O(N)
const lastStoneWeight = stones => {
  let pq = new PriorityQueue({ comparator: (a, b) => b - a });

  for (let i = 0; i < stones.length; i++) {
    pq.offer(stones[i]);
  }

  while (!pq.isEmpty()) {
    let a = pq.poll();

    if (!pq.isEmpty()) {
      let b = pq.poll();

      if (a > b) {
        pq.offer(a - b);
      }
    } else {
      return a;
    }
  }

  return 0;
};
