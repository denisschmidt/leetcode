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

const maxProfit = function(k, prices) {
  if (prices == null || prices.length <= 1) return 0;

  let max = prices[0];
  let min = prices[0];
  let maxValue = -Number.MAX_VALUE;
  let minIndex = 1;
  let maxIndex = 1;
  let paths = [];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= max) {
      // price down
      if (minIndex !== maxIndex) {
        paths.push([min, max]);
      }
      max = min = prices[i];
      minIndex = maxIndex = i;
    } else if (prices[i] > max) {
      // price up
      max = prices[i];
      minIndex++;
    }
  }

  if (min !== max) {
    paths.push([min, max]);
  }
  let fullDiffs = [];
  let fullDiffsSum = 0;
  for (let i = 0; i < paths.length; i++) {
    let [startLeft, endLeft] = paths[i];

    for (let j = i + 1; j < paths.length; j++) {
      let ans = 0;
      let count = k;
      let [_, endRight] = paths[j];
      ans = endRight - startLeft;
      count--;

      for (let l = j + 1; l < paths.length && count > 0; l++) {
        let [s, e] = paths[l];
        ans += e - s;
        count--;
      }
      maxValue = Math.max(maxValue, ans);
    }

    let diff = endLeft - startLeft;
    if (fullDiffs[fullDiffs.length - 1] > diff) {
      fullDiffs.push(diff);
    } else {
      fullDiffs.unshift(diff);
    }
  }

  for (let i = 0; i < k; i++) {
    if (fullDiffs[i]) fullDiffsSum += fullDiffs[i];
  }

  maxValue = Math.max(maxValue, fullDiffsSum);

  return maxValue;
};

const res = maxProfit(2, [6, 5, 4, 8, 6, 8, 7, 8, 9, 4, 5]);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const maxProfit2 = function(k, prices) {
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

const res2 = maxProfit2(5, [1, 4, 7, 5, 6, 2, 5, 1, 9, 7, 9, 7, 0, 6, 8]);
console.log('---', res2);
