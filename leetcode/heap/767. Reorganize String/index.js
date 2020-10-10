/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:
  Input: S = "aab"
  Output: "aba"

Example 2:
  Input: S = "aaab"
  Output: ""

Note: S will consist of lowercase letters and have length in range [1, 500].

*/

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time O(N*LogA) А это размер алфавита 26
// Space O(A)
const reorganizeString = str => {
  let pq = new PriorityQueue({ comparator: (a, b) => b[1] - a[1] });
  let map = {};
  let result = '';

  for (const s of str) {
    map[s] = ~~map[s] + 1;
  }

  for (const key of Object.keys(map)) {
    if (map[key] > 0) {
      pq.offer([key, map[key]]);
    }
  }

  while (pq.size() > 0) {
    if (!pq.isEmpty()) {
      let [k1, v1] = pq.poll();

      if (result.length && result[result.length - 1] === k1) {
        return '';
      }

      if (!pq.isEmpty()) {
        let [k2, v2] = pq.poll();

        if (v1 - 1 > 0) {
          pq.offer([k1, v1 - 1]);
        }

        if (v2 - 1 > 0) {
          pq.offer([k2, v2 - 1]);
        }

        result += k1 + k2;
      } else {
        result += k1;

        if (v1 - 1 > 0) {
          pq.offer([k1, v1 - 1]);
        }
      }
    }
  }

  return result;
};
