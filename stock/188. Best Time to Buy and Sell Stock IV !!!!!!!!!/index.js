/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Example 1:
  Input: [2,4,1], k = 2
  Output: 2
  Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
  Input: [3,2,6,5,0,3], k = 2
  Output: 7
  Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.


 */

const maxProfit = (k, prices) => {};

// The key point is when there are two v/p pairs (v1, p1) and (v2, p2), satisfying
// v1 <= v2 and p1 <= p2, we can either make one transaction at [v1, p2], or make
// two at both [v1, p1] and [v2, p2]. The trick is to treat [v1, p2] as the first
// transaction, and [v2, p1] as the second. Then we can guarantee the right max
// profits in both situations, p2 - v1 for one transaction and p1 - v1 + p2 - v2
// for two.
//
// Finding all v/p pairs and calculating the profits takes O(n) since there are
// up to n/2 such pairs. And extracting k maximums from the heap consumes another O(k*log(n)).

// Time O(n + k*log(n))
const maxProfit_II = function(k, prices) {
  if (prices == null || prices.length <= 1) return 0;

  const pairs = [];
  const size = prices.length;
  let startPair = 0;
  let endPair = 0;
  let profits = [];
  let ans = 0;

  while (endPair < size) {
    // find pairs
    for (startPair = endPair; startPair < size - 1 && prices[startPair] > prices[startPair + 1]; startPair++);

    for (endPair = startPair + 1; endPair < size && prices[endPair] >= prices[endPair - 1]; endPair++);

    // example (5 - 8) (4 - 6)
    // profit 1 transaction if current startPair is lower than last startPair.
    while (pairs.length && prices[startPair] < prices[pairs[pairs.length - 1][0]]) {
      let [start, end] = pairs[pairs.length - 1];
      profits.push(prices[end - 1] - prices[start]);
      pairs.pop();
    }

    // Save profit difference between 1 transaction (last v and current p) and 2 transactions
    // (last v/p + current v/p), if current v is higher than last v and current p is higher
    // than last p.
    while (pairs.length && prices[endPair - 1] >= prices[pairs[pairs.length - 1][1] - 1]) {
      let [start, end] = pairs[pairs.length - 1];
      profits.push(prices[end - 1] - prices[startPair]);
      startPair = start;
      pairs.pop();
    }

    pairs.push([startPair, endPair]);
  }

  while (pairs.length) {
    let [start, end] = pairs[pairs.length - 1];

    profits.push(prices[end - 1] - prices[start]);
    pairs.pop();
  }

  if (k >= profits.length) {
    ans = profits.reduce((acc, val) => acc + val, 0);
  } else {
    profits.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
      if (profits[i]) ans += profits[i];
    }
  }

  return ans;
};

const res2 = maxProfit_II(5, [1, 4, 7, 5, 6, 2, 5, 1, 9, 7, 9, 7, 0, 6, 8]);
console.log('---', res2);
