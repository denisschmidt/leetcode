/*

Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

Example 1:
  Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
  Output: true
  Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

Example 2:
  Input: hand = [1,2,3,4,5], W = 4
  Output: false
  Explanation: Alice's hand can't be rearranged into groups of 4.
 

Constraints:
  1 <= hand.length <= 10000
  0 <= hand[i] <= 10^9
  1 <= W <= hand.length
  Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

*/

// Time O(N * LogN)
// Space O(N)
const isNStraightHand = (hand, w) => {
  let pq = new PriorityQueue({ comparator: (a, b) => a - b });

  for (let x of hand) {
    pq.offer(x);
  }

  let cnt = 0;
  let comb = [];
  let tmp = [];

  while (!pq.isEmpty()) {
    let x = pq.poll();

    if ((comb.length < w && x - comb[comb.length - 1] == 1) || !comb.length) {
      comb.push(x);
    } else {
      tmp.push(x);
    }

    if (comb.length == w) {
      cnt++;
      comb = [];

      tmp.forEach(c => pq.offer(c));
      tmp = [];
    }
  }

  if (comb.length == w) cnt++;

  return cnt * w == hand.length;
};
