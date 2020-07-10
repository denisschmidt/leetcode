/*

In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  

You may return any answer, and it is guaranteed an answer exists.

Example 1:
  Input: [1,1,1,2,2,2]
  Output: [2,1,2,1,2,1]

Example 2:
  Input: [1,1,1,1,2,2,3,3]
  Output: [1,3,1,3,2,1,2,1]
 

Note:
  1 <= barcodes.length <= 10000
  1 <= barcodes[i] <= 10000

*/

// Time O(N*LogN)
// Space O(N)
const rearrangeBarcodes = barcodes => {
  let pq = new PriorityQueue({ comparator: (a, b) => b[1] - a[1] });
  let map = {};
  let res = [];

  for (let code of barcodes) {
    map[code] = ~~map[code] + 1;
  }

  for (let k of Object.keys(map)) {
    pq.offer([k, map[k]]);
  }

  while (!pq.isEmpty()) {
    let a = pq.poll();

    res.push(a[0]);

    if (!pq.isEmpty()) {
      let b = pq.poll();

      res.push(b[0]);

      if (a[1] > 1) {
        pq.offer([a[0], a[1] - 1]);
      }

      if (b[1] > 1) {
        pq.offer([b[0], b[1] - 1]);
      }
    }
  }

  return res;
};
