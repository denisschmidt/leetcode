/*

A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

Given three integers a, b and c, return any string s, which satisfies following conditions:

s is happy and longest possible.
s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
s will only contain 'a', 'b' and 'c' letters.
If there is no such string s return the empty string "".

Example 1:
  Input: a = 1, b = 1, c = 7
  Output: "ccaccbcc"
  Explanation: "ccbccacc" would also be a correct answer.

Example 2:
  Input: a = 2, b = 2, c = 1
  Output: "aabbc"

Example 3:
  Input: a = 7, b = 1, c = 0
  Output: "aabaa"
  Explanation: It's the only correct answer in this case.
 

Constraints:
  0 <= a, b, c <= 100
  a + b + c > 0

*/

// Time O(N * LogN)
// Space O(1)
const longestDiverseString = (a, b, c) => {
  let pq = new PriorityQueue({ comparator: (a, b) => b[1] - a[1] });
  let set = new Set(['aaa', 'bbb', 'ccc']);
  let chars = [
    ['a', a],
    ['b', b],
    ['c', c],
  ];

  for (let [ch, cnt] of chars) {
    if (cnt > 0) pq.offer([ch, cnt]);
  }

  let str = '';

  while (!pq.isEmpty()) {
    let [ch, cnt] = pq.poll();

    let current = str.substring(str.length - 2) + ch;

    if (set.has(current)) {
      if (!pq.isEmpty()) {
        let [ch2, cnt2] = pq.poll();

        str += ch2;
        pq.offer([ch, cnt]);

        if (cnt2 > 1) {
          pq.offer([ch2, --cnt2]);
        }
      }
    } else {
      str += ch;
      if (cnt > 1) {
        pq.offer([ch, --cnt]);
      }
    }
  }

  if (str.indexOf('aaa') > -1 || str.indexOf('bbb') > -1 || str.indexOf('ccc') > -1) return '';

  return str;
};
